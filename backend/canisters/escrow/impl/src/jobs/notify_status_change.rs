use crate::{mutate_state, RuntimeState};
use canister_client::make_c2c_call;
use escrow_canister::SwapStatusChange;
use ic_cdk_timers::TimerId;
use std::cell::Cell;
use std::time::Duration;
use tracing::trace;
use types::CanisterId;

thread_local! {
    static TIMER_ID: Cell<Option<TimerId>> = Cell::default();
}

pub(crate) fn start_job_if_required(state: &RuntimeState) -> bool {
    if TIMER_ID.get().is_none() && !state.data.notify_status_change_queue.is_empty() {
        let timer_id = ic_cdk_timers::set_timer_interval(Duration::ZERO, run);
        TIMER_ID.set(Some(timer_id));
        trace!("'notify_status_change' job started");
        true
    } else {
        false
    }
}

pub fn run() {
    if let Some((canister_id, notification)) = mutate_state(get_next) {
        ic_cdk::spawn(notify_swap_status(canister_id, notification));
    } else if let Some(timer_id) = TIMER_ID.take() {
        ic_cdk_timers::clear_timer(timer_id);
        trace!("'notify_status_change' job stopped");
    }
}

fn get_next(state: &mut RuntimeState) -> Option<(CanisterId, SwapStatusChange)> {
    while let Some(id) = state.data.notify_status_change_queue.pop() {
        if let Some(notification) = state.data.swaps.get(id).and_then(|swap| {
            swap.canister_to_notify.map(|canister_id| {
                (
                    canister_id,
                    SwapStatusChange {
                        swap_id: swap.id,
                        location: swap.location.clone(),
                        status: swap.status(state.env.now()),
                    },
                )
            })
        }) {
            return Some(notification);
        }
    }
    None
}

async fn notify_swap_status(canister_id: CanisterId, notification: SwapStatusChange) {
    let swap_id = notification.swap_id;

    if make_c2c_call(
        canister_id,
        "c2c_notify_p2p_swap_status_change_msgpack",
        notification,
        msgpack::serialize,
        |r| msgpack::deserialize::<()>(r),
    )
    .await
    .is_err()
    {
        mutate_state(|state| {
            state.data.notify_status_change_queue.push(swap_id);
            start_job_if_required(state);
        });
    }
}