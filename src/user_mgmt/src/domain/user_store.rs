use ic_cdk::export::candid::CandidType;
use ic_types::Principal;
use multi_map::MultiMap;
use serde::Deserialize;
use shared::upgrade::StableState;
use shared::timestamp::Timestamp;

#[derive(Default)]
pub struct UserStore {
    data: MultiMap<Principal, String, User>
}

impl UserStore {
    pub fn register_user(&mut self, principal: Principal, username: String, now: Timestamp) -> RegisterUserResult {
        if self.data.contains_key(&principal) { return RegisterUserResult::UserExists; }
        if self.data.contains_key_alt(&username) { return RegisterUserResult::UsernameExists; }

        let user = User {
            principal: principal.clone(),
            username: username.clone(),
            joined: now,
            last_updated: now,
            version: 1
        };

        self.data.insert(principal, username, user);

        RegisterUserResult::Success
    }

    pub fn update_username(&mut self, principal: Principal, username: String, now: Timestamp) -> UpdateUsernameResult {
        if let Some(match_by_username) = self.data.get_alt(&username) {
            return if match_by_username.principal == principal {
                UpdateUsernameResult::SuccessNoChange
            } else {
                UpdateUsernameResult::UsernameTaken
            };
        }

        if let Some(mut user) = self.data.remove(&principal) {
            user.username = username.clone();
            user.last_updated = now;
            user.version += 1;

            self.data.insert(principal, username, user);

            UpdateUsernameResult::Success
        } else {
            UpdateUsernameResult::UserNotFound
        }
    }

    pub fn get_username(&self, principal: &Principal) -> Option<String> {
        self.data.get(principal).map(|u| u.username.clone())
    }

    pub fn get_principal(&self, username: &String) -> Option<Principal> {
        self.data.get_alt(username).map(|u| u.principal.clone())
    }
}

impl StableState for UserStore {
    type State = Vec<User>;

    fn drain(self) -> Vec<User> {
        self.data
            .into_iter()
            .map(|(_, (_, u))| u)
            .collect()
    }
    
    fn fill(users: Vec<User>) -> UserStore {
        let mut data = MultiMap::with_capacity(users.len());

        for user in users {
            data.insert(user.principal.clone(), user.username.clone(), user);
        }

        UserStore {
            data
        }
    }
}

#[derive(CandidType, Deserialize, Debug)]
pub struct User {
    principal: Principal,
    username: String,
    joined: Timestamp,
    last_updated: Timestamp,
    version: u32
}

#[derive(CandidType)]
pub enum RegisterUserResult {
    Success,
    UserExists,
    UsernameExists
}

#[derive(CandidType)]
pub enum UpdateUsernameResult {
    Success,
    SuccessNoChange,
    UsernameTaken,
    UserNotFound
}