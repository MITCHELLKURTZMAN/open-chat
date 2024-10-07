use crate::TimerJobItemGroup;
use ic_cdk_timers::TimerId;
use serde::{Deserialize, Deserializer, Serialize, Serializer};
use std::collections::btree_map::Entry::{Occupied, Vacant};
use std::collections::{BTreeMap, BTreeSet, VecDeque};
use std::marker::PhantomData;
use std::ops::DerefMut;
use std::rc::Rc;
use std::sync::Mutex;
use std::time::Duration;

pub struct GroupedTimerJobQueue<T: TimerJobItemGroup> {
    inner: Rc<Mutex<GroupedTimerJobQueueInner<T::Key, T::Item>>>,
    phantom: PhantomData<T>,
}

impl<T: TimerJobItemGroup> GroupedTimerJobQueue<T> {
    pub fn new(max_concurrency: usize) -> Self {
        Self {
            inner: Rc::new(Mutex::new(GroupedTimerJobQueueInner {
                queue: VecDeque::new(),
                items_map: BTreeMap::new(),
                in_progress: BTreeSet::new(),
                max_concurrency,
                timer_id: None,
            })),
            phantom: PhantomData::default(),
        }
    }

    pub fn set_max_concurrency(&self, value: usize) {
        self.within_lock(|i| i.max_concurrency = value)
    }

    pub fn clear(&self) {
        self.within_lock(|i| i.queue.clear())
    }

    pub fn len(&self) -> usize {
        self.within_lock(|i| i.queue.len())
    }

    pub fn is_empty(&self) -> bool {
        self.within_lock(|i| i.queue.is_empty())
    }

    pub fn in_progress(&self) -> usize {
        self.within_lock(|i| i.in_progress.len())
    }

    fn within_lock<F: FnOnce(&mut GroupedTimerJobQueueInner<T::Key, T::Item>) -> R, R>(&self, f: F) -> R {
        let mut inner = self.inner.try_lock().unwrap();
        f(inner.deref_mut())
    }
}

#[derive(Serialize, Deserialize)]
struct GroupedTimerJobQueueInner<K: Clone + Ord, I> {
    queue: VecDeque<K>,
    items_map: BTreeMap<K, VecDeque<I>>,
    in_progress: BTreeSet<K>,
    max_concurrency: usize,
    #[serde(skip)]
    timer_id: Option<TimerId>,
}

impl<T: TimerJobItemGroup + 'static> GroupedTimerJobQueue<T>
where
    <T as TimerJobItemGroup>::Key: Clone + Ord,
{
    pub fn start_job_if_required(&self) -> bool {
        let should_start_job = self.within_lock(|i| i.timer_id.is_none() && !i.queue.is_empty());
        if should_start_job {
            let clone = self.clone();
            let timer_id = ic_cdk_timers::set_timer_interval(Duration::ZERO, move || clone.run());
            self.within_lock(|i| i.timer_id = Some(timer_id));
            true
        } else {
            false
        }
    }

    pub fn enqueue(&self, grouping_key: T::Key, item: T::Item) {
        self.enqueue_many(grouping_key, vec![item])
    }

    pub fn enqueue_many(&self, grouping_key: T::Key, items: Vec<T::Item>) {
        self.within_lock(|i| match i.items_map.entry(grouping_key.clone()) {
            Vacant(e) => {
                e.insert(VecDeque::from(items));
                i.queue.push_back(grouping_key);
            }
            Occupied(mut e) => {
                e.get_mut().extend(items);
            }
        });
        self.start_job_if_required();
    }

    fn run(&self) {
        let mut batches = Vec::new();

        self.within_lock(|i| {
            if i.queue.is_empty() {
                if let Some(timer_id) = i.timer_id.take() {
                    ic_cdk_timers::clear_timer(timer_id);
                }
            }

            let max_to_start = i.max_concurrency.saturating_sub(i.in_progress.len());
            while batches.len() < max_to_start {
                if let Some(grouping_key) = i.queue.pop_front() {
                    if let Occupied(mut e) = i.items_map.entry(grouping_key.clone()) {
                        // If this key is already being processed, skip it
                        if !i.in_progress.insert(grouping_key.clone()) {
                            continue;
                        }

                        let mut batch = T::new(grouping_key);
                        let queue = e.get_mut();
                        while !batch.is_full() {
                            if let Some(next) = queue.pop_front() {
                                batch.add(next);
                            } else {
                                break;
                            }
                        }
                        if queue.is_empty() {
                            e.remove();
                        }
                        batches.push(batch);
                    }
                } else {
                    break;
                }
            }
        });

        if !batches.is_empty() {
            let clone = self.clone();
            ic_cdk::spawn(clone.process_all_batches(batches));
        }
    }

    async fn process_all_batches(self, batches: Vec<T>) {
        futures::future::join_all(batches.into_iter().map(|b| self.process_batch(b))).await;
    }

    async fn process_batch(&self, batch: T) {
        let result = batch.process().await;
        let retry = matches!(result, Err(true));
        let key = batch.key();

        self.within_lock(|i| {
            i.in_progress.remove(&key);
            if retry {
                let queue = i.items_map.entry(key.clone()).or_default();
                for item in batch.into_items() {
                    queue.push_front(item);
                }
            }
            // If there are still any items in the map for this key, re-add it to the queue
            if i.items_map.contains_key(&key) {
                i.queue.push_back(key);
            }
        });
        self.start_job_if_required();
    }
}

impl<T: TimerJobItemGroup> Clone for GroupedTimerJobQueue<T> {
    fn clone(&self) -> Self {
        Self {
            inner: self.inner.clone(),
            phantom: PhantomData::default(),
        }
    }
}

impl<T: TimerJobItemGroup> Serialize for GroupedTimerJobQueue<T>
where
    <T as TimerJobItemGroup>::Key: Serialize,
    <T as TimerJobItemGroup>::Item: Serialize,
{
    fn serialize<S: Serializer>(&self, serializer: S) -> Result<S::Ok, S::Error> {
        self.within_lock(|i| i.serialize(serializer))
    }
}

impl<'de, T: TimerJobItemGroup + 'static> Deserialize<'de> for GroupedTimerJobQueue<T>
where
    <T as TimerJobItemGroup>::Key: Deserialize<'de>,
    <T as TimerJobItemGroup>::Item: Deserialize<'de>,
{
    fn deserialize<D: Deserializer<'de>>(deserializer: D) -> Result<Self, D::Error> {
        let inner = GroupedTimerJobQueueInner::deserialize(deserializer)?;
        let value = GroupedTimerJobQueue::<T> {
            inner: Rc::new(Mutex::new(inner)),
            phantom: PhantomData::default(),
        };
        value.start_job_if_required();
        Ok(value)
    }
}
