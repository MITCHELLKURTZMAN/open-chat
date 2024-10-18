export type ProposalsBotCanisterInstallMode = "Install" | "Reinstall" | "Upgrade";
export type ProposalsBotTreasury = "ICP" | "SNS";
export type ReferralStatus = "Registered" | "Diamond" | "UniquePerson" | "LifetimeDiamond";
export type OnlineUsersMarkAsOnlineResponse = "Success" | "UserNotFound" | { "InternalError": string };
export type GroupSummaryUpdatesArgs = { updates_since: bigint, };
export type GroupToggleMuteNotificationsArgs = { mute: boolean, };
export type GroupToggleMuteNotificationsResponse = "Success" | "CallerNotInGroup";
export type GroupCancelInvitesResponse = "Success" | "NotAuthorized" | "UserSuspended" | "UserLapsed";
export type GroupSetVideoCallPresenceResponse = "Success" | "MessageNotFound" | "AlreadyEnded" | "GroupFrozen" | "UserNotInGroup" | "UserSuspended" | "UserLapsed";
export type GroupChangeRoleResponse = "Success" | "CallerNotInGroup" | "NotAuthorized" | "UserNotInGroup" | "UserSuspended" | "UserLapsed" | "Invalid" | "ChatFrozen" | { "InternalError": string };
export type GroupInviteCodeSuccessResult = { code?: bigint | undefined, };
export type GroupInviteCodeResponse = { "Success": GroupInviteCodeSuccessResult } | "NotAuthorized";
export type GroupUnblockUserResponse = "Success" | "CallerNotInGroup" | "CannotUnblockSelf" | "GroupNotPublic" | "NotAuthorized" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupUnfollowThreadResponse = "Success" | "NotFollowing" | "ThreadNotFound" | "UserNotInGroup" | "UserSuspended" | "UserLapsed" | "GroupFrozen";
export type GroupDeleteMessagesResponse = "Success" | "CallerNotInGroup" | "MessageNotFound" | "UserSuspended" | "UserLapsed" | "ChatFrozen" | "NotPlatformModerator" | { "InternalError": string };
export type GroupEnableInviteCodeArgs = { correlation_id: bigint, };
export type GroupEnableInviteCodeSuccessResult = { code: bigint, };
export type GroupRegisterProposalVoteResponse = "Success" | { "AlreadyVoted": boolean } | "CallerNotInGroup" | "NoEligibleNeurons" | "ProposalMessageNotFound" | "ProposalNotFound" | "ProposalNotAcceptingVotes" | "UserSuspended" | "UserLapsed" | "ChatFrozen" | { "InternalError": string };
export type GroupDisableInviteCodeResponse = "Success" | "NotAuthorized" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupDisableInviteCodeArgs = { correlation_id: bigint, };
export type GroupRegisterProposalVoteV2Response = "Success" | "CallerNotInGroup" | "ProposalMessageNotFound" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupPublicSummaryArgs = { invite_code?: bigint | undefined, };
export type GroupRemoveReactionResponse = "Success" | "NoChange" | "MessageNotFound" | "CallerNotInGroup" | "NotAuthorized" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupAddReactionResponse = "Success" | "NoChange" | "InvalidReaction" | "MessageNotFound" | "CallerNotInGroup" | "NotAuthorized" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupRulesArgs = { invite_code?: bigint | undefined, };
export type GroupRulesSuccessResult = { rules?: string | undefined, };
export type GroupBlockUserResponse = "Success" | "CallerNotInGroup" | "CannotBlockSelf" | "CannotBlockUser" | "GroupNotPublic" | { "InternalError": string } | "NotAuthorized" | "UserNotInGroup" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupRemoveParticipantResponse = "Success" | "CallerNotInGroup" | "CannotRemoveSelf" | "CannotRemoveUser" | { "InternalError": string } | "NotAuthorized" | "UserNotInGroup" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupDeclineInvitiationResponse = "Success" | "NotInvited";
export type GroupSelectedUpdatesArgs = { updates_since: bigint, };
export type GroupReportMessageResponse = "Success" | "UserSuspended" | "UserLapsed" | "ChatFrozen" | "CallerNotInGroup" | "NotAuthorized" | "MessageNotFound" | "AlreadyReported" | { "InternalError": string };
export type GroupEditMessageResponse = "Success" | "MessageNotFound" | "CallerNotInGroup" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupFollowThreadResponse = "Success" | "AlreadyFollowing" | "ThreadNotFound" | "UserNotInGroup" | "UserSuspended" | "UserLapsed" | "GroupFrozen";
export type UserManageFavouriteChatsResponse = "Success" | "UserSuspended";
export type UserMessageActivitySummary = { read_up_to: bigint, latest_event_timestamp: bigint, unread_count: number, };
export type UserMarkAchievementsSeenArgs = { last_seen: bigint, };
export type UserMarkAchievementsSeenResponse = "Success";
export type UserBioResponse = { "Success": string };
export type UserJoinVideoCallResponse = "Success" | "MessageNotFound" | "AlreadyEnded" | "UserSuspended" | "UserBlocked" | "ChatNotFound";
export type UserTokenSwapStatusArgs = { swap_id: bigint, };
export type UserTokenSwapStatusTokenSwapStatus = { started: bigint, icrc2: boolean, auto_withdrawals: boolean, deposit_account: { Ok : null } | { Err : string } | null, transfer: { Ok : bigint } | { Err : string } | null, transfer_or_approval: { Ok : bigint } | { Err : string } | null, notify_dex: { Ok : null } | { Err : string } | null, amount_swapped: { Ok : { Ok : bigint } | { Err : string } } | { Err : string } | null, withdraw_from_dex: { Ok : bigint } | { Err : string } | null, success?: boolean | undefined, };
export type UserSwapTokensSuccessResult = { amount_out: bigint, };
export type UserTipMessageResponse = "Success" | "ChatNotFound" | "MessageNotFound" | "CannotTipSelf" | "NotAuthorized" | "TransferCannotBeZero" | "TransferNotToMessageSender" | { "TransferFailed": string } | "ChatFrozen" | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | "UserSuspended" | "UserLapsed" | { "Retrying": string } | { "InternalError": string };
export type UserUnblockUserResponse = "Success" | "UserSuspended";
export type UserAddHotGroupExclusionsResponse = "Success";
export type UserPinChatResponse = "Success" | "ChatNotFound";
export type UserCachedBtcAddressResponse = { "Success": string } | "NotFound";
export type UserDeleteDirectChatResponse = "Success" | "ChatNotFound";
export type UserDeleteMessagesResponse = "Success" | "ChatNotFound" | "UserSuspended";
export type UserSaveCryptoAccountResponse = "Success" | "Invalid" | "NameTaken" | "UserSuspended";
export type UserUpdatesArgs = { updates_since: bigint, };
export type UserSubmitProposalResponse = "Success" | "GovernanceCanisterNotSupported" | { "InsufficientPayment": bigint } | "UserSuspended" | { "TransferFailed": string } | { "Retrying": string } | { "InternalError": string };
export type UserLeaveGroupResponse = "Success" | "GroupNotFound" | "GroupNotPublic" | "CallerNotInGroup" | "OwnerCannotLeave" | "UserSuspended" | "ChatFrozen" | { "InternalError": string };
export type UserMuteNotificationsResponse = "Success" | "ChatNotFound" | { "InternalError": string };
export type UserBtcAddressResponse = { "Success": string } | { "InternalError": string };
export type UserSetBioArgs = { text: string, };
export type UserClaimDailyChitSuccessResult = { chit_earned: number, chit_balance: number, streak: number, next_claim: bigint, };
export type UserClaimDailyChitResponse = { "Success": UserClaimDailyChitSuccessResult } | { "AlreadyClaimed": bigint };
export type UserDeleteGroupResponse = "Success" | "NotAuthorized" | "UserSuspended" | "ChatFrozen" | { "InternalError": string };
export type UserEndVideoCallResponse = "Success" | "MessageNotFound" | "AlreadyEnded";
export type UserTokenSwapsArgs = { start: number, max_results: number, };
export type UserBlockUserResponse = "Success" | "UserSuspended";
export type UserSetCommunityIndexesResponse = "Success";
export type UserStartVideoCallResponse = "Success" | "NotAuthorized";
export type UserReclaimSwapTokensResponse = "Success" | { "Failed": string };
export type UserPublicProfilePublicProfile = { username: string, display_name?: string | undefined, avatar_id?: bigint | undefined, bio: string, is_premium: boolean, phone_is_verified: boolean, created: bigint, };
export type UserRetrieveBtcResponse = { "Success": bigint } | { "ApproveError": string } | { "RetrieveBtcError": string } | { "InternalError": string };
export type UserRetrieveBtcArgs = { amount: bigint, address: string, };
export type UserMarkReadResponse = "Success";
export type UserLeaveCommunityResponse = "Success" | "CommunityNotFound" | "CommunityNotPublic" | "UserNotInCommunity" | "LastOwnerCannotLeave" | "UserSuspended" | "CommunityFrozen" | { "InternalError": string };
export type UserCancelMessageReminderResponse = "Success";
export type UserCancelMessageReminderArgs = { reminder_id: bigint, };
export type UserDeleteCommunityResponse = "Success" | "NotAuthorized" | "UserSuspended" | "UserLapsed" | "CommunityFrozen" | { "InternalError": string };
export type UserChitEventsArgs = { from?: bigint | undefined, to?: bigint | undefined, skip?: number | undefined, max: number, ascending: boolean, };
export type UserNamedAccount = { name: string, account: string, };
export type UserReportMessageResponse = "Success" | "UserSuspended" | "ChatNotFound" | "MessageNotFound" | "AlreadyReported" | { "InternalError": string };
export type UserAutoWallet = { min_cents_visible: number, };
export type UserEditMessageResponse = "Success" | "MessageNotFound" | "ChatNotFound" | "UserBlocked" | "UserSuspended";
export type UserUnpinChatResponse = "Success" | "ChatNotFound";
export type UserConfigureWalletResponse = "Success";
export type MessageReminderContent = { reminder_id: bigint, notes?: string | undefined, };
export type Reaction = string;
export type FieldTooShortResult = { length_provided: number, min_length: number, };
export type MessageIndex = number;
export type DiamondMembershipPlanDuration = "OneMonth" | "ThreeMonths" | "OneYear" | "Lifetime";
export type EventIndex = number;
export type VoteOperation = "RegisterVote" | "DeleteVote";
export type SuspensionAction = { "Unsuspend": bigint } | { "Delete": bigint };
export type SwapStatusErrorCancelled = { token0_txn_out?: bigint | undefined, };
export type SubscriptionKeys = { p256dh: string, auth: string, };
export type CommunityRole = "Owner" | "Admin" | "Member";
export type ExchangeId = "ICPSwap" | "Sonic" | "KongSwap";
export type ProposalDecisionStatus = "Unspecified" | "Open" | "Rejected" | "Adopted" | "Executed" | "Failed";
export type CanisterUpgradeStatus = "InProgress" | "NotRequired";
/**
 * @default 0
 */
export type TSNumberWithDefault = number;
/**
 * @default NoChange
 */
export type OptionUpdateU128 = "NoChange" | "SetToNone" | { "SetToSome": bigint };
export type SwapStatusErrorExpired = { token0_txn_out?: bigint | undefined, };
export type PinNumberSettings = { length: number, attempts_blocked_until?: bigint | undefined, };
export type ApproveError = { "BadFee": { expected_fee: bigint, } } | { "InsufficientFunds": { balance: bigint, } } | { "AllowanceChanged": { current_allowance: bigint, } } | { "Expired": { ledger_time: bigint, } } | "TooOld" | { "CreatedInFuture": { ledger_time: bigint, } } | { "Duplicate": { duplicate_of: bigint, } } | "TemporarilyUnavailable" | { "GenericError": { error_code: bigint, message: string, } };
export type VideoCallPresence = "Default" | "Owner" | "Hidden";
export type ChatMetrics = { text_messages: bigint, image_messages: bigint, video_messages: bigint, audio_messages: bigint, file_messages: bigint, polls: bigint, poll_votes: bigint, icp_messages: bigint, sns1_messages: bigint, ckbtc_messages: bigint, chat_messages: bigint, kinic_messages: bigint, deleted_messages: bigint, giphy_messages: bigint, prize_messages: bigint, prize_winner_messages: bigint, replies: bigint, edits: bigint, reactions: bigint, proposals: bigint, reported_messages: bigint, message_reminders: bigint, custom_type_messages: bigint, last_active: bigint, };
export type VideoCallType = "Broadcast" | "Default";
export type VideoCall = { message_index: MessageIndex, call_type: VideoCallType, };
export type GroupRole = "Owner" | "Admin" | "Moderator" | "Participant";
export type GroupPermissionRole = "None" | "Owner" | "Admins" | "Moderators" | "Members";
export type AcceptSwapSuccess = { token1_txn_in: bigint, };
/**
 * @default NoChange
 */
export type OptionUpdateU64 = "NoChange" | "SetToNone" | { "SetToSome": bigint };
export type GroupCanisterThreadDetails = { root_message_index: MessageIndex, latest_event: EventIndex, latest_message: MessageIndex, last_updated: bigint, };
export type Tokens = { e8s: bigint, };
export type Rules = { text: string, enabled: boolean, };
export type SubscriptionInfo = { endpoint: string, keys: SubscriptionKeys, };
/**
 * @default NoChange
 */
export type OptionUpdateVideoCall = "NoChange" | "SetToNone" | { "SetToSome": VideoCall };
export type UserSummaryVolatile = { total_chit_earned: number, chit_balance: number, streak: number, };
export type CommunityPermissionRole = "Owners" | "Admins" | "Members";
export type ProposalRewardStatus = "Unspecified" | "AcceptVotes" | "ReadyToSettle" | "Settled";
/**
 * @default NoChange
 */
export type OptionUpdatePinNumberSettings = "NoChange" | "SetToNone" | { "SetToSome": PinNumberSettings };
export type CommunityPermissions = { change_roles: CommunityPermissionRole, update_details: CommunityPermissionRole, invite_users: CommunityPermissionRole, remove_members: CommunityPermissionRole, create_public_channel: CommunityPermissionRole, create_private_channel: CommunityPermissionRole, manage_user_groups: CommunityPermissionRole, };
export type FieldTooLongResult = { length_provided: number, max_length: number, };
export type Chit = { balance: number, streak: number, };
export type GiphyImageVariant = { width: number, height: number, url: string, mime_type: string, };
export type Achievement = "JoinedGroup" | "JoinedCommunity" | "SentDirectMessage" | "ReceivedDirectMessage" | "SetAvatar" | "SetBio" | "SetDisplayName" | "UpgradedToDiamond" | "UpgradedToGoldDiamond" | "Streak3" | "Streak7" | "Streak14" | "Streak30" | "Streak100" | "Streak365" | "SentPoll" | "SentText" | "SentImage" | "SentVideo" | "SentAudio" | "SentFile" | "SentGiphy" | "SentPrize" | "SentMeme" | "SentCrypto" | "SentP2PSwapOffer" | "StartedCall" | "ReactedToMessage" | "EditedMessage" | "RepliedInThread" | "QuoteReplied" | "TippedMessage" | "DeletedMessage" | "ForwardedMessage" | "ProvedUniquePersonhood" | "ReceivedCrypto" | "HadMessageReactedTo" | "HadMessageTipped" | "VotedOnPoll" | "SentReminder" | "JoinedCall" | "AcceptedP2PSwapOffer" | "SetCommunityDisplayName" | "Referred1stUser" | "Referred3rdUser" | "Referred10thUser" | "Referred20thUser" | "Referred50thUser" | "PinnedMessage" | "SwappedFromWallet" | "FavouritedChat" | "FollowedThread" | "SuggestedTranslation" | "TranslationAccepted" | "AppointedGroupModerator" | "AppointedGroupAdmin" | "AppointedGroupOwner" | "ChosenAsGroupModerator" | "ChosenAsGroupAdmin" | "ChosenAsGroupOwner" | "SetGroupAccessGate" | "SetCommunityAccessGate" | "JoinedGatedGroupOrCommunity" | "ChangedTheme" | "EnabledDisappearingMessages" | "OwnGroupWithOneDiamondMember" | "OwnGroupWithTenDiamondMembers" | "OwnGroupWithOneHundredDiamondMembers" | "OwnGroupWithOneThousandDiamondMembers" | "DirectChats5" | "DirectChats10" | "DirectChats20";
export type Empty = Record<string, never>;
export type ThumbnailData = string;
export type GroupReplyContext = { event_index: EventIndex, };
export type PushEventResult = { index: EventIndex, timestamp: bigint, expires_at?: bigint | undefined, };
export type BuildVersion = { major: number, minor: number, patch: number, };
/**
 * @default NoChange
 */
export type OptionUpdateGroupPermissionRole = "NoChange" | "SetToNone" | { "SetToSome": GroupPermissionRole };
export type Cryptocurrency = "InternetComputer" | "SNS1" | "CKBTC" | "CHAT" | "KINIC" | { "Other": string };
export type ChitEarnedReason = "DailyClaim" | { "Achievement": Achievement } | { "ExternalAchievement": string } | { "Referral": ReferralStatus } | "MemeContestWinner";
export type InvalidPollReason = { "TooFewOptions": number } | { "TooManyOptions": number } | { "OptionTooLong": number } | "DuplicateOptions" | "EndDateInThePast" | "PollsNotValidForDirectChats";
export type MembersAddedToDefaultChannel = { count: number, };
export type CryptoAccountNNS = "Mint" | { "Account": [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] };
export type MessageReminderCreatedContent = { reminder_id: bigint, remind_at: bigint, notes?: string | undefined, hidden: boolean, };
export type TransferFromError = { "BadFee": { expected_fee: bigint, } } | { "BadBurn": { min_burn_amount: bigint, } } | { "InsufficientFunds": { balance: bigint, } } | { "InsufficientAllowance": { allowance: bigint, } } | "TooOld" | { "CreatedInFuture": { ledger_time: bigint, } } | { "Duplicate": { duplicate_of: bigint, } } | "TemporarilyUnavailable" | { "GenericError": { error_code: bigint, message: string, } };
export type DirectChatCreated = Record<string, never>;
export type GroupInviteCodeChange = "Enabled" | "Disabled" | "Reset";
export type BotConfig = { is_oc_controlled: boolean, supports_direct_messages: boolean, can_be_added_to_groups: boolean, };
export type Version = number;
export type OptionalCommunityPermissions = { change_roles?: CommunityPermissionRole | undefined, update_details?: CommunityPermissionRole | undefined, invite_users?: CommunityPermissionRole | undefined, remove_members?: CommunityPermissionRole | undefined, create_public_channel?: CommunityPermissionRole | undefined, create_private_channel?: CommunityPermissionRole | undefined, manage_user_groups?: CommunityPermissionRole | undefined, };
export type CommunityMembership = { joined: bigint, role: CommunityRole, rules_accepted: boolean, display_name?: string | undefined, lapsed: boolean, };
export type VerifiedCredentialArgumentValue = { "String": string } | { "Int": number };
export type VideoCallAccessTokenArgs = { call_type: VideoCallType, };
export type P2PSwapCancelled = { token0_txn_out?: bigint | undefined, };
export type TextContent = { text: string, };
export type MessageId = bigint;
export type CustomPermission = { subtype: string, role: GroupPermissionRole, };
export type TSBytes = Uint8Array;
export type UpdatedRules = { text: string, enabled: boolean, new_version: boolean, };
/**
 * @default NoChange
 */
export type OptionUpdateString = "NoChange" | "SetToNone" | { "SetToSome": string };
/**
 * @default false
 */
export type TSBoolWithDefault = boolean;
export type DiamondMembershipStatus = "Inactive" | "Active" | "Lifetime";
export type PollConfig = { text?: string | undefined, options: Array<string>, end_date?: bigint | undefined, anonymous: boolean, show_votes_before_end_date: boolean, allow_multiple_votes_per_user: boolean, allow_user_to_change_vote: boolean, };
export type Tally = { yes: bigint, no: bigint, total: bigint, timestamp: bigint, };
export type DiamondMembershipFeesByDuration = { one_month: bigint, three_months: bigint, one_year: bigint, lifetime: bigint, };
export type UserGroupSummary = { user_group_id: number, name: string, members: number, };
export type DiamondMembershipSubscription = "Disabled" | "OneMonth" | "ThreeMonths" | "OneYear";
export type GroupIndexFreezeGroupSuspensionDetails = { duration?: bigint | undefined, reason: string, };
export type GroupIndexAddHotGroupExclusionResponse = "Success" | "ChatAlreadyExcluded" | "ChatNotFound" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexMarkLocalGroupIndexFullArgs = { canister_id: TSBytes, full: boolean, };
export type GroupIndexMarkLocalGroupIndexFullResponse = "Success" | "LocalGroupIndexNotFound" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexExploreCommunitiesArgs = { search_term?: string | undefined, languages: Array<string>, page_index: number, page_size: number, include_moderation_flags: number, };
export type GroupIndexFreezeCommunitySuspensionDetails = { duration?: bigint | undefined, reason: string, };
export type GroupIndexSetGroupUpgradeConcurrencyResponse = "Success" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexSetGroupUpgradeConcurrencyArgs = { value: number, };
export type GroupIndexDeleteFrozenGroupResponse = "Success" | "ChatNotFrozen" | "ChatNotFound" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexSetCommunityModerationFlagsResponse = "Success" | "Unchanged" | "CommunityNotFound" | "NotAuthorized" | "InvalidFlags" | { "InternalError": string };
export type GroupIndexRemoveHotGroupExclusionResponse = "Success" | "ChatNotExcluded" | "ChatNotFound" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexExploreGroupsArgs = { search_term?: string | undefined, page_index: number, page_size: number, };
export type GroupIndexSetCommunityUpgradeConcurrencyResponse = "Success" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexSetCommunityUpgradeConcurrencyArgs = { value: number, };
export type StorageIndexCanForwardArgs = { file_hash: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], file_size: bigint, };
export type StorageIndexUserUserRecord = { byte_limit: bigint, bytes_used: bigint, };
export type StorageIndexUserResponse = { "Success": StorageIndexUserUserRecord } | "UserNotFound";
export type StorageIndexProjectedAllowance = { byte_limit: bigint, bytes_used: bigint, bytes_used_after_upload: bigint, bytes_used_after_operation: bigint, };
export type StorageIndexAllocationBucketSuccessResult = { canister_id: TSBytes, file_id: bigint, chunk_size: number, byte_limit: bigint, bytes_used: bigint, bytes_used_after_upload: bigint, projected_allowance: StorageIndexProjectedAllowance, };
export type StorageIndexAllocationBucketResponse = { "Success": StorageIndexAllocationBucketSuccessResult } | { "AllowanceExceeded": StorageIndexProjectedAllowance } | "UserNotFound" | "BucketUnavailable";
export type StorageIndexAllocationBucketArgs = { file_hash: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], file_size: bigint, file_id_seed?: bigint | undefined, };
export type RegistryAddMessageFilterArgs = { regex: string, };
export type RegistryAddMessageFilterResponse = { "Success": bigint } | "NotAuthorized" | "AlreadyAdded" | { "InvalidRequest": string } | { "InternalError": string };
export type RegistryMessageFilterSummary = { id: bigint, regex: string, };
export type RegistryRemoveMessageFilterResponse = "Success" | "NotAuthorized" | "NotFound" | { "InternalError": string };
export type RegistryRemoveMessageFilterArgs = { id: bigint, };
export type RegistryNervousSystemSummary = { root_canister_id: TSBytes, governance_canister_id: TSBytes, ledger_canister_id: TSBytes, index_canister_id: TSBytes, is_nns: boolean, proposal_rejection_fee: bigint, submitting_proposals_enabled: boolean, };
export type RegistryAddRemoveSwapProviderResponse = "Success" | "NotAuthorized" | { "InternalError": string };
export type RegistryAddRemoveSwapProviderArgs = { swap_provider: ExchangeId, add: boolean, };
export type RegistryUpdatesArgs = { since?: bigint | undefined, };
export type RegistrySetTokenEnabledResponse = "Success" | "NotAuthorized" | { "InternalError": string };
export type RegistrySetTokenEnabledArgs = { ledger_canister_id: TSBytes, enabled: boolean, };
export type RegistryTokenDetails = { ledger_canister_id: TSBytes, name: string, symbol: string, decimals: number, fee: bigint, logo: string, logo_id?: bigint | undefined, info_url: string, how_to_buy_url: string, transaction_url_format: string, supported_standards: Array<string>, added: bigint, enabled: boolean, last_updated: bigint, };
export type UserIndexDiamondMembershipFeesDiamondMembershipFees = { token: Cryptocurrency, one_month: bigint, three_months: bigint, one_year: bigint, lifetime: bigint, };
export type UserIndexUsersChitSuccessResult = { chit: Array<Chit>, };
export type UserIndexPublicKeyResponse = { "Success": string } | "NotInitialised";
export type UserIndexUpdateDiamondMembershipSubscriptionArgs = { pay_in_chat?: boolean | undefined, subscription?: DiamondMembershipSubscription | undefined, };
export type UserIndexUpdateDiamondMembershipSubscriptionResponse = "Success" | "NotDiamondMember" | "AlreadyLifetimeDiamondMember";
export type UserIndexSuspendUserResponse = "Success" | "UserAlreadySuspended" | "UserNotFound" | { "InternalError": string };
export type UserIndexCheckUsernameResponse = "Success" | "UsernameTaken" | "UsernameInvalid" | { "UsernameTooShort": number } | { "UsernameTooLong": number };
export type UserIndexCheckUsernameArgs = { username: string, };
export type UserIndexSetModerationFlagsArgs = { moderation_flags_enabled: number, };
export type UserIndexSetModerationFlagsResponse = "Success";
export type UserIndexSetUserUpgradeConcurrencyArgs = { value: number, };
export type UserIndexSetUserUpgradeConcurrencyResponse = "Success";
export type UserIndexExternalAchievementsExternalAchievement = { id: number, name: string, url: string, chit_reward: number, expires: bigint, budget_exhausted: boolean, };
export type UserIndexExternalAchievementsArgs = { updates_since: bigint, };
export type UserIndexReferralMetricsReferralMetrics = { users_who_referred: number, users_who_referred_paid_diamond: number, users_who_referred_unpaid_diamond: number, users_who_referred_90_percent_unpaid_diamond: number, referrals_of_paid_diamond: number, referrals_of_unpaid_diamond: number, referrals_other: number, icp_raised_by_referrals_to_paid_diamond: number, };
export type UserIndexPayForDiamondMembershipSuccessResult = { expires_at: bigint, pay_in_chat: boolean, subscription: DiamondMembershipSubscription, proof_jwt: string, };
export type UserIndexPayForDiamondMembershipResponse = { "Success": UserIndexPayForDiamondMembershipSuccessResult } | "AlreadyLifetimeDiamondMember" | "CurrencyNotSupported" | "PriceMismatch" | "PaymentAlreadyInProgress" | "UserNotFound" | { "InsufficientFunds": bigint } | { "TransferFailed": string } | { "InternalError": string };
export type UserIndexPayForDiamondMembershipArgs = { duration: DiamondMembershipPlanDuration, token: Cryptocurrency, expected_price_e8s: bigint, recurring: boolean, };
export type UserIndexSearchArgs = { search_term: string, max_results: number, };
export type UserIndexUnsuspendUserResponse = "Success" | "UserNotSuspended" | "UserNotFound" | { "InternalError": string };
export type UserIndexSubmitProofOfUniquePersonhoodResponse = "Success" | { "Invalid": string } | "UserNotFound";
export type UserIndexSubmitProofOfUniquePersonhoodArgs = { user_ii_principal: TSBytes, credential_jwt: string, };
export type UserIndexSetUsernameResponse = "Success" | "UsernameTaken" | "UserNotFound" | "UsernameInvalid" | { "UsernameTooShort": number } | { "UsernameTooLong": number };
export type UserIndexSetUsernameArgs = { username: string, };
export type UserIndexSetDisplayNameResponse = "Success" | "Unauthorized" | "UserNotFound" | "DisplayNameInvalid" | { "DisplayNameTooShort": number } | { "DisplayNameTooLong": number };
export type UserIndexSetDisplayNameArgs = { display_name?: string | undefined, };
export type UserIndexSetDiamondMembershipFeesResponse = "Success" | "Invalid";
export type UserIndexReportedMessagesSuccessResult = { json: string, };
export type UserIndexReportedMessagesResponse = { "Success": UserIndexReportedMessagesSuccessResult };
export type UserIndexUserRegistrationCanisterResponse = { "Success": TSBytes } | "NewRegistrationsClosed";
export type LocalUserIndexInviteUsersToCommunityResponse = "Success" | "UserNotInCommunity" | "NotAuthorized" | "CommunityFrozen" | { "TooManyInvites": number } | "UserSuspended" | { "InternalError": string };
export type LocalUserIndexInviteUsersToGroupResponse = "Success" | "GroupNotFound" | "CallerNotInGroup" | "NotAuthorized" | "ChatFrozen" | { "TooManyInvites": number } | { "InternalError": string };
export type LocalUserIndexAccessTokenResponse = { "Success": string } | "NotAuthorized" | { "InternalError": string };
export type LocalUserIndexRegisterUserArgs = { username: string, referral_code?: string | undefined, public_key: TSBytes, };
export type LocalUserIndexChatEventsEventsByIndexArgs = { events: Array<EventIndex>, };
export type LocalUserIndexChatEventsEventsWindowArgs = { mid_point: MessageIndex, max_messages: number, max_events: number, };
export type LocalUserIndexChatEventsEventsPageArgs = { start_index: EventIndex, ascending: boolean, max_messages: number, max_events: number, };
export type LocalUserIndexChatEventsEventsArgsInner = { "Page": LocalUserIndexChatEventsEventsPageArgs } | { "ByIndex": LocalUserIndexChatEventsEventsByIndexArgs } | { "Window": LocalUserIndexChatEventsEventsWindowArgs };
export type LocalUserIndexReportMessageResponse = "Success" | { "InternalError": string };
export type LocalUserIndexGroupAndCommunitySummaryUpdatesSummaryUpdatesArgs = { canister_id: TSBytes, is_community: boolean, invite_code?: bigint | undefined, updates_since?: bigint | undefined, };
export type CommunitySummaryUpdatesArgs = { invite_code?: bigint | undefined, updates_since: bigint, };
export type CommunitySelectedChannelUpdatesArgs = { channel_id: bigint, updates_since: bigint, };
export type CommunityLeaveChannelResponse = "Success" | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "LastOwnerCannotLeave";
export type CommunityLeaveChannelArgs = { channel_id: bigint, };
export type CommunityRemoveMemberResponse = "Success" | "UserNotInCommunity" | "CannotRemoveSelf" | "CannotRemoveUser" | "NotAuthorized" | "TargetUserNotInCommunity" | "UserSuspended" | "CommunityFrozen" | { "InternalError": string } | "UserLapsed";
export type CommunityToggleMuteNotificationsResponse = "Success" | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "UserLapsed";
export type CommunityToggleMuteNotificationsArgs = { channel_id?: bigint | undefined, mute: boolean, };
export type CommunityClaimPrizeArgs = { channel_id: bigint, message_id: MessageId, };
export type CommunityCancelInvitesResponse = "Success" | "NotAuthorized" | "ChannelNotFound" | "UserSuspended" | "UserLapsed";
export type CommunityCreateUserGroupSuccessResult = { user_group_id: number, };
export type CommunityCreateUserGroupResponse = { "Success": CommunityCreateUserGroupSuccessResult } | { "NameTooShort": FieldTooShortResult } | { "NameTooLong": FieldTooLongResult } | "NameInvalid" | "NameTaken" | "NotAuthorized" | "CommunityFrozen" | "UserSuspended" | "UserLapsed";
export type CommunityJoinVideoCallArgs = { channel_id: bigint, message_id: MessageId, new_achievement: boolean, };
export type CommunitySetVideoCallPresenceArgs = { channel_id: bigint, message_id: MessageId, presence: VideoCallPresence, new_achievement: boolean, };
export type CommunitySetVideoCallPresenceResponse = "Success" | "MessageNotFound" | "AlreadyEnded" | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "UserLapsed";
export type CommunityDeletedMessageArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, };
export type CommunityRegisterPollVoteArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_index: MessageIndex, poll_option: number, operation: VoteOperation, new_achievement: boolean, };
export type CommunityCancelP2pSwapArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, };
export type CommunityUndeleteMessagesArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_ids: Array<MessageId>, };
export type CommunityChangeRoleResponse = "Success" | "UserNotInCommunity" | "NotAuthorized" | "TargetUserNotInCommunity" | "UserSuspended" | "Invalid" | "CommunityFrozen" | { "InternalError": string } | "UserLapsed";
export type CommunitySelectedChannelInitialArgs = { channel_id: bigint, };
export type CommunityInviteCodeSuccessResult = { code?: bigint | undefined, };
export type CommunityInviteCodeResponse = { "Success": CommunityInviteCodeSuccessResult } | "UserNotInCommunity" | "NotAuthorized";
export type CommunityUnblockUserResponse = "Success" | "UserNotInCommunity" | "CannotUnblockSelf" | "CommunityNotPublic" | "NotAuthorized" | "UserSuspended" | "CommunityFrozen" | "UserLapsed";
export type CommunityExploreChannelsArgs = { invite_code?: bigint | undefined, search_term?: string | undefined, page_index: number, page_size: number, };
export type CommunityChannelSummaryUpdatesArgs = { channel_id: bigint, invite_code?: bigint | undefined, updates_since: bigint, };
export type CommunityUpdateUserGroupResponse = "Success" | "UserGroupNotFound" | { "NameTooShort": FieldTooShortResult } | { "NameTooLong": FieldTooLongResult } | "NameInvalid" | "NameTaken" | "NotAuthorized" | "CommunityFrozen" | "UserSuspended" | "UserLapsed";
export type CommunityEventsWindowArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, mid_point: MessageIndex, max_messages: number, max_events: number, latest_known_update?: bigint | undefined, };
export type CommunityUnfollowThreadArgs = { channel_id: bigint, thread_root_message_index: MessageIndex, };
export type CommunityUnfollowThreadResponse = "Success" | "NotFollowing" | "ThreadNotFound" | "ChannelNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "UserSuspended" | "CommunityFrozen" | "UserLapsed";
export type CommunityDeleteMessagesResponse = "Success" | "MessageNotFound" | "ChannelNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "UserSuspended" | "CommunityFrozen" | "NotPlatformModerator" | { "InternalError": string } | "UserLapsed";
export type CommunityDeleteMessagesArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_ids: Array<MessageId>, as_platform_moderator?: boolean | undefined, new_achievement: boolean, };
export type CommunityRemoveMemberFromChannelResponse = "Success" | "CommunityFrozen" | "UserNotInCommunity" | "TargetUserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "TargetUserNotInChannel" | "CannotRemoveSelf" | "NotAuthorized" | "UserLapsed";
export type CommunityEnableInviteCodeSuccessResult = { code: bigint, };
export type CommunityEnableInviteCodeResponse = { "Success": CommunityEnableInviteCodeSuccessResult } | "NotAuthorized" | "UserSuspended" | "CommunityFrozen" | "UserLapsed";
export type CommunityRegisterProposalVoteArgs = { channel_id: bigint, message_index: MessageIndex, adopt: boolean, };
export type CommunityRegisterProposalVoteResponse = "Success" | { "AlreadyVoted": boolean } | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "NoEligibleNeurons" | "ProposalMessageNotFound" | "ProposalNotFound" | "ProposalNotAcceptingVotes" | { "InternalError": string } | "UserLapsed";
export type CommunityDisableInviteCodeResponse = "Success" | "NotAuthorized" | "UserSuspended" | "CommunityFrozen" | "UserLapsed";
export type CommunityChannelSummaryArgs = { channel_id: bigint, invite_code?: bigint | undefined, };
export type CommunityChangeChannelRoleResponse = "Success" | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "TargetUserNotInChannel" | "NotAuthorized" | "Invalid" | "UserLapsed";
export type CommunityDeclineInvitationArgs = { channel_id?: bigint | undefined, };
export type CommunityDeclineInvitationResponse = "Success" | "NotInvited" | "ChannelNotFound" | "UserNotInCommunity";
export type CommunityMessagesByMessageIndexArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, messages: Array<MessageIndex>, latest_known_update?: bigint | undefined, };
export type CommunityRegisterProposalVoteV2Args = { channel_id: bigint, message_index: MessageIndex, adopt: boolean, };
export type CommunityRegisterProposalVoteV2Response = "Success" | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "ProposalMessageNotFound" | "UserLapsed";
export type CommunityDeleteUserGroupsResponse = "Success" | "NotAuthorized" | "CommunityFrozen" | "UserSuspended" | "UserLapsed";
export type CommunityDeleteUserGroupsArgs = { user_group_ids: Array<number>, };
export type CommunityUpdateCommunitySuccessResult = { rules_version?: Version | undefined, };
export type CommunityUpdateCommunityResponse = { "SuccessV2": CommunityUpdateCommunitySuccessResult } | "NotAuthorized" | "UserNotInCommunity" | { "NameTooShort": FieldTooShortResult } | { "NameTooLong": FieldTooLongResult } | "NameReserved" | { "DescriptionTooLong": FieldTooLongResult } | { "AvatarTooBig": FieldTooLongResult } | { "BannerTooBig": FieldTooLongResult } | "AccessGateInvalid" | "NameTaken" | "InternalError" | { "RulesTooLong": FieldTooLongResult } | { "RulesTooShort": FieldTooShortResult } | "UserSuspended" | "CommunityFrozen" | "InvalidLanguage" | "UserLapsed";
export type CommunityRemoveReactionArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, reaction: Reaction, };
export type CommunityRemoveReactionResponse = "Success" | "NoChange" | "MessageNotFound" | "ChannelNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "NotAuthorized" | "UserSuspended" | "CommunityFrozen" | "UserLapsed";
export type CommunitySelectedInitialArgs = { invite_code?: bigint | undefined, };
export type CommunityAddReactionArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, reaction: Reaction, username: string, display_name?: string | undefined, new_achievement: boolean, };
export type CommunityAddReactionResponse = "Success" | "NoChange" | "InvalidReaction" | "MessageNotFound" | "ChannelNotFound" | "NotAuthorized" | "UserNotInCommunity" | "UserNotInChannel" | "UserSuspended" | "CommunityFrozen" | "UserLapsed";
export type CommunityThreadPreviewsArgs = { channel_id: bigint, threads: Array<MessageIndex>, latest_client_thread_update?: bigint | undefined, };
export type CommunityBlockUserResponse = "Success" | "UserNotInCommunity" | "CannotBlockSelf" | "CannotBlockUser" | "CommunityNotPublic" | "NotAuthorized" | "TargetUserNotInCommunity" | "UserSuspended" | "CommunityFrozen" | { "InternalError": string } | "UserLapsed";
export type CommunityPinMessageArgs = { channel_id: bigint, message_index: MessageIndex, };
export type CommunityPinMessageResponse = { "Success": PushEventResult } | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "MessageNotFound" | "NotAuthorized" | "NoChange" | "UserLapsed";
export type CommunityVideoCallParticipantsArgs = { channel_id: bigint, message_id: MessageId, updated_since?: bigint | undefined, };
export type CommunitySendMessageSuccessResult = { event_index: EventIndex, message_index: MessageIndex, timestamp: bigint, expires_at?: bigint | undefined, };
export type CommunitySendMessageResponse = { "Success": CommunitySendMessageSuccessResult } | "ChannelNotFound" | "ThreadMessageNotFound" | "MessageEmpty" | { "TextTooLong": number } | { "InvalidPoll": InvalidPollReason } | "NotAuthorized" | "UserNotInCommunity" | "UserNotInChannel" | "UserSuspended" | { "InvalidRequest": string } | "CommunityFrozen" | "RulesNotAccepted" | "CommunityRulesNotAccepted" | "UserLapsed";
export type CommunityEventsByIndexArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, events: Array<EventIndex>, latest_known_update?: bigint | undefined, };
export type CommunityLocalUserIndexResponse = { "Success": TSBytes };
export type CommunityEventsArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, start_index: EventIndex, ascending: boolean, max_messages: number, max_events: number, latest_known_update?: bigint | undefined, };
export type CommunityAcceptP2pSwapArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, pin?: string | undefined, new_achievement: boolean, };
export type CommunityCreateChannelSuccessResult = { channel_id: bigint, };
export type CommunitySelectedUpdatesArgs = { invite_code?: bigint | undefined, updates_since: bigint, };
export type CommunityImportGroupSuccessResult = { channel_id: bigint, total_bytes: bigint, };
export type CommunityImportGroupResponse = { "Success": CommunityImportGroupSuccessResult } | "UserNotInCommunity" | "UserNotCommunityOwner" | "UserNotInGroup" | "UserNotGroupOwner" | "UserSuspended" | "GroupNotFound" | "GroupAlreadyBeingImported" | "GroupImportingToAnotherCommunity" | "GroupFrozen" | { "InternalError": string } | "UserLapsed";
export type CommunityReportMessageArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, delete: boolean, };
export type CommunityReportMessageResponse = "Success" | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "NotAuthorized" | "UserNotInChannel" | "MessageNotFound" | "AlreadyReported" | { "InternalError": string } | "UserLapsed";
export type CommunityEditMessageResponse = "Success" | "MessageNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "UserSuspended" | "CommunityFrozen" | "ChannelNotFound" | "UserLapsed";
export type CommunityUpdateChannelSuccessResult = { rules_version?: Version | undefined, };
export type CommunitySetMemberDisplayNameArgs = { display_name?: string | undefined, new_achievement: boolean, };
export type CommunitySetMemberDisplayNameResponse = "Success" | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "DisplayNameInvalid" | { "DisplayNameTooShort": number } | { "DisplayNameTooLong": number } | "UserLapsed";
export type CommunitySummaryArgs = { invite_code?: bigint | undefined, };
export type CommunityFollowThreadResponse = "Success" | "AlreadyFollowing" | "ThreadNotFound" | "ChannelNotFound" | "UserNotInChannel" | "UserNotInCommunity" | "UserSuspended" | "CommunityFrozen" | "UserLapsed";
export type CommunityFollowThreadArgs = { channel_id: bigint, thread_root_message_index: MessageIndex, };
export type CommunityDeleteChannelResponse = "Success" | "CommunityFrozen" | "UserSuspended" | "UserNotInCommunity" | "ChannelNotFound" | "UserNotInChannel" | "NotAuthorized" | "UserLapsed";
export type CommunityDeleteChannelArgs = { channel_id: bigint, };
export type NotificationsIndexPushSubscriptionResponse = "Success" | { "InternalError": string };
export type NotificationsIndexPushSubscriptionArgs = { subscription: SubscriptionInfo, };
export type NotificationsIndexRemoveSubscriptionsForUserResponse = "Success";
export type NotificationsIndexSubscriptionExistsArgs = { p256dh_key: string, };
export type NotificationsIndexSubscriptionExistsResponse = "Yes" | "No";
export type NotificationsIndexRemoveSubscriptionArgs = { p256dh_key: string, };
export type NotificationsIndexRemoveSubscriptionResponse = "Success";
export type StorageBucketDeleteFilesDeleteFileFailureReason = "NotFound" | "NotAuthorized";
export type StorageBucketDeleteFilesArgs = { file_ids: Array<bigint>, };
export type StorageBucketDeleteFilesDeleteFileFailure = { file_id: bigint, reason: StorageBucketDeleteFilesDeleteFileFailureReason, };
export type StorageBucketFileInfoArgs = { file_id: bigint, };
export type StorageBucketFileInfoSuccessResult = { is_owner: boolean, file_size: bigint, file_hash: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], };
export type StorageBucketFileInfoResponse = { "Success": StorageBucketFileInfoSuccessResult } | "NotFound";
export type StorageBucketUploadChunkResponse = "Success" | "AllowanceExceeded" | "FileAlreadyExists" | "FileTooBig" | "FileExpired" | "ChunkAlreadyExists" | "ChunkIndexTooHigh" | "ChunkSizeMismatch" | "Full" | "HashMismatch" | "InvalidFileId" | "UserNotFound";
export type StorageBucketUploadChunkArgs = { file_id: bigint, hash: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], mime_type: string, accessors: Array<TSBytes>, chunk_index: number, chunk_size: number, total_size: bigint, bytes: TSBytes, expiry?: bigint | undefined, };
export type StorageBucketDeleteFileResponse = "Success" | "NotAuthorized" | "NotFound";
export type StorageBucketDeleteFileArgs = { file_id: bigint, };
export type StorageBucketForwardFileResponse = { "Success": bigint } | "NotAuthorized" | "NotFound";
export type StorageBucketForwardFileArgs = { file_id: bigint, accessors: Array<TSBytes>, };
export type ProposalsBotExecuteGenericNervousSystemFunction = { function_id: bigint, payload: TSBytes, };
export type ProposalsBotUpgradeSnsControlledCanister = { canister_id: TSBytes, new_canister_wasm: TSBytes, mode: ProposalsBotCanisterInstallMode, };
export type GroupConvertIntoCommunityArgs = { rules: Rules, permissions?: CommunityPermissions | undefined, primary_language?: string | undefined, history_visible_to_new_joiners: boolean, };
export type GroupClaimPrizeArgs = { message_id: MessageId, correlation_id: bigint, };
export type GroupJoinVideoCallArgs = { message_id: MessageId, new_achievement: boolean, };
export type GroupSetVideoCallPresenceArgs = { message_id: MessageId, presence: VideoCallPresence, new_achievement: boolean, };
export type GroupDeletedMessageArgs = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, };
export type GroupRegisterPollVoteArgs = { thread_root_message_index?: MessageIndex | undefined, message_index: MessageIndex, poll_option: number, operation: VoteOperation, new_achievement: boolean, correlation_id: bigint, };
export type GroupCancelP2pSwapArgs = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, };
export type GroupUndeleteMessagesArgs = { thread_root_message_index?: MessageIndex | undefined, message_ids: Array<MessageId>, correlation_id: bigint, };
export type GroupEventsWindowArgs = { thread_root_message_index?: MessageIndex | undefined, mid_point: MessageIndex, max_messages: number, max_events: number, latest_known_update?: bigint | undefined, };
export type GroupUnfollowThreadArgs = { thread_root_message_index: MessageIndex, };
export type GroupDeleteMessagesArgs = { thread_root_message_index?: MessageIndex | undefined, message_ids: Array<MessageId>, as_platform_moderator?: boolean | undefined, new_achievement: boolean, correlation_id: bigint, };
export type GroupEnableInviteCodeResponse = { "Success": GroupEnableInviteCodeSuccessResult } | "NotAuthorized" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupUpdateGroupSuccessResult = { rules_version?: Version | undefined, };
export type GroupRegisterProposalVoteArgs = { message_index: MessageIndex, adopt: boolean, };
export type GroupMessagesByMessageIndexArgs = { thread_root_message_index?: MessageIndex | undefined, messages: Array<MessageIndex>, latest_known_update?: bigint | undefined, };
export type GroupRegisterProposalVoteV2Args = { message_index: MessageIndex, adopt: boolean, };
export type GroupRemoveReactionArgs = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, reaction: Reaction, correlation_id: bigint, };
export type GroupAddReactionArgs = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, reaction: Reaction, username: string, display_name?: string | undefined, new_achievement: boolean, correlation_id: bigint, };
export type GroupThreadPreviewsArgs = { threads: Array<MessageIndex>, latest_client_thread_update?: bigint | undefined, };
export type GroupRulesResponse = { "Success": GroupRulesSuccessResult } | "NotAuthorized";
export type GroupPinMessageResponse = { "Success": PushEventResult } | "NoChange" | "MessageIndexOutOfRange" | "NotAuthorized" | "CallerNotInGroup" | "MessageNotFound" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupPinMessageArgs = { message_index: MessageIndex, correlation_id: bigint, };
export type GroupVideoCallParticipantsArgs = { message_id: MessageId, updated_since?: bigint | undefined, };
export type GroupSendMessageSuccessResult = { event_index: EventIndex, message_index: MessageIndex, timestamp: bigint, expires_at?: bigint | undefined, };
export type GroupSendMessageResponse = { "Success": GroupSendMessageSuccessResult } | "ThreadMessageNotFound" | "MessageEmpty" | { "TextTooLong": number } | { "InvalidPoll": InvalidPollReason } | "NotAuthorized" | "CallerNotInGroup" | "UserSuspended" | "UserLapsed" | { "InvalidRequest": string } | "ChatFrozen" | "RulesNotAccepted";
export type GroupEventsByIndexArgs = { thread_root_message_index?: MessageIndex | undefined, events: Array<EventIndex>, latest_known_update?: bigint | undefined, };
export type GroupUnpinMessageArgs = { message_index: MessageIndex, correlation_id: bigint, };
export type GroupUnpinMessageResponse = { "SuccessV2": PushEventResult } | "NoChange" | "NotAuthorized" | "CallerNotInGroup" | "MessageNotFound" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupLocalUserIndexResponse = { "Success": TSBytes };
export type GroupEventsArgs = { thread_root_message_index?: MessageIndex | undefined, start_index: EventIndex, ascending: boolean, max_messages: number, max_events: number, latest_known_update?: bigint | undefined, };
export type GroupAcceptP2pSwapArgs = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, pin?: string | undefined, new_achievement: boolean, };
export type GroupReportMessageArgs = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, delete: boolean, };
export type GroupFollowThreadArgs = { thread_root_message_index: MessageIndex, };
export type UserSavedCryptoAccountsResponse = { "Success": Array<UserNamedAccount> };
export type UserTokenSwapStatusResponse = { "Success": UserTokenSwapStatusTokenSwapStatus } | "NotFound";
export type UserSetPinNumberResponse = "Success" | { "TooShort": FieldTooShortResult } | { "TooLong": FieldTooLongResult } | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "MalformedSignature": string } | "DelegationTooOld";
export type UserSwapTokensICPSwapArgs = { swap_canister_id: TSBytes, zero_for_one: boolean, };
export type UserSwapTokensResponse = { "Success": UserSwapTokensSuccessResult } | "SwapFailed" | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string };
export type UserSetAvatarResponse = "Success" | { "AvatarTooBig": FieldTooLongResult } | "UserSuspended";
export type UserManualWallet = { tokens: Array<TSBytes>, };
export type UserChannelSummaryUpdates = { channel_id: bigint, read_by_me_up_to?: MessageIndex | undefined, threads_read: Record<MessageIndex, MessageIndex>, archived?: boolean | undefined, date_read_pinned?: bigint | undefined, };
export type UserWalletConfig = { "Auto": UserAutoWallet } | { "Manual": UserManualWallet };
export type UserSetBioResponse = "Success" | { "TooLong": FieldTooLongResult } | "UserSuspended";
export type UserChannelSummary = { channel_id: bigint, read_by_me_up_to?: MessageIndex | undefined, threads_read: Record<MessageIndex, MessageIndex>, archived: boolean, date_read_pinned?: bigint | undefined, };
export type UserApproveTransferResponse = "Success" | { "ApproveError": ApproveError } | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string };
export type UserSetMessageReminderResponse = { "Success": bigint } | "ReminderDateInThePast" | { "NotesTooLong": FieldTooLongResult } | "UserSuspended";
export type UserRemoveReactionResponse = "Success" | { "SuccessV2": PushEventResult } | "NoChange" | "MessageNotFound" | "ChatNotFound" | "UserSuspended";
export type UserSetContactResponse = "Success" | "NoChange" | { "NicknameTooShort": FieldTooShortResult } | { "NicknameTooLong": FieldTooLongResult } | "UserSuspended";
export type UserAddReactionResponse = "Success" | { "SuccessV2": PushEventResult } | "NoChange" | "InvalidReaction" | "MessageNotFound" | "ChatNotFound" | "UserSuspended";
export type UserReclaimSwapTokensArgs = { exchange_id: ExchangeId, swap_canister_id: TSBytes, ledger_canister_id: TSBytes, amount: bigint, fee: bigint, };
export type UserPublicProfileResponse = { "Success": UserPublicProfilePublicProfile };
export type UserMarkReadThreadRead = { root_message_index: MessageIndex, read_up_to: MessageIndex, };
export type UserMarkReadChannelMessagesRead = { channel_id: bigint, read_up_to?: MessageIndex | undefined, threads: Array<UserMarkReadThreadRead>, date_read_pinned?: bigint | undefined, };
export type UserLocalUserIndexResponse = { "Success": TSBytes };
export type UserConfigureWalletArgs = { config: UserWalletConfig, };
export type PaymentGate = { ledger_canister_id: TSBytes, amount: bigint, fee: bigint, };
export type VersionedRules = { text: string, version: Version, enabled: boolean, };
export type AccountICRC1 = { owner: TSBytes, subaccount?: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | undefined, };
export type CommunityMembershipUpdates = { role?: CommunityRole | undefined, rules_accepted?: boolean | undefined, display_name: OptionUpdateString, lapsed?: boolean | undefined, };
export type GiphyContent = { caption?: string | undefined, title: string, desktop: GiphyImageVariant, mobile: GiphyImageVariant, };
export type SnsNeuronGate = { governance_canister_id: TSBytes, min_stake_e8s?: bigint | undefined, min_dissolve_delay?: bigint | undefined, };
export type OptionalMessagePermissions = { default?: GroupPermissionRole | undefined, text: OptionUpdateGroupPermissionRole, image: OptionUpdateGroupPermissionRole, video: OptionUpdateGroupPermissionRole, audio: OptionUpdateGroupPermissionRole, file: OptionUpdateGroupPermissionRole, poll: OptionUpdateGroupPermissionRole, crypto: OptionUpdateGroupPermissionRole, giphy: OptionUpdateGroupPermissionRole, prize: OptionUpdateGroupPermissionRole, p2p_swap: OptionUpdateGroupPermissionRole, video_call: OptionUpdateGroupPermissionRole, custom_updated: Array<CustomPermission>, custom_deleted: Array<string>, };
export type Delegation = { pubkey: TSBytes, expiration: bigint, };
export type MessagePermissions = { default: GroupPermissionRole, text?: GroupPermissionRole | undefined, image?: GroupPermissionRole | undefined, video?: GroupPermissionRole | undefined, audio?: GroupPermissionRole | undefined, file?: GroupPermissionRole | undefined, poll?: GroupPermissionRole | undefined, crypto?: GroupPermissionRole | undefined, giphy?: GroupPermissionRole | undefined, prize?: GroupPermissionRole | undefined, p2p_swap?: GroupPermissionRole | undefined, video_call?: GroupPermissionRole | undefined, custom: Array<CustomPermission>, };
export type ChatId = TSBytes;
export type CryptoAccountICRC1 = "Mint" | { "Account": AccountICRC1 };
export type VerifiedCredentialGate = { issuer_canister_id: TSBytes, issuer_origin: string, credential_type: string, credential_name: string, credential_arguments: Record<string, VerifiedCredentialArgumentValue>, };
export type NnsProposal = { id: bigint, topic: number, proposer: bigint, created: bigint, title: string, summary: string, url: string, status: ProposalDecisionStatus, reward_status: ProposalRewardStatus, tally: Tally, deadline: bigint, payload_text_rendering?: string | undefined, last_updated: bigint, };
export type BlobReference = { canister_id: TSBytes, blob_id: bigint, };
export type PendingCryptoTransactionICRC1 = { ledger: TSBytes, token: Cryptocurrency, amount: bigint, to: AccountICRC1, fee: bigint, memo?: TSBytes | undefined, created: bigint, };
export type DiamondMembershipFees = { chat_fees: DiamondMembershipFeesByDuration, icp_fees: DiamondMembershipFeesByDuration, };
export type Document = { id: bigint, mime_type: string, data: TSBytes, };
export type FileContent = { name: string, caption?: string | undefined, mime_type: string, file_size: number, blob_reference?: BlobReference | undefined, };
export type UserSummaryStable = { username: string, display_name?: string | undefined, avatar_id?: bigint | undefined, is_bot: boolean, suspended: boolean, diamond_membership_status: DiamondMembershipStatus, is_unique_person: boolean, bot_config?: BotConfig | undefined, };
export type ChitEarned = { amount: number, timestamp: bigint, reason: ChitEarnedReason, };
export type CustomContent = { kind: string, data: TSBytes, };
export type FailedCryptoTransactionICRC1 = { ledger: TSBytes, token: Cryptocurrency, amount: bigint, fee: bigint, from: CryptoAccountICRC1, to: CryptoAccountICRC1, memo?: TSBytes | undefined, created: bigint, error_message: string, };
export type TokenBalanceGate = { ledger_canister_id: TSBytes, min_balance: bigint, };
export type GateCheckFailedReason = "NotDiamondMember" | "NotLifetimeDiamondMember" | "NoUniquePersonProof" | "NoSnsNeuronsFound" | "NoSnsNeuronsWithRequiredStakeFound" | "NoSnsNeuronsWithRequiredDissolveDelayFound" | { "PaymentFailed": TransferFromError } | { "InsufficientBalance": bigint } | { "FailedVerifiedCredentialCheck": string } | "Locked" | "NotReferredByMember";
export type TokenInfo = { token: Cryptocurrency, ledger: TSBytes, decimals: number, fee: bigint, };
export type CompletedCryptoTransactionNNS = { ledger: TSBytes, token: Cryptocurrency, amount: Tokens, fee: Tokens, from: CryptoAccountNNS, to: CryptoAccountNNS, memo: bigint, created: bigint, transaction_hash: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], block_index: bigint, };
/**
 * @default NoChange
 */
export type OptionUpdateOptionalMessagePermissions = "NoChange" | "SetToNone" | { "SetToSome": OptionalMessagePermissions };
export type AccessTokenType = { "StartVideoCallV2": VideoCallAccessTokenArgs } | "JoinVideoCall" | "MarkVideoCallAsEnded";
export type PendingCryptoTransactionICRC2 = { ledger: TSBytes, token: Cryptocurrency, amount: bigint, from: AccountICRC1, to: AccountICRC1, fee: bigint, memo?: TSBytes | undefined, created: bigint, };
export type AudioContent = { caption?: string | undefined, mime_type: string, blob_reference?: BlobReference | undefined, };
export type ImageContent = { width: number, height: number, thumbnail_data: ThumbnailData, caption?: string | undefined, mime_type: string, blob_reference?: BlobReference | undefined, };
export type UserId = TSBytes;
export type CommunityId = TSBytes;
export type CompletedCryptoTransactionICRC1 = { ledger: TSBytes, token: Cryptocurrency, amount: bigint, from: CryptoAccountICRC1, to: CryptoAccountICRC1, fee: bigint, memo?: TSBytes | undefined, created: bigint, block_index: bigint, };
export type UserOrAccount = { "User": UserId } | { "Account": [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] };
export type VerifiedCredentialGateArgs = { user_ii_principal: TSBytes, credential_jwt: string, credential_jwts: Array<string>, ii_origin: string, };
export type OptionalGroupPermissions = { change_roles?: GroupPermissionRole | undefined, update_group?: GroupPermissionRole | undefined, invite_users?: GroupPermissionRole | undefined, add_members?: GroupPermissionRole | undefined, remove_members?: GroupPermissionRole | undefined, delete_messages?: GroupPermissionRole | undefined, pin_messages?: GroupPermissionRole | undefined, react_to_messages?: GroupPermissionRole | undefined, mention_all_members?: GroupPermissionRole | undefined, start_video_call?: GroupPermissionRole | undefined, message_permissions?: OptionalMessagePermissions | undefined, thread_permissions: OptionUpdateOptionalMessagePermissions, };
export type GovernanceProposalsSubtype = { is_nns: boolean, governance_canister_id: TSBytes, };
export type FailedCryptoTransactionNNS = { ledger: TSBytes, token: Cryptocurrency, amount: Tokens, fee: Tokens, from: CryptoAccountNNS, to: CryptoAccountNNS, memo: bigint, created: bigint, transaction_hash: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], error_message: string, };
export type SnsProposal = { id: bigint, action: bigint, proposer: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], created: bigint, title: string, summary: string, url: string, status: ProposalDecisionStatus, reward_status: ProposalRewardStatus, tally: Tally, deadline: bigint, payload_text_rendering?: string | undefined, minimum_yes_proportion_of_total: number, minimum_yes_proportion_of_exercised: number, last_updated: bigint, };
export type UsersBlocked = { user_ids: Array<UserId>, blocked_by: UserId, };
export type CommunityMember = { user_id: UserId, date_added: bigint, role: CommunityRole, display_name?: string | undefined, referred_by?: UserId | undefined, lapsed: TSBoolWithDefault, };
export type User = { user_id: UserId, username: string, };
export type MessageReport = { reported_by: UserId, timestamp: bigint, reason_code: number, notes?: string | undefined, };
export type ThreadSummary = { participant_ids: Array<UserId>, followed_by_me: boolean, reply_count: number, latest_event_index: EventIndex, latest_event_timestamp: bigint, };
/**
 * @default NoChange
 */
export type OptionUpdateDocument = "NoChange" | "SetToNone" | { "SetToSome": Document };
export type SuspensionDetails = { reason: string, action: SuspensionAction, suspended_by: UserId, };
export type DiamondMembershipDetails = { expires_at: bigint, pay_in_chat: boolean, subscription: DiamondMembershipSubscription, };
export type MemberLeft = { user_id: UserId, };
export type UserGroupDetails = { user_group_id: number, name: string, members: Array<UserId>, };
export type GroupIndexRecommendedGroupsArgs = { count: number, exclusions: Array<ChatId>, };
export type GroupIndexFreezeGroupArgs = { chat_id: ChatId, reason?: string | undefined, suspend_members?: GroupIndexFreezeGroupSuspensionDetails | undefined, };
export type GroupIndexAddHotGroupExclusionArgs = { chat_id: ChatId, };
export type GroupIndexLookupChannelByGroupIdSuccessResult = { community_id: CommunityId, channel_id: bigint, };
export type GroupIndexLookupChannelByGroupIdResponse = { "Success": GroupIndexLookupChannelByGroupIdSuccessResult } | "NotFound";
export type GroupIndexLookupChannelByGroupIdArgs = { group_id: ChatId, };
export type GroupIndexUnfreezeCommunityArgs = { community_id: CommunityId, };
export type GroupIndexFreezeCommunityArgs = { community_id: CommunityId, reason?: string | undefined, suspend_members?: GroupIndexFreezeCommunitySuspensionDetails | undefined, };
export type GroupIndexDeleteFrozenGroupArgs = { chat_id: ChatId, };
export type GroupIndexSetCommunityModerationFlagsArgs = { community_id: CommunityId, flags: number, };
export type GroupIndexRemoveHotGroupExclusionArgs = { chat_id: ChatId, };
export type GroupIndexActiveGroupsArgs = { group_ids: Array<ChatId>, community_ids: Array<CommunityId>, active_since?: bigint | undefined, };
export type GroupIndexUnfreezeGroupArgs = { chat_id: ChatId, };
export type StorageIndexCanForwardResponse = { "Success": StorageIndexProjectedAllowance } | { "AllowanceExceeded": StorageIndexProjectedAllowance } | "UserNotFound";
export type RegistryUpdatesSuccessResult = { last_updated: bigint, token_details?: Array<RegistryTokenDetails> | undefined, nervous_system_details: Array<RegistryNervousSystemSummary>, message_filters_added: Array<RegistryMessageFilterSummary>, message_filters_removed: Array<bigint>, swap_providers?: Array<ExchangeId> | undefined, };
export type RegistryUpdatesResponse = { "Success": RegistryUpdatesSuccessResult } | "SuccessNoUpdates";
export type UserIndexDiamondMembershipFeesResponse = { "Success": Array<UserIndexDiamondMembershipFeesDiamondMembershipFees> };
export type UserIndexUsersChitResponse = { "Success": UserIndexUsersChitSuccessResult };
export type UserIndexUsersChitArgs = { users: Array<UserId>, year: number, month: number, };
export type UserIndexSuspendUserArgs = { user_id: UserId, duration?: bigint | undefined, reason: string, };
export type UserIndexPlatformOperatorsSuccessResult = { users: Array<UserId>, };
export type UserIndexPlatformOperatorsResponse = { "Success": UserIndexPlatformOperatorsSuccessResult };
export type UserIndexPlatformModeratorsSuccessResult = { users: Array<UserId>, };
export type UserIndexSuspectedBotsSuccessResult = { users: Array<UserId>, };
export type UserIndexSuspectedBotsArgs = { after?: UserId | undefined, count: number, };
export type UserIndexExternalAchievementsSuccessResult = { last_updated: bigint, added_or_updated: Array<UserIndexExternalAchievementsExternalAchievement>, achievements_added: Array<UserIndexExternalAchievementsExternalAchievement>, achievements_removed: Array<UserIndexExternalAchievementsExternalAchievement>, };
export type UserIndexExternalAchievementsResponse = { "Success": UserIndexExternalAchievementsSuccessResult } | "SuccessNoUpdates";
export type UserIndexUserArgs = { user_id?: UserId | undefined, username?: string | undefined, };
export type UserIndexReferralMetricsResponse = { "Success": UserIndexReferralMetricsReferralMetrics };
export type UserIndexUnsuspendUserArgs = { user_id: UserId, };
export type UserIndexUsersUserGroup = { users: Array<UserId>, updated_since: bigint, };
export type UserIndexUsersArgs = { user_groups: Array<UserIndexUsersUserGroup>, users_suspended_since?: bigint | undefined, };
export type UserIndexChitLeaderboardChitUserBalance = { user_id: UserId, username: string, balance: number, };
export type UserIndexSetDiamondMembershipFeesArgs = { fees: DiamondMembershipFees, };
export type UserIndexPlatformModeratorsGroupResponse = { "Success": ChatId };
export type UserIndexReportedMessagesArgs = { user_id?: UserId | undefined, };
export type LocalUserIndexInviteUsersToCommunityArgs = { community_id: CommunityId, user_ids: Array<UserId>, caller_username: string, };
export type LocalUserIndexInviteUsersToGroupArgs = { group_id: ChatId, user_ids: Array<UserId>, caller_username: string, correlation_id: bigint, };
export type LocalUserIndexJoinGroupArgs = { chat_id: ChatId, invite_code?: bigint | undefined, verified_credential_args?: VerifiedCredentialGateArgs | undefined, correlation_id: bigint, };
export type LocalUserIndexRegisterUserSuccessResult = { user_id: UserId, icp_account: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], };
export type LocalUserIndexChatEventsEventsContext = { "Direct": UserId } | { "Group": [ChatId, MessageIndex | null] } | { "Channel": [CommunityId, bigint, MessageIndex | null] };
export type LocalUserIndexJoinCommunityArgs = { community_id: CommunityId, invite_code?: bigint | undefined, referred_by?: UserId | undefined, verified_credential_args?: VerifiedCredentialGateArgs | undefined, };
export type LocalUserIndexJoinChannelArgs = { community_id: CommunityId, channel_id: bigint, invite_code?: bigint | undefined, referred_by?: UserId | undefined, verified_credential_args?: VerifiedCredentialGateArgs | undefined, };
export type LocalUserIndexInviteUsersToChannelFailedResult = { failed_users: Array<UserId>, };
export type LocalUserIndexInviteUsersToChannelPartialSuccessResult = { failed_users: Array<UserId>, };
export type LocalUserIndexInviteUsersToChannelArgs = { community_id: CommunityId, channel_id: bigint, user_ids: Array<UserId>, caller_username: string, };
export type LocalUserIndexGroupAndCommunitySummaryUpdatesArgs = { requests: Array<LocalUserIndexGroupAndCommunitySummaryUpdatesSummaryUpdatesArgs>, };
export type CommunityRemoveMemberArgs = { user_id: UserId, };
export type CommunityCancelInvitesArgs = { channel_id?: bigint | undefined, user_ids: Array<UserId>, };
export type CommunityCreateUserGroupArgs = { name: string, user_ids: Array<UserId>, };
export type CommunitySearchChannelArgs = { channel_id: bigint, search_term: string, max_results: number, users?: Array<UserId> | undefined, };
export type CommunityChangeRoleArgs = { user_id: UserId, new_role: CommunityRole, };
export type CommunityUnblockUserArgs = { user_id: UserId, };
export type CommunityUpdateUserGroupArgs = { user_group_id: number, name?: string | undefined, users_to_add: Array<UserId>, users_to_remove: Array<UserId>, };
export type CommunityRemoveMemberFromChannelArgs = { channel_id: bigint, user_id: UserId, };
export type CommunityCommunityMembersArgs = { user_ids: Array<UserId>, };
export type CommunityCommunityMembersSuccessResult = { members: Array<CommunityMember>, };
export type CommunityAddMembersToChannelUserFailedError = { user_id: UserId, error: string, };
export type CommunityAddMembersToChannelArgs = { channel_id: bigint, user_ids: Array<UserId>, added_by_name: string, added_by_display_name?: string | undefined, };
export type CommunityAddMembersToChannelPartialSuccessResult = { users_added: Array<UserId>, users_already_in_channel: Array<UserId>, users_limit_reached: Array<UserId>, users_failed_with_error: Array<CommunityAddMembersToChannelUserFailedError>, };
export type CommunityAddMembersToChannelFailedResult = { users_already_in_channel: Array<UserId>, users_limit_reached: Array<UserId>, users_failed_with_error: Array<CommunityAddMembersToChannelUserFailedError>, };
export type CommunityChangeChannelRoleArgs = { channel_id: bigint, user_id: UserId, new_role: GroupRole, };
export type CommunitySelectedInitialSuccessResult = { timestamp: bigint, last_updated: bigint, latest_event_index: EventIndex, members: Array<CommunityMember>, basic_members: Array<UserId>, 
/**
 * @default []
 */
blocked_users: Array<UserId>, 
/**
 * @default []
 */
invited_users: Array<UserId>, chat_rules: VersionedRules, 
/**
 * @default []
 */
user_groups: Array<UserGroupDetails>, 
/**
 * @default []
 */
referrals: Array<UserId>, };
export type CommunityBlockUserArgs = { user_id: UserId, };
export type CommunityCreateChannelResponse = { "Success": CommunityCreateChannelSuccessResult } | { "NameTooShort": FieldTooShortResult } | { "NameTooLong": FieldTooLongResult } | "NameReserved" | { "DescriptionTooLong": FieldTooLongResult } | { "RulesTooShort": FieldTooShortResult } | { "RulesTooLong": FieldTooLongResult } | { "AvatarTooBig": FieldTooLongResult } | "AccessGateInvalid" | { "MaxChannelsCreated": number } | "NameTaken" | "UserSuspended" | "NotAuthorized" | "CommunityFrozen" | "ExternalUrlInvalid" | { "InternalError": string } | "UserLapsed";
export type CommunitySelectedUpdatesSuccessResult = { timestamp: bigint, last_updated: bigint, 
/**
 * @default []
 */
members_added_or_updated: Array<CommunityMember>, 
/**
 * @default []
 */
members_removed: Array<UserId>, 
/**
 * @default []
 */
blocked_users_added: Array<UserId>, 
/**
 * @default []
 */
blocked_users_removed: Array<UserId>, invited_users?: Array<UserId> | undefined, chat_rules?: VersionedRules | undefined, 
/**
 * @default []
 */
user_groups: Array<UserGroupDetails>, 
/**
 * @default []
 */
user_groups_deleted: Array<number>, 
/**
 * @default []
 */
referrals_added: Array<UserId>, 
/**
 * @default []
 */
referrals_removed: Array<UserId>, };
export type CommunitySelectedUpdatesResponse = { "Success": CommunitySelectedUpdatesSuccessResult } | { "SuccessNoUpdates": bigint } | "PrivateCommunity";
export type CommunityImportGroupArgs = { group_id: ChatId, };
export type CommunityUpdateChannelResponse = { "SuccessV2": CommunityUpdateChannelSuccessResult } | "NotAuthorized" | "UserNotInCommunity" | "ChannelNotFound" | "UserNotInChannel" | { "NameTooShort": FieldTooShortResult } | { "NameTooLong": FieldTooLongResult } | "NameReserved" | { "DescriptionTooLong": FieldTooLongResult } | { "AvatarTooBig": FieldTooLongResult } | "AccessGateInvalid" | "NameTaken" | { "RulesTooLong": FieldTooLongResult } | { "RulesTooShort": FieldTooShortResult } | "UserSuspended" | "ExternalUrlInvalid" | "CommunityFrozen" | "UserLapsed";
export type StorageBucketDeleteFilesResponse = { success: Array<bigint>, failures: Array<StorageBucketDeleteFilesDeleteFileFailure>, };
export type ProposalsBotTransferSnsTreasuryFunds = { treasury: ProposalsBotTreasury, amount: bigint, to: AccountICRC1, memo?: bigint | undefined, };
export type OnlineUsersLastOnlineArgs = { user_ids: Array<UserId>, };
export type OnlineUsersLastOnlineUserLastOnline = { user_id: UserId, duration_since_last_online: bigint, };
export type GroupSearchMessagesArgs = { search_term: string, max_results: number, users?: Array<UserId> | undefined, };
export type GroupConvertIntoCommunitySuccessResult = { community_id: CommunityId, channel_id: bigint, };
export type GroupConvertIntoCommunityResponse = { "Success": GroupConvertIntoCommunitySuccessResult } | "CallerNotInGroup" | "AlreadyImportingToAnotherCommunity" | "NotAuthorized" | "UserSuspended" | "UserLapsed" | "ChatFrozen" | { "InternalError": string };
export type GroupCancelInvitesArgs = { user_ids: Array<UserId>, };
export type GroupChangeRoleArgs = { user_id: UserId, new_role: GroupRole, correlation_id: bigint, };
export type GroupUnblockUserArgs = { user_id: UserId, correlation_id: bigint, };
export type GroupUpdateGroupResponse = { "SuccessV2": GroupUpdateGroupSuccessResult } | "NotAuthorized" | "CallerNotInGroup" | { "NameTooShort": FieldTooShortResult } | { "NameTooLong": FieldTooLongResult } | "NameReserved" | { "DescriptionTooLong": FieldTooLongResult } | { "RulesTooShort": FieldTooShortResult } | { "RulesTooLong": FieldTooLongResult } | { "AvatarTooBig": FieldTooLongResult } | "AccessGateInvalid" | "NameTaken" | "UserSuspended" | "UserLapsed" | "ChatFrozen" | "InternalError";
export type GroupBlockUserArgs = { user_id: UserId, correlation_id: bigint, };
export type GroupRemoveParticipantArgs = { user_id: UserId, correlation_id: bigint, };
export type UserSearchMessagesArgs = { user_id: UserId, search_term: string, max_results: number, };
export type UserCommunitySummaryUpdates = { community_id: CommunityId, channels: Array<UserChannelSummaryUpdates>, index?: number | undefined, archived?: boolean | undefined, pinned?: Array<bigint> | undefined, };
export type UserGroupChatSummary = { chat_id: ChatId, local_user_index_canister_id: TSBytes, read_by_me_up_to?: MessageIndex | undefined, threads_read: Record<MessageIndex, MessageIndex>, archived: boolean, date_read_pinned?: bigint | undefined, };
export type UserJoinVideoCallArgs = { user_id: UserId, message_id: MessageId, };
export type UserCreateGroupSuccessResult = { chat_id: ChatId, };
export type UserDeletedMessageArgs = { user_id: UserId, message_id: MessageId, };
export type UserCancelP2pSwapArgs = { user_id: UserId, message_id: MessageId, };
export type UserCommunitySummary = { community_id: CommunityId, local_user_index_canister_id: TSBytes, channels: Array<UserChannelSummary>, index: number, archived: boolean, pinned: Array<bigint>, };
export type UserSwapTokensExchangeArgs = { "ICPSwap": UserSwapTokensICPSwapArgs } | { "Sonic": UserSwapTokensICPSwapArgs } | { "KongSwap": UserSwapTokensICPSwapArgs };
export type UserSwapTokensArgs = { swap_id: bigint, input_token: TokenInfo, output_token: TokenInfo, input_amount: bigint, exchange_args: UserSwapTokensExchangeArgs, min_output_amount: bigint, pin?: string | undefined, };
export type UserSetAvatarArgs = { avatar?: Document | undefined, };
export type UserUndeleteMessagesArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, message_ids: Array<MessageId>, correlation_id: bigint, };
export type UserGroupChatSummaryUpdates = { chat_id: ChatId, read_by_me_up_to?: MessageIndex | undefined, threads_read: Record<MessageIndex, MessageIndex>, archived?: boolean | undefined, date_read_pinned?: bigint | undefined, };
export type UserUnblockUserArgs = { user_id: UserId, };
export type UserAddHotGroupExclusionsArgs = { groups: Array<ChatId>, duration?: bigint | undefined, };
export type UserContactsContact = { user_id: UserId, nickname?: string | undefined, };
export type UserContactsSuccessResult = { contacts: Array<UserContactsContact>, };
export type UserEventsWindowArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, mid_point: MessageIndex, max_messages: number, max_events: number, latest_known_update?: bigint | undefined, };
export type UserDeleteDirectChatArgs = { user_id: UserId, block_user: boolean, };
export type UserInitialStateCommunitiesInitial = { summaries: Array<UserCommunitySummary>, };
export type UserInitialStateGroupChatsInitial = { summaries: Array<UserGroupChatSummary>, pinned: Array<ChatId>, };
export type UserDeleteMessagesArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, message_ids: Array<MessageId>, correlation_id: bigint, };
export type UserHotGroupExclusionsResponse = { "Success": Array<ChatId> };
export type UserUpdatesGroupChatsUpdates = { 
/**
 * @default []
 */
added: Array<UserGroupChatSummary>, 
/**
 * @default []
 */
updated: Array<UserGroupChatSummaryUpdates>, 
/**
 * @default []
 */
removed: Array<ChatId>, pinned?: Array<ChatId> | undefined, };
export type UserUpdatesCommunitiesUpdates = { 
/**
 * @default []
 */
added: Array<UserCommunitySummary>, 
/**
 * @default []
 */
updated: Array<UserCommunitySummaryUpdates>, 
/**
 * @default []
 */
removed: Array<CommunityId>, };
export type UserLeaveGroupArgs = { chat_id: ChatId, correlation_id: bigint, };
export type UserMuteNotificationsArgs = { chat_id: ChatId, };
export type UserMessagesByMessageIndexArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, messages: Array<MessageIndex>, latest_known_update?: bigint | undefined, };
export type UserApproveTransferArgs = { spender: AccountICRC1, ledger_canister_id: TSBytes, amount: bigint, expires_in?: bigint | undefined, pin?: string | undefined, };
export type UserDeleteGroupArgs = { chat_id: ChatId, };
export type UserEndVideoCallArgs = { user_id: UserId, message_id: MessageId, };
export type UserTokenSwapsTokenSwap = { args: UserSwapTokensArgs, started: bigint, icrc2: boolean, transfer_or_approval?: { Ok : bigint } | { Err : string } | undefined, notified_dex?: { Ok : null } | { Err : string } | undefined, amount_swapped?: { Ok : { Ok : bigint } | { Err : string } } | { Err : string } | undefined, withdrawn_from_dex?: { Ok : bigint } | { Err : string } | undefined, success?: boolean | undefined, };
export type UserTokenSwapsSuccessResult = { total: number, swaps: Array<UserTokenSwapsTokenSwap>, };
export type UserRemoveReactionArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, reaction: Reaction, correlation_id: bigint, };
export type UserSetContactOptionalContact = { user_id: UserId, nickname: OptionUpdateString, };
export type UserSetContactArgs = { contact: UserSetContactOptionalContact, };
export type UserAddReactionArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, reaction: Reaction, correlation_id: bigint, };
export type UserReferral = { user_id: UserId, status: ReferralStatus, };
export type UserBlockUserArgs = { user_id: UserId, };
export type UserSetCommunityIndexesArgs = { indexes: Array<[CommunityId, number]>, };
export type UserStartVideoCallArgs = { message_id: MessageId, initiator: UserId, initiator_username: string, initiator_display_name?: string | undefined, initiator_avatar_id?: bigint | undefined, max_duration?: bigint | undefined, call_type: VideoCallType, };
export type UserSendMessageSuccessResult = { chat_id: ChatId, event_index: EventIndex, message_index: MessageIndex, timestamp: bigint, expires_at?: bigint | undefined, };
export type UserEventsByIndexArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, events: Array<EventIndex>, latest_known_update?: bigint | undefined, };
export type UserCreateCommunitySuccessResult = { community_id: CommunityId, };
export type UserCreateCommunityResponse = { "Success": UserCreateCommunitySuccessResult } | { "NameTooShort": FieldTooShortResult } | { "NameTooLong": FieldTooLongResult } | "NameReserved" | { "DescriptionTooLong": FieldTooLongResult } | { "RulesTooShort": FieldTooShortResult } | { "RulesTooLong": FieldTooLongResult } | { "AvatarTooBig": FieldTooLongResult } | { "BannerTooBig": FieldTooLongResult } | "AccessGateInvalid" | { "MaxCommunitiesCreated": number } | "NameTaken" | "Throttled" | "UserSuspended" | "Unauthorized" | "DefaultChannelsInvalid" | { "InternalError": string };
export type UserMarkReadChatMessagesRead = { chat_id: ChatId, read_up_to?: MessageIndex | undefined, threads: Array<UserMarkReadThreadRead>, date_read_pinned?: bigint | undefined, };
export type UserMarkReadCommunityMessagesRead = { community_id: CommunityId, channels_read: Array<UserMarkReadChannelMessagesRead>, };
export type UserEventsArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, start_index: EventIndex, ascending: boolean, max_messages: number, max_events: number, latest_known_update?: bigint | undefined, };
export type UserLeaveCommunityArgs = { community_id: CommunityId, };
export type UserAcceptP2pSwapArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, pin?: string | undefined, };
export type UserDeleteCommunityArgs = { community_id: CommunityId, };
export type UserChitEventsSuccessResult = { events: Array<ChitEarned>, total: number, };
export type UserReportMessageArgs = { them: UserId, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, delete: boolean, };
export type VideoContent = { width: number, height: number, thumbnail_data: ThumbnailData, caption?: string | undefined, mime_type: string, image_blob_reference?: BlobReference | undefined, video_blob_reference?: BlobReference | undefined, };
export type GroupPermissions = { change_roles: GroupPermissionRole, update_group: GroupPermissionRole, add_members: GroupPermissionRole, invite_users: GroupPermissionRole, remove_members: GroupPermissionRole, delete_messages: GroupPermissionRole, pin_messages: GroupPermissionRole, react_to_messages: GroupPermissionRole, mention_all_members: GroupPermissionRole, start_video_call: GroupPermissionRole, message_permissions: MessagePermissions, thread_permissions?: MessagePermissions | undefined, };
export type GroupSubtype = { "GovernanceProposals": GovernanceProposalsSubtype };
export type SignedDelegation = { delegation: Delegation, signature: TSBytes, };
export type P2PSwapReserved = { reserved_by: UserId, };
export type UserSummary = { user_id: UserId, username: string, display_name?: string | undefined, avatar_id?: bigint | undefined, is_bot: boolean, suspended: boolean, diamond_member: boolean, diamond_membership_status: DiamondMembershipStatus, total_chit_earned: number, chit_balance: number, streak: number, is_unique_person: boolean, };
export type CompletedCryptoTransactionICRC2 = { ledger: TSBytes, token: Cryptocurrency, amount: bigint, spender: UserId, from: CryptoAccountICRC1, to: CryptoAccountICRC1, fee: bigint, memo?: TSBytes | undefined, created: bigint, block_index: bigint, };
export type AvatarChanged = { new_avatar?: bigint | undefined, previous_avatar?: bigint | undefined, changed_by: UserId, };
export type MembersRemoved = { user_ids: Array<UserId>, removed_by: UserId, };
export type SwapStatusErrorReserved = { reserved_by: UserId, };
export type MessagePinned = { message_index: MessageIndex, pinned_by: UserId, };
export type P2PSwapContentInitial = { token0: TokenInfo, token0_amount: bigint, token1: TokenInfo, token1_amount: bigint, expires_in: bigint, caption?: string | undefined, };
export type GroupDescriptionChanged = { new_description: string, previous_description: string, changed_by: UserId, };
export type PrizeContent = { prizes_remaining: number, prizes_pending: number, winners: Array<UserId>, winner_count: number, user_is_winner: boolean, token: Cryptocurrency, end_date: bigint, caption?: string | undefined, diamond_only: boolean, };
export type GroupRulesChanged = { enabled: boolean, prev_enabled: boolean, changed_by: UserId, };
export type GroupCreated = { name: string, description: string, created_by: UserId, };
export type HydratedMention = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, message_index: MessageIndex, event_index: EventIndex, mentioned_by: UserId, };
export type UserSummaryV2 = { user_id: UserId, stable?: UserSummaryStable | undefined, volatile?: UserSummaryVolatile | undefined, };
export type ExternalUrlUpdated = { updated_by: UserId, new_url?: string | undefined, };
export type DeletedGroupInfo = { id: ChatId, timestamp: bigint, deleted_by: UserId, group_name: string, name: string, public: boolean, };
export type SwapStatusErrorAccepted = { accepted_by: UserId, token1_txn_in: bigint, };
export type P2PSwapCompleted = { accepted_by: UserId, token1_txn_in: bigint, token0_txn_out: bigint, token1_txn_out: bigint, };
export type GroupInviteCodeChanged = { change: GroupInviteCodeChange, changed_by: UserId, };
export type GroupNameChanged = { new_name: string, previous_name: string, changed_by: UserId, };
export type AccessGateNonComposite = "DiamondMember" | "LifetimeDiamondMember" | "UniquePerson" | { "VerifiedCredential": VerifiedCredentialGate } | { "SnsNeuron": SnsNeuronGate } | { "Payment": PaymentGate } | { "TokenBalance": TokenBalanceGate } | "Locked" | "ReferredByMember";
export type Chat = { "Direct": ChatId } | { "Group": ChatId } | { "Channel": [CommunityId, bigint] };
export type DeletedBy = { deleted_by: UserId, timestamp: bigint, };
export type CompletedCryptoTransaction = { "NNS": CompletedCryptoTransactionNNS } | { "ICRC1": CompletedCryptoTransactionICRC1 } | { "ICRC2": CompletedCryptoTransactionICRC2 };
export type P2PSwapAccepted = { accepted_by: UserId, token1_txn_in: bigint, };
export type GroupMember = { user_id: UserId, date_added: bigint, role: GroupRole, lapsed: boolean, };
export type MessageUnpinned = { message_index: MessageIndex, unpinned_by: UserId, due_to_message_deleted: boolean, };
export type TotalVotes = { "Visible": Record<number, Array<UserId>> } | { "Anonymous": Record<number, number> } | { "Hidden": number };
export type MultiUserChat = { "Group": ChatId } | { "Channel": [CommunityId, bigint] };
export type UsersUnblocked = { user_ids: Array<UserId>, unblocked_by: UserId, };
export type Tips = Array<[TSBytes, Array<[UserId, bigint]>]>;
export type CallParticipant = { user_id: UserId, joined: bigint, };
export type PermissionsChanged = { old_permissions_v2: GroupPermissions, new_permissions_v2: GroupPermissions, changed_by: UserId, };
export type GroupFrozen = { frozen_by: UserId, reason?: string | undefined, };
export type FailedCryptoTransactionICRC2 = { ledger: TSBytes, token: Cryptocurrency, amount: bigint, fee: bigint, spender: UserId, from: CryptoAccountICRC1, to: CryptoAccountICRC1, memo?: TSBytes | undefined, created: bigint, error_message: string, };
export type Proposal = { "NNS": NnsProposal } | { "SNS": SnsProposal };
export type UsersInvited = { user_ids: Array<UserId>, invited_by: UserId, };
export type PendingCryptoTransactionNNS = { ledger: TSBytes, token: Cryptocurrency, amount: Tokens, to: UserOrAccount, fee?: Tokens | undefined, memo?: bigint | undefined, created: bigint, };
export type DeletedCommunityInfo = { id: CommunityId, timestamp: bigint, deleted_by: UserId, name: string, public: boolean, };
export type VideoCallParticipants = { participants: Array<CallParticipant>, hidden: Array<CallParticipant>, last_updated: bigint, };
export type SwapStatusErrorCompleted = { accepted_by: UserId, token1_txn_in: bigint, token0_txn_out: bigint, token1_txn_out: bigint, };
export type MembersAdded = { user_ids: Array<UserId>, added_by: UserId, unblocked: Array<UserId>, };
export type FrozenGroupInfo = { timestamp: bigint, frozen_by: UserId, reason?: string | undefined, };
export type GroupUnfrozen = { unfrozen_by: UserId, };
export type EventsTimeToLiveUpdated = { updated_by: UserId, new_ttl?: bigint | undefined, };
export type MemberJoined = { user_id: UserId, invited_by?: UserId | undefined, };
export type RoleChanged = { user_ids: Array<UserId>, changed_by: UserId, old_role: GroupRole, new_role: GroupRole, };
export type GroupVisibilityChanged = { public?: boolean | undefined, messages_visible_to_non_members?: boolean | undefined, changed_by: UserId, };
export type SelectedGroupUpdates = { timestamp: bigint, last_updated: bigint, latest_event_index: EventIndex, members_added_or_updated: Array<GroupMember>, members_removed: Array<UserId>, blocked_users_added: Array<UserId>, blocked_users_removed: Array<UserId>, invited_users?: Array<UserId> | undefined, pinned_messages_added: Array<MessageIndex>, pinned_messages_removed: Array<MessageIndex>, chat_rules?: VersionedRules | undefined, };
export type GroupMembership = { joined: bigint, role: GroupRole, mentions: Array<HydratedMention>, notifications_muted: boolean, my_metrics: ChatMetrics, latest_threads: Array<GroupCanisterThreadDetails>, rules_accepted: boolean, lapsed: boolean, };
/**
 * @default NoChange
 */
export type OptionUpdateFrozenGroupInfo = "NoChange" | "SetToNone" | { "SetToSome": FrozenGroupInfo };
export type ProposalContent = { governance_canister_id: TSBytes, proposal: Proposal, my_vote?: boolean | undefined, };
export type ReplyContext = { chat_if_other?: [Chat, MessageIndex | null] | undefined, event_index: EventIndex, };
export type ReportedMessage = { reports: Array<MessageReport>, count: number, };
export type GroupMembershipUpdates = { role?: GroupRole | undefined, mentions: Array<HydratedMention>, notifications_muted?: boolean | undefined, my_metrics?: ChatMetrics | undefined, latest_threads: Array<GroupCanisterThreadDetails>, unfollowed_threads: Array<MessageIndex>, rules_accepted?: boolean | undefined, lapsed?: boolean | undefined, };
export type DiamondMembershipStatusFull = "Inactive" | { "Active": DiamondMembershipDetails } | "Lifetime";
/**
 * @default NoChange
 */
export type OptionUpdateGroupSubtype = "NoChange" | "SetToNone" | { "SetToSome": GroupSubtype };
export type GroupIndexActiveGroupsSuccessResult = { timestamp: bigint, active_groups: Array<ChatId>, active_communities: Array<CommunityId>, deleted_groups: Array<DeletedGroupInfo>, deleted_communities: Array<DeletedCommunityInfo>, };
export type UserIndexPlatformModeratorsResponse = { "Success": UserIndexPlatformModeratorsSuccessResult };
export type UserIndexSuspectedBotsResponse = { "Success": UserIndexSuspectedBotsSuccessResult };
export type UserIndexUserResponse = { "Success": UserSummary } | "UserNotFound";
export type UserIndexSearchResult = { users: Array<UserSummary>, timestamp: bigint, };
export type UserIndexSearchResponse = { "Success": UserIndexSearchResult };
export type UserIndexChitLeaderboardSuccessResult = { all_time: Array<UserIndexChitLeaderboardChitUserBalance>, this_month: Array<UserIndexChitLeaderboardChitUserBalance>, last_month: Array<UserIndexChitLeaderboardChitUserBalance>, };
export type UserIndexChitLeaderboardResponse = { "SuccessV2": UserIndexChitLeaderboardSuccessResult };
export type UserIndexCurrentUserSuccessResult = { user_id: UserId, username: string, date_created: bigint, display_name?: string | undefined, avatar_id?: bigint | undefined, canister_upgrade_status: CanisterUpgradeStatus, wasm_version: BuildVersion, icp_account: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], referrals: Array<UserId>, is_platform_moderator: boolean, is_platform_operator: boolean, suspension_details?: SuspensionDetails | undefined, is_suspected_bot: boolean, diamond_membership_details?: DiamondMembershipDetails | undefined, diamond_membership_status: DiamondMembershipStatusFull, moderation_flags_enabled: number, is_unique_person: boolean, };
export type UserIndexCurrentUserResponse = { "Success": UserIndexCurrentUserSuccessResult } | "UserNotFound";
export type LocalUserIndexAccessTokenArgs = { token_type: AccessTokenType, chat: Chat, };
export type LocalUserIndexRegisterUserResponse = { "Success": LocalUserIndexRegisterUserSuccessResult } | "RegistrationInProgress" | "AlreadyRegistered" | "UserLimitReached" | "UsernameInvalid" | { "UsernameTooShort": number } | { "UsernameTooLong": number } | "CyclesBalanceTooLow" | { "InternalError": string } | { "PublicKeyInvalid": string } | "ReferralCodeInvalid" | "ReferralCodeAlreadyClaimed" | "ReferralCodeExpired";
export type LocalUserIndexChatEventsEventsArgs = { context: LocalUserIndexChatEventsEventsContext, args: LocalUserIndexChatEventsEventsArgsInner, latest_known_update?: bigint | undefined, };
export type LocalUserIndexInviteUsersToChannelResponse = "Success" | { "PartialSuccess": LocalUserIndexInviteUsersToChannelPartialSuccessResult } | { "Failed": LocalUserIndexInviteUsersToChannelFailedResult } | "CommunityFrozen" | "UserNotInCommunity" | "ChannelNotFound" | "UserNotInChannel" | "UserSuspended" | "NotAuthorized" | { "TooManyInvites": number } | { "InternalError": string };
export type LocalUserIndexReportMessageArgs = { chat_id: MultiUserChat, thread_root_message_index?: MessageIndex | undefined, event_index: EventIndex, reason_code: number, notes?: string | undefined, };
export type CommunitySelectedChannelUpdatesResponse = { "Success": SelectedGroupUpdates } | { "SuccessNoUpdates": bigint } | "PrivateCommunity" | "ChannelNotFound" | "PrivateChannel";
export type CommunitySelectedChannelInitialSuccessResult = { timestamp: bigint, last_updated: bigint, latest_event_index: EventIndex, members: Array<GroupMember>, basic_members: Array<UserId>, blocked_users: Array<UserId>, invited_users: Array<UserId>, pinned_messages: Array<MessageIndex>, chat_rules: VersionedRules, };
export type CommunityCommunityMembersResponse = { "Success": CommunityCommunityMembersSuccessResult } | "PrivateCommunity";
export type CommunityAddMembersToChannelResponse = "Success" | { "PartialSuccess": CommunityAddMembersToChannelPartialSuccessResult } | { "Failed": CommunityAddMembersToChannelFailedResult } | "CommunityFrozen" | "CommunityPublic" | "UserSuspended" | "UserLapsed" | "UserNotInCommunity" | "UserNotInChannel" | "ChannelNotFound" | { "UserLimitReached": number } | "NotAuthorized" | { "InternalError": string };
export type CommunitySelectedInitialResponse = { "Success": CommunitySelectedInitialSuccessResult } | "PrivateCommunity";
export type CommunityVideoCallParticipantsResponse = { "Success": VideoCallParticipants } | "VideoCallNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "ChannelNotFound";
export type ProposalsBotProposalToSubmitAction = "Motion" | { "TransferSnsTreasuryFunds": ProposalsBotTransferSnsTreasuryFunds } | "UpgradeSnsToNextVersion" | { "UpgradeSnsControlledCanister": ProposalsBotUpgradeSnsControlledCanister } | { "ExecuteGenericNervousSystemFunction": ProposalsBotExecuteGenericNervousSystemFunction };
export type ProposalsBotProposalToSubmit = { title: string, summary: string, url: string, action: ProposalsBotProposalToSubmitAction, };
export type OnlineUsersLastOnlineResponse = { "Success": Array<OnlineUsersLastOnlineUserLastOnline> };
export type GroupSelectedInitialSuccessResult = { timestamp: bigint, last_updated: bigint, latest_event_index: EventIndex, participants: Array<GroupMember>, basic_members: Array<UserId>, blocked_users: Array<UserId>, invited_users: Array<UserId>, pinned_messages: Array<MessageIndex>, chat_rules: VersionedRules, };
export type GroupSelectedInitialResponse = { "Success": GroupSelectedInitialSuccessResult } | "CallerNotInGroup";
export type GroupVideoCallParticipantsResponse = { "Success": VideoCallParticipants } | "VideoCallNotFound" | "CallerNotInGroup";
export type GroupSelectedUpdatesResponse = { "Success": SelectedGroupUpdates } | { "SuccessNoUpdates": bigint } | "CallerNotInGroup";
export type UserManageFavouriteChatsArgs = { to_add: Array<Chat>, to_remove: Array<Chat>, };
export type UserCreateGroupResponse = { "Success": UserCreateGroupSuccessResult } | { "NameTooShort": FieldTooShortResult } | { "NameTooLong": FieldTooLongResult } | "NameReserved" | { "DescriptionTooLong": FieldTooLongResult } | { "RulesTooShort": FieldTooShortResult } | { "RulesTooLong": FieldTooLongResult } | { "AvatarTooBig": FieldTooLongResult } | "AccessGateInvalid" | { "MaxGroupsCreated": number } | "NameTaken" | "Throttled" | "UserSuspended" | "UnauthorizedToCreatePublicGroup" | "InternalError";
export type UserSetPinNumberPinNumberVerification = "None" | { "PIN": string } | { "Delegation": SignedDelegation };
export type UserSetPinNumberArgs = { new?: string | undefined, verification: UserSetPinNumberPinNumberVerification, };
export type UserTipMessageArgs = { chat: Chat, recipient: UserId, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, ledger: TSBytes, token: Cryptocurrency, amount: bigint, fee: bigint, decimals: number, pin?: string | undefined, };
export type UserChatInList = { "Direct": ChatId } | { "Group": ChatId } | { "Favourite": Chat } | { "Community": [CommunityId, bigint] };
export type UserPinChatArgs = { chat: UserChatInList, };
export type UserContactsResponse = { "Success": UserContactsSuccessResult };
export type UserInitialStateFavouriteChatsInitial = { chats: Array<Chat>, pinned: Array<Chat>, };
export type UserUpdatesFavouriteChatsUpdates = { chats?: Array<Chat> | undefined, pinned?: Array<Chat> | undefined, };
export type UserSubmitProposalArgs = { governance_canister_id: TSBytes, proposal: ProposalsBotProposalToSubmit, ledger: TSBytes, token: Cryptocurrency, proposal_rejection_fee: bigint, transaction_fee: bigint, };
export type UserSendMessageWithTransferToGroupSuccessResult = { event_index: EventIndex, message_index: MessageIndex, timestamp: bigint, expires_at?: bigint | undefined, transfer: CompletedCryptoTransaction, };
export type UserSetMessageReminderArgs = { chat: Chat, thread_root_message_index?: MessageIndex | undefined, event_index: EventIndex, notes?: string | undefined, remind_at: bigint, };
export type UserTokenSwapsResponse = { "Success": UserTokenSwapsSuccessResult };
export type UserArchiveUnarchiveChatsArgs = { to_archive: Array<Chat>, to_unarchive: Array<Chat>, };
export type UserArchiveUnarchiveChatsPartialSuccessResult = { chats_not_found: Array<Chat>, };
export type UserSendMessageTransferSuccessV2Result = { chat_id: ChatId, event_index: EventIndex, message_index: MessageIndex, timestamp: bigint, expires_at?: bigint | undefined, transfer: CompletedCryptoTransaction, };
export type UserSendMessageResponse = { "Success": UserSendMessageSuccessResult } | { "TransferSuccessV2": UserSendMessageTransferSuccessV2Result } | "MessageEmpty" | { "TextTooLong": number } | "RecipientBlocked" | "RecipientNotFound" | { "InvalidPoll": InvalidPollReason } | { "InvalidRequest": string } | { "TransferFailed": string } | "TransferCannotBeZero" | "TransferCannotBeToSelf" | { "P2PSwapSetUpFailed": string } | "DuplicateMessageId" | "UserSuspended" | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string };
export type UserSendMessageWithTransferToChannelSuccessResult = { event_index: EventIndex, message_index: MessageIndex, timestamp: bigint, expires_at?: bigint | undefined, transfer: CompletedCryptoTransaction, };
export type UserMarkReadArgs = { messages_read: Array<UserMarkReadChatMessagesRead>, community_messages_read: Array<UserMarkReadCommunityMessagesRead>, };
export type UserChitEventsResponse = { "Success": UserChitEventsSuccessResult };
export type UserUnpinChatArgs = { chat: UserChatInList, };
export type PrizeWinnerContent = { winner: UserId, transaction: CompletedCryptoTransaction, prize_message: MessageIndex, };
export type VideoCallContent = { call_type: VideoCallType, ended?: bigint | undefined, participants: Array<CallParticipant>, hidden_participants: number, };
export type EventWrapperGroupFrozen = { index: EventIndex, timestamp: bigint, correlation_id: bigint, expires_at?: bigint | undefined, event: GroupFrozen, };
export type FailedCryptoTransaction = { "NNS": FailedCryptoTransactionNNS } | { "ICRC1": FailedCryptoTransactionICRC1 } | { "ICRC2": FailedCryptoTransactionICRC2 };
export type CompositeGate = { inner: Array<AccessGateNonComposite>, and: boolean, };
export type EventWrapperGroupUnfrozen = { index: EventIndex, timestamp: bigint, correlation_id: bigint, expires_at?: bigint | undefined, event: GroupUnfrozen, };
export type PendingCryptoTransaction = { "NNS": PendingCryptoTransactionNNS } | { "ICRC1": PendingCryptoTransactionICRC1 } | { "ICRC2": PendingCryptoTransactionICRC2 };
export type CryptoTransaction = { "Pending": PendingCryptoTransaction } | { "Completed": CompletedCryptoTransaction } | { "Failed": FailedCryptoTransaction };
export type P2PSwapStatus = "Open" | { "Cancelled": P2PSwapCancelled } | { "Expired": P2PSwapCancelled } | { "Reserved": P2PSwapReserved } | { "Accepted": P2PSwapAccepted } | { "Completed": P2PSwapCompleted };
export type PollVotes = { total: TotalVotes, user: Array<number>, };
export type CurrentUserSummary = { user_id: UserId, username: string, display_name?: string | undefined, avatar_id?: bigint | undefined, is_bot: boolean, is_platform_moderator: boolean, is_platform_operator: boolean, suspension_details?: SuspensionDetails | undefined, is_suspected_bot: boolean, diamond_membership_details?: DiamondMembershipDetails | undefined, diamond_membership_status: DiamondMembershipStatusFull, moderation_flags_enabled: number, is_unique_person: boolean, };
export type SwapStatusError = { "Reserved": SwapStatusErrorReserved } | { "Accepted": SwapStatusErrorAccepted } | { "Completed": SwapStatusErrorCompleted } | { "Expired": SwapStatusErrorExpired } | { "Cancelled": SwapStatusErrorCancelled };
export type P2PSwapContent = { swap_id: number, token0: TokenInfo, token0_amount: bigint, token1: TokenInfo, token1_amount: bigint, expires_at: bigint, caption?: string | undefined, token0_txn_in: bigint, status: P2PSwapStatus, };
export type AccessGate = "DiamondMember" | "LifetimeDiamondMember" | "UniquePerson" | { "VerifiedCredential": VerifiedCredentialGate } | { "SnsNeuron": SnsNeuronGate } | { "Payment": PaymentGate } | { "TokenBalance": TokenBalanceGate } | { "Composite": CompositeGate } | "Locked" | "ReferredByMember";
export type GroupIndexFreezeGroupResponse = { "Success": EventWrapperGroupFrozen } | "ChatAlreadyFrozen" | "ChatNotFound" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexUnfreezeCommunityResponse = { "Success": EventWrapperGroupUnfrozen } | "CommunityNotFrozen" | "CommunityNotFound" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexFreezeCommunityResponse = { "Success": EventWrapperGroupFrozen } | "CommunityAlreadyFrozen" | "CommunityNotFound" | "NotAuthorized" | { "InternalError": string };
export type GroupIndexActiveGroupsResponse = { "Success": GroupIndexActiveGroupsSuccessResult };
export type GroupIndexUnfreezeGroupResponse = { "Success": EventWrapperGroupUnfrozen } | "ChatNotFrozen" | "ChatNotFound" | "NotAuthorized" | { "InternalError": string };
export type UserIndexUsersResult = { users: Array<UserSummaryV2>, current_user?: CurrentUserSummary | undefined, deleted: Array<UserId>, timestamp: bigint, };
export type UserIndexUsersResponse = { "Success": UserIndexUsersResult };
export type LocalUserIndexChatEventsArgs = { requests: Array<LocalUserIndexChatEventsEventsArgs>, };
export type CommunityClaimPrizeResponse = "Success" | "MessageNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "UserSuspended" | "CommunityFrozen" | "ChannelNotFound" | "AlreadyClaimed" | "PrizeFullyClaimed" | "PrizeEnded" | "LedgerError" | { "TransferFailed": [string, FailedCryptoTransaction] } | { "FailedAfterTransfer": [string, CompletedCryptoTransaction] } | { "InternalError": string } | "UserLapsed";
export type CommunityRegisterPollVoteResponse = { "Success": PollVotes } | "CommunityFrozen" | "UserNotInCommunity" | "UserSuspended" | "ChannelNotFound" | "UserNotInChannel" | "UserCannotChangeVote" | "PollNotFound" | "PollEnded" | "OptionIndexOutOfRange" | "UserLapsed";
export type CommunityCancelP2pSwapResponse = "Success" | { "StatusError": SwapStatusError } | "SwapNotFound" | "ChannelNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "ChatFrozen";
export type CommunitySelectedChannelInitialResponse = { "Success": CommunitySelectedChannelInitialSuccessResult } | "PrivateCommunity" | "ChannelNotFound" | "PrivateChannel";
export type CommunityAcceptP2pSwapResponse = { "Success": AcceptSwapSuccess } | "InsufficientFunds" | { "StatusError": SwapStatusError } | "SwapNotFound" | "ChannelNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "UserSuspended" | "ChatFrozen" | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string } | "UserLapsed";
export type GroupClaimPrizeResponse = "Success" | "CallerNotInGroup" | "UserSuspended" | "UserLapsed" | "ChatFrozen" | "MessageNotFound" | "AlreadyClaimed" | "PrizeFullyClaimed" | "PrizeEnded" | "LedgerError" | { "TransferFailed": [string, FailedCryptoTransaction] } | { "FailedAfterTransfer": [string, CompletedCryptoTransaction] } | { "InternalError": string };
export type GroupRegisterPollVoteResponse = { "Success": PollVotes } | "PollNotFound" | "PollEnded" | "OptionIndexOutOfRange" | "UserCannotChangeVote" | "CallerNotInGroup" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type GroupCancelP2pSwapResponse = "Success" | { "StatusError": SwapStatusError } | "SwapNotFound" | "UserNotInGroup" | "ChatFrozen";
export type GroupAcceptP2pSwapResponse = { "Success": AcceptSwapSuccess } | "InsufficientFunds" | { "StatusError": SwapStatusError } | "SwapNotFound" | "UserNotInGroup" | "UserSuspended" | "UserLapsed" | "ChatFrozen" | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string };
export type UserCancelP2pSwapResponse = "Success" | "ChatNotFound" | { "StatusError": SwapStatusError } | "SwapNotFound";
export type UserSendMessageWithTransferToGroupResponse = { "Success": UserSendMessageWithTransferToGroupSuccessResult } | { "TextTooLong": number } | "RecipientBlocked" | { "CallerNotInGroup": CompletedCryptoTransaction | null } | { "CryptocurrencyNotSupported": Cryptocurrency } | { "InvalidRequest": string } | { "TransferFailed": string } | "TransferCannotBeZero" | "TransferCannotBeToSelf" | { "P2PSwapSetUpFailed": string } | "UserSuspended" | "UserLapsed" | "ChatFrozen" | "RulesNotAccepted" | { "Retrying": [string, CompletedCryptoTransaction] } | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string };
export type UserWithdrawCryptoArgs = { withdrawal: PendingCryptoTransaction, pin?: string | undefined, };
export type UserWithdrawCryptoResponse = { "Success": CompletedCryptoTransaction } | { "TransactionFailed": FailedCryptoTransaction } | "CurrencyNotSupported" | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string };
export type UserArchiveUnarchiveChatsResponse = "Success" | { "PartialSuccess": UserArchiveUnarchiveChatsPartialSuccessResult } | "Failure" | "UserSuspended";
export type UserSendMessageWithTransferToChannelResponse = { "Success": UserSendMessageWithTransferToChannelSuccessResult } | { "TextTooLong": number } | "RecipientBlocked" | { "UserNotInCommunity": CompletedCryptoTransaction | null } | { "UserNotInChannel": CompletedCryptoTransaction } | { "ChannelNotFound": CompletedCryptoTransaction } | { "CryptocurrencyNotSupported": Cryptocurrency } | { "InvalidRequest": string } | { "TransferFailed": string } | "TransferCannotBeZero" | "TransferCannotBeToSelf" | { "P2PSwapSetUpFailed": string } | "UserSuspended" | "UserLapsed" | "CommunityFrozen" | "RulesNotAccepted" | "CommunityRulesNotAccepted" | { "Retrying": [string, CompletedCryptoTransaction] } | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string };
export type UserAcceptP2pSwapResponse = { "Success": AcceptSwapSuccess } | "ChatNotFound" | "InsufficientFunds" | { "StatusError": SwapStatusError } | "SwapNotFound" | "UserSuspended" | "PinRequired" | { "PinIncorrect": bigint } | { "TooManyFailedPinAttempts": bigint } | { "InternalError": string };
export type PollContent = { config: PollConfig, votes: PollVotes, ended: boolean, };
export type CryptoContent = { recipient: UserId, transfer: CryptoTransaction, caption?: string | undefined, };
export type PrizeContentInitial = { prizes_v2: Array<bigint>, transfer: CryptoTransaction, end_date: bigint, caption?: string | undefined, diamond_only: boolean, };
/**
 * @default NoChange
 */
export type OptionUpdateAccessGate = "NoChange" | "SetToNone" | { "SetToSome": AccessGate };
export type MessageContent = { "Text": TextContent } | { "Image": ImageContent } | { "Video": VideoContent } | { "Audio": AudioContent } | { "File": FileContent } | { "Poll": PollContent } | { "Crypto": CryptoContent } | { "Deleted": DeletedBy } | { "Giphy": GiphyContent } | { "GovernanceProposal": ProposalContent } | { "Prize": PrizeContent } | { "PrizeWinner": PrizeWinnerContent } | { "MessageReminderCreated": MessageReminderCreatedContent } | { "MessageReminder": MessageReminderContent } | { "ReportedMessage": ReportedMessage } | { "P2PSwap": P2PSwapContent } | { "VideoCall": VideoCallContent } | { "Custom": CustomContent };
export type MessageMatch = { sender: UserId, message_index: MessageIndex, content: MessageContent, score: number, };
export type GroupMatch = { id: ChatId, name: string, description: string, avatar_id?: bigint | undefined, member_count: number, gate?: AccessGate | undefined, subtype?: GroupSubtype | undefined, };
export type AccessGateConfig = { gate: AccessGate, expiry?: bigint | undefined, };
export type MessageContentInitial = { "Text": TextContent } | { "Image": ImageContent } | { "Video": VideoContent } | { "Audio": AudioContent } | { "File": FileContent } | { "Poll": PollContent } | { "Crypto": CryptoContent } | { "Deleted": DeletedBy } | { "Giphy": GiphyContent } | { "GovernanceProposal": ProposalContent } | { "Prize": PrizeContentInitial } | { "MessageReminderCreated": MessageReminderCreatedContent } | { "MessageReminder": MessageReminderContent } | { "P2PSwap": P2PSwapContentInitial } | { "Custom": CustomContent };
/**
 * @default NoChange
 */
export type OptionUpdateAccessGateConfig = "NoChange" | "SetToNone" | { "SetToSome": AccessGateConfig };
export type GroupGateUpdated = { updated_by: UserId, new_gate?: AccessGate | undefined, new_gate_config?: AccessGateConfig | undefined, };
export type GroupIndexExploreGroupsSuccessResult = { matches: Array<GroupMatch>, total: number, };
export type GroupIndexExploreGroupsResponse = { "Success": GroupIndexExploreGroupsSuccessResult } | { "TermTooShort": number } | { "TermTooLong": number } | "InvalidTerm";
export type CommunityDeletedMessageSuccessResult = { content: MessageContent, };
export type CommunityDeletedMessageResponse = { "Success": CommunityDeletedMessageSuccessResult } | "UserNotInCommunity" | "ChannelNotFound" | "UserNotInChannel" | "NotAuthorized" | "MessageNotFound" | "MessageHardDeleted";
export type CommunitySearchChannelSuccessResult = { matches: Array<MessageMatch>, };
export type CommunitySearchChannelResponse = { "Success": CommunitySearchChannelSuccessResult } | "InvalidTerm" | { "TermTooLong": number } | { "TermTooShort": number } | { "TooManyUsers": number } | "UserNotInCommunity" | "ChannelNotFound" | "UserNotInChannel";
export type CommunityUpdateCommunityArgs = { name?: string | undefined, description?: string | undefined, rules?: UpdatedRules | undefined, avatar: OptionUpdateDocument, banner: OptionUpdateDocument, permissions?: OptionalCommunityPermissions | undefined, gate: OptionUpdateAccessGate, gate_config: OptionUpdateAccessGateConfig, public?: boolean | undefined, primary_language?: string | undefined, };
export type CommunitySendMessageArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, content: MessageContentInitial, sender_name: string, sender_display_name?: string | undefined, replies_to?: GroupReplyContext | undefined, mentioned: Array<User>, forwarding: boolean, block_level_markdown: boolean, community_rules_accepted?: Version | undefined, channel_rules_accepted?: Version | undefined, message_filter_failed?: bigint | undefined, new_achievement: boolean, };
export type CommunityCreateChannelArgs = { is_public: boolean, name: string, description: string, rules: Rules, subtype?: GroupSubtype | undefined, avatar?: Document | undefined, history_visible_to_new_joiners: boolean, messages_visible_to_non_members?: boolean | undefined, permissions_v2?: GroupPermissions | undefined, events_ttl?: bigint | undefined, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, external_url?: string | undefined, };
export type CommunityEditMessageArgs = { channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, content: MessageContentInitial, block_level_markdown?: boolean | undefined, new_achievement: boolean, };
export type CommunityUpdateChannelArgs = { channel_id: bigint, name?: string | undefined, description?: string | undefined, rules?: UpdatedRules | undefined, avatar: OptionUpdateDocument, permissions_v2?: OptionalGroupPermissions | undefined, events_ttl: OptionUpdateU64, gate: OptionUpdateAccessGate, gate_config: OptionUpdateAccessGateConfig, public?: boolean | undefined, messages_visible_to_non_members?: boolean | undefined, external_url: OptionUpdateString, };
export type GroupSearchMessagesSuccessResult = { matches: Array<MessageMatch>, };
export type GroupSearchMessagesResponse = { "Success": GroupSearchMessagesSuccessResult } | "InvalidTerm" | { "TermTooLong": number } | { "TermTooShort": number } | { "TooManyUsers": number } | "CallerNotInGroup";
export type GroupDeletedMessageSuccessResult = { content: MessageContent, };
export type GroupUpdateGroupArgs = { name?: string | undefined, description?: string | undefined, rules?: UpdatedRules | undefined, avatar: OptionUpdateDocument, permissions_v2?: OptionalGroupPermissions | undefined, events_ttl: OptionUpdateU64, gate: OptionUpdateAccessGate, gate_config: OptionUpdateAccessGateConfig, public?: boolean | undefined, messages_visible_to_non_members?: boolean | undefined, correlation_id: bigint, };
export type GroupSendMessageArgs = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, content: MessageContentInitial, sender_name: string, sender_display_name?: string | undefined, replies_to?: GroupReplyContext | undefined, mentioned: Array<User>, forwarding: boolean, block_level_markdown: boolean, rules_accepted?: Version | undefined, message_filter_failed?: bigint | undefined, new_achievement: boolean, correlation_id: bigint, };
export type GroupEditMessageArgs = { thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, content: MessageContentInitial, block_level_markdown?: boolean | undefined, new_achievement: boolean, correlation_id: bigint, };
export type UserSearchMessagesSuccessResult = { matches: Array<MessageMatch>, };
export type UserSearchMessagesResponse = { "Success": UserSearchMessagesSuccessResult } | "InvalidTerm" | { "TermTooLong": number } | { "TermTooShort": number } | "ChatNotFound";
export type UserCreateGroupArgs = { is_public: boolean, name: string, description: string, rules: Rules, avatar?: Document | undefined, history_visible_to_new_joiners: boolean, messages_visible_to_non_members?: boolean | undefined, permissions_v2?: GroupPermissions | undefined, events_ttl?: bigint | undefined, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, };
export type UserDeletedMessageSuccessResult = { content: MessageContent, };
export type UserDeletedMessageResponse = { "Success": UserDeletedMessageSuccessResult } | "ChatNotFound" | "NotAuthorized" | "MessageNotFound" | "MessageHardDeleted";
export type UserSendMessageWithTransferToGroupArgs = { group_id: ChatId, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, content: MessageContentInitial, sender_name: string, sender_display_name?: string | undefined, replies_to?: GroupReplyContext | undefined, mentioned: Array<User>, block_level_markdown: boolean, correlation_id: bigint, rules_accepted?: Version | undefined, message_filter_failed?: bigint | undefined, pin?: string | undefined, };
export type UserSendMessageArgs = { recipient: UserId, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, content: MessageContentInitial, replies_to?: ReplyContext | undefined, forwarding: boolean, block_level_markdown: boolean, message_filter_failed?: bigint | undefined, pin?: string | undefined, correlation_id: bigint, };
export type UserCreateCommunityArgs = { is_public: boolean, name: string, description: string, rules: Rules, avatar?: Document | undefined, banner?: Document | undefined, history_visible_to_new_joiners: boolean, permissions?: CommunityPermissions | undefined, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, default_channels: Array<string>, default_channel_rules?: Rules | undefined, primary_language: string, };
export type UserSendMessageWithTransferToChannelArgs = { community_id: CommunityId, channel_id: bigint, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, content: MessageContentInitial, sender_name: string, sender_display_name?: string | undefined, replies_to?: GroupReplyContext | undefined, mentioned: Array<User>, block_level_markdown: boolean, community_rules_accepted?: Version | undefined, channel_rules_accepted?: Version | undefined, message_filter_failed?: bigint | undefined, pin?: string | undefined, };
export type UserEditMessageArgs = { user_id: UserId, thread_root_message_index?: MessageIndex | undefined, message_id: MessageId, content: MessageContentInitial, block_level_markdown?: boolean | undefined, correlation_id: bigint, };
export type ChannelMatch = { id: bigint, name: string, description: string, avatar_id?: bigint | undefined, member_count: number, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, subtype?: GroupSubtype | undefined, };
export type Message = { message_index: MessageIndex, message_id: MessageId, sender: UserId, content: MessageContent, replies_to?: ReplyContext | undefined, reactions: Array<[Reaction, Array<UserId>]>, tips: Tips, thread_summary?: ThreadSummary | undefined, edited: boolean, forwarded: boolean, block_level_markdown: boolean, };
export type CommunityMatch = { id: CommunityId, score: number, name: string, description: string, avatar_id?: bigint | undefined, banner_id?: bigint | undefined, member_count: number, channel_count: number, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, moderation_flags: number, primary_language: string, };
export type EventWrapperMessage = { index: EventIndex, timestamp: bigint, correlation_id: bigint, expires_at?: bigint | undefined, event: Message, };
export type ChatEvent = "Empty" | { "Message": Message } | { "GroupChatCreated": GroupCreated } | { "DirectChatCreated": DirectChatCreated } | { "GroupNameChanged": GroupNameChanged } | { "GroupDescriptionChanged": GroupDescriptionChanged } | { "GroupRulesChanged": GroupRulesChanged } | { "AvatarChanged": AvatarChanged } | { "ParticipantsAdded": MembersAdded } | { "ParticipantsRemoved": MembersRemoved } | { "ParticipantJoined": MemberJoined } | { "ParticipantLeft": MemberLeft } | { "RoleChanged": RoleChanged } | { "UsersBlocked": UsersBlocked } | { "UsersUnblocked": UsersUnblocked } | { "MessagePinned": MessagePinned } | { "MessageUnpinned": MessageUnpinned } | { "PermissionsChanged": PermissionsChanged } | { "GroupVisibilityChanged": GroupVisibilityChanged } | { "GroupInviteCodeChanged": GroupInviteCodeChanged } | { "ChatFrozen": GroupFrozen } | { "ChatUnfrozen": GroupUnfrozen } | { "EventsTimeToLiveUpdated": EventsTimeToLiveUpdated } | { "GroupGateUpdated": GroupGateUpdated } | { "UsersInvited": UsersInvited } | { "MembersAddedToDefaultChannel": MembersAddedToDefaultChannel } | { "ExternalUrlUpdated": ExternalUrlUpdated };
export type CommunityCanisterChannelSummaryUpdates = { channel_id: bigint, last_updated: bigint, name?: string | undefined, description?: string | undefined, subtype: OptionUpdateGroupSubtype, avatar_id: OptionUpdateU128, is_public?: boolean | undefined, messages_visible_to_non_members?: boolean | undefined, latest_message?: EventWrapperMessage | undefined, latest_message_sender_display_name?: string | undefined, latest_event_index?: EventIndex | undefined, latest_message_index?: MessageIndex | undefined, member_count?: number | undefined, permissions_v2?: GroupPermissions | undefined, updated_events: Array<[MessageIndex | null, EventIndex, bigint]>, metrics?: ChatMetrics | undefined, date_last_pinned?: bigint | undefined, events_ttl: OptionUpdateU64, events_ttl_last_updated?: bigint | undefined, gate: OptionUpdateAccessGate, gate_config: OptionUpdateAccessGateConfig, membership?: GroupMembershipUpdates | undefined, video_call_in_progress: OptionUpdateVideoCall, external_url: OptionUpdateString, };
export type GroupIndexExploreCommunitiesSuccessResult = { matches: Array<CommunityMatch>, total: number, };
export type GroupIndexExploreCommunitiesResponse = { "Success": GroupIndexExploreCommunitiesSuccessResult } | { "TermTooShort": number } | { "TermTooLong": number } | "InvalidTerm" | "InvalidFlags";
export type CommunityUndeleteMessagesSuccessResult = { messages: Array<Message>, };
export type CommunityUndeleteMessagesResponse = { "Success": CommunityUndeleteMessagesSuccessResult } | "MessageNotFound" | "GroupNotFound" | "UserNotInCommunity" | "UserNotInChannel" | "UserSuspended" | "CommunityFrozen" | "UserLapsed";
export type CommunityExploreChannelsSuccessResult = { matches: Array<ChannelMatch>, total: number, };
export type CommunityExploreChannelsResponse = { "Success": CommunityExploreChannelsSuccessResult } | { "TermTooShort": number } | { "TermTooLong": number } | "InvalidTerm" | "PrivateCommunity";
export type GroupDeletedMessageResponse = { "Success": GroupDeletedMessageSuccessResult } | "CallerNotInGroup" | "NotAuthorized" | "MessageNotFound" | "MessageHardDeleted";
export type GroupUndeleteMessagesSuccessResult = { messages: Array<Message>, };
export type GroupUndeleteMessagesResponse = { "Success": GroupUndeleteMessagesSuccessResult } | "CallerNotInGroup" | "MessageNotFound" | "UserSuspended" | "UserLapsed" | "ChatFrozen";
export type UserUndeleteMessagesSuccessResult = { messages: Array<Message>, };
export type UserUndeleteMessagesResponse = { "Success": UserUndeleteMessagesSuccessResult } | "ChatNotFound" | "UserSuspended";
export type DirectChatSummary = { them: UserId, last_updated: bigint, latest_message: EventWrapperMessage, latest_event_index: EventIndex, latest_message_index: MessageIndex, date_created: bigint, read_by_me_up_to?: MessageIndex | undefined, read_by_them_up_to?: MessageIndex | undefined, notifications_muted: boolean, metrics: ChatMetrics, my_metrics: ChatMetrics, archived: boolean, events_ttl?: bigint | undefined, events_ttl_last_updated: bigint, video_call_in_progress?: VideoCall | undefined, };
export type MessagesResponse = { messages: Array<EventWrapperMessage>, latest_event_index: EventIndex, chat_last_updated: bigint, };
export type GroupCanisterGroupChatSummary = { chat_id: ChatId, local_user_index_canister_id: TSBytes, last_updated: bigint, name: string, description: string, subtype?: GroupSubtype | undefined, avatar_id?: bigint | undefined, is_public: boolean, history_visible_to_new_joiners: boolean, messages_visible_to_non_members: boolean, min_visible_event_index: EventIndex, min_visible_message_index: MessageIndex, latest_message?: EventWrapperMessage | undefined, latest_event_index: EventIndex, latest_message_index?: MessageIndex | undefined, joined: bigint, participant_count: number, role: GroupRole, mentions: Array<HydratedMention>, wasm_version: BuildVersion, permissions_v2: GroupPermissions, notifications_muted: boolean, metrics: ChatMetrics, my_metrics: ChatMetrics, latest_threads: Array<GroupCanisterThreadDetails>, frozen?: FrozenGroupInfo | undefined, date_last_pinned?: bigint | undefined, events_ttl?: bigint | undefined, events_ttl_last_updated: bigint, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, rules_accepted: boolean, membership?: GroupMembership | undefined, video_call_in_progress?: VideoCall | undefined, };
export type EventWrapperChatEvent = { index: EventIndex, timestamp: bigint, correlation_id: bigint, expires_at?: bigint | undefined, event: ChatEvent, };
export type ThreadPreview = { root_message: EventWrapperMessage, latest_replies: Array<EventWrapperMessage>, total_replies: number, };
export type GroupCanisterGroupChatSummaryUpdates = { chat_id: ChatId, last_updated: bigint, name?: string | undefined, description?: string | undefined, subtype: OptionUpdateGroupSubtype, avatar_id: OptionUpdateU128, latest_message?: EventWrapperMessage | undefined, latest_event_index?: EventIndex | undefined, latest_message_index?: MessageIndex | undefined, participant_count?: number | undefined, role?: GroupRole | undefined, 
/**
 * @default []
 */
mentions: Array<HydratedMention>, wasm_version?: BuildVersion | undefined, permissions_v2?: GroupPermissions | undefined, 
/**
 * @default []
 */
updated_events: Array<[MessageIndex | null, EventIndex, bigint]>, metrics?: ChatMetrics | undefined, my_metrics?: ChatMetrics | undefined, is_public?: boolean | undefined, messages_visible_to_non_members?: boolean | undefined, 
/**
 * @default []
 */
latest_threads: Array<GroupCanisterThreadDetails>, 
/**
 * @default []
 */
unfollowed_threads: Array<MessageIndex>, notifications_muted?: boolean | undefined, frozen: OptionUpdateFrozenGroupInfo, date_last_pinned?: bigint | undefined, events_ttl: OptionUpdateU64, events_ttl_last_updated?: bigint | undefined, gate: OptionUpdateAccessGate, gate_config: OptionUpdateAccessGateConfig, rules_accepted?: boolean | undefined, membership?: GroupMembershipUpdates | undefined, video_call_in_progress: OptionUpdateVideoCall, };
export type DirectChatSummaryUpdates = { chat_id: ChatId, last_updated: bigint, latest_message?: EventWrapperMessage | undefined, latest_event_index?: EventIndex | undefined, latest_message_index?: MessageIndex | undefined, read_by_me_up_to?: MessageIndex | undefined, read_by_them_up_to?: MessageIndex | undefined, notifications_muted?: boolean | undefined, updated_events: Array<[EventIndex, bigint]>, metrics?: ChatMetrics | undefined, my_metrics?: ChatMetrics | undefined, archived?: boolean | undefined, events_ttl: OptionUpdateU64, events_ttl_last_updated?: bigint | undefined, video_call_in_progress: OptionUpdateVideoCall, };
export type PublicGroupSummary = { chat_id: ChatId, local_user_index_canister_id: TSBytes, last_updated: bigint, name: string, description: string, subtype?: GroupSubtype | undefined, history_visible_to_new_joiners: boolean, messages_visible_to_non_members: boolean, avatar_id?: bigint | undefined, latest_message?: EventWrapperMessage | undefined, latest_event_index: EventIndex, latest_message_index?: MessageIndex | undefined, participant_count: number, wasm_version: BuildVersion, is_public: boolean, frozen?: FrozenGroupInfo | undefined, events_ttl?: bigint | undefined, events_ttl_last_updated: bigint, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, };
export type CommunityCanisterChannelSummary = { channel_id: bigint, last_updated: bigint, name: string, description: string, subtype?: GroupSubtype | undefined, avatar_id?: bigint | undefined, is_public: TSBoolWithDefault, history_visible_to_new_joiners: TSBoolWithDefault, messages_visible_to_non_members: TSBoolWithDefault, min_visible_event_index: TSNumberWithDefault, min_visible_message_index: TSNumberWithDefault, latest_message?: EventWrapperMessage | undefined, latest_message_sender_display_name?: string | undefined, latest_event_index: EventIndex, latest_message_index?: MessageIndex | undefined, member_count: number, permissions_v2: GroupPermissions, metrics: ChatMetrics, date_last_pinned?: bigint | undefined, events_ttl?: bigint | undefined, events_ttl_last_updated: bigint, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, membership?: GroupMembership | undefined, video_call_in_progress?: VideoCall | undefined, is_invited?: boolean | undefined, external_url?: string | undefined, };
export type GroupIndexRecommendedGroupsSuccessResult = { groups: Array<PublicGroupSummary>, };
export type GroupIndexRecommendedGroupsResponse = { "Success": GroupIndexRecommendedGroupsSuccessResult };
export type LocalUserIndexJoinGroupResponse = { "Success": GroupCanisterGroupChatSummary } | "AlreadyInGroup" | { "AlreadyInGroupV2": GroupCanisterGroupChatSummary } | { "GateCheckFailed": GateCheckFailedReason } | "GroupNotFound" | "GroupNotPublic" | "NotInvited" | { "ParticipantLimitReached": number } | "Blocked" | "UserSuspended" | "ChatFrozen" | { "InternalError": string };
export type CommunityChannelSummaryUpdatesResponse = { "SuccessAdded": CommunityCanisterChannelSummary } | { "SuccessUpdated": CommunityCanisterChannelSummaryUpdates } | "SuccessNoUpdates" | "PrivateCommunity" | "ChannelNotFound" | "PrivateChannel";
export type CommunityChannelSummaryResponse = { "Success": CommunityCanisterChannelSummary } | "PrivateCommunity" | "ChannelNotFound" | "PrivateChannel";
export type CommunityMessagesByMessageIndexResponse = { "Success": MessagesResponse } | "UserNotInCommunity" | "UserNotInChannel" | "ChannelNotFound" | "ThreadNotFound" | "UserSuspended" | "UserLapsed" | { "ReplicaNotUpToDateV2": bigint };
export type CommunityThreadPreviewsSuccessResult = { threads: Array<ThreadPreview>, timestamp: bigint, };
export type CommunityThreadPreviewsResponse = { "Success": CommunityThreadPreviewsSuccessResult } | "UserNotInCommunity" | "ChannelNotFound" | "UserNotInChannel" | { "ReplicaNotUpToDate": bigint };
export type GroupSummaryUpdatesSuccessResult = { updates: GroupCanisterGroupChatSummaryUpdates, };
export type GroupSummaryUpdatesResponse = { "Success": GroupSummaryUpdatesSuccessResult } | "SuccessNoUpdates" | "CallerNotInGroup";
export type GroupMessagesByMessageIndexResponse = { "Success": MessagesResponse } | "CallerNotInGroup" | "ThreadMessageNotFound" | "UserSuspended" | "UserLapsed" | { "ReplicaNotUpToDateV2": bigint };
export type GroupPublicSummarySuccessResult = { summary: PublicGroupSummary, is_invited: boolean, };
export type GroupPublicSummaryResponse = { "Success": GroupPublicSummarySuccessResult } | "NotAuthorized";
export type GroupThreadPreviewsSuccessResult = { threads: Array<ThreadPreview>, timestamp: bigint, };
export type GroupSummarySuccessResult = { summary: GroupCanisterGroupChatSummary, };
export type GroupSummaryResponse = { "Success": GroupSummarySuccessResult } | "CallerNotInGroup";
export type UserInitialStateDirectChatsInitial = { summaries: Array<DirectChatSummary>, pinned: Array<ChatId>, };
export type UserUpdatesDirectChatsUpdates = { 
/**
 * @default []
 */
added: Array<DirectChatSummary>, 
/**
 * @default []
 */
updated: Array<DirectChatSummaryUpdates>, 
/**
 * @default []
 */
removed: Array<ChatId>, pinned?: Array<ChatId> | undefined, };
export type UserMessagesByMessageIndexResponse = { "Success": MessagesResponse } | "ChatNotFound" | "ThreadMessageNotFound" | { "ReplicaNotUpToDateV2": bigint };
export type EventsResponse = { events: Array<EventWrapperChatEvent>, expired_event_ranges: Array<[EventIndex, EventIndex]>, expired_message_ranges: Array<[MessageIndex, MessageIndex]>, latest_event_index: EventIndex, chat_last_updated: bigint, };
export type CommunityCanisterCommunitySummary = { community_id: CommunityId, local_user_index_canister_id: TSBytes, last_updated: bigint, name: string, description: string, avatar_id?: bigint | undefined, banner_id?: bigint | undefined, is_public: boolean, member_count: number, permissions: CommunityPermissions, frozen?: FrozenGroupInfo | undefined, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, primary_language: string, latest_event_index: EventIndex, channels: Array<CommunityCanisterChannelSummary>, membership?: CommunityMembership | undefined, user_groups: Array<UserGroupSummary>, is_invited?: boolean | undefined, metrics: ChatMetrics, };
export type CommunityCanisterCommunitySummaryUpdates = { community_id: CommunityId, last_updated: bigint, name?: string | undefined, description?: string | undefined, avatar_id: OptionUpdateU128, banner_id: OptionUpdateU128, is_public?: boolean | undefined, member_count?: number | undefined, permissions?: CommunityPermissions | undefined, frozen: OptionUpdateFrozenGroupInfo, gate: OptionUpdateAccessGate, gate_config: OptionUpdateAccessGateConfig, primary_language?: string | undefined, latest_event_index?: EventIndex | undefined, 
/**
 * @default []
 */
channels_added: Array<CommunityCanisterChannelSummary>, 
/**
 * @default []
 */
channels_updated: Array<CommunityCanisterChannelSummaryUpdates>, 
/**
 * @default []
 */
channels_removed: Array<bigint>, membership?: CommunityMembershipUpdates | undefined, 
/**
 * @default []
 */
user_groups: Array<UserGroupSummary>, 
/**
 * @default []
 */
user_groups_deleted: Array<number>, metrics?: ChatMetrics | undefined, };
export type LocalUserIndexChatEventsEventsResponse = { "Success": EventsResponse } | "NotFound" | { "ReplicaNotUpToDate": bigint } | { "InternalError": string };
export type LocalUserIndexChatEventsSuccessResult = { responses: Array<LocalUserIndexChatEventsEventsResponse>, timestamp: bigint, };
export type LocalUserIndexChatEventsResponse = { "Success": LocalUserIndexChatEventsSuccessResult };
export type LocalUserIndexJoinCommunityResponse = { "Success": CommunityCanisterCommunitySummary } | { "AlreadyInCommunity": CommunityCanisterCommunitySummary } | { "GateCheckFailed": GateCheckFailedReason } | "CommunityNotFound" | "CommunityNotPublic" | "NotInvited" | { "MemberLimitReached": number } | "UserBlocked" | "UserSuspended" | "CommunityFrozen" | { "InternalError": string };
export type LocalUserIndexJoinChannelResponse = { "Success": CommunityCanisterChannelSummary } | { "SuccessJoinedCommunity": CommunityCanisterCommunitySummary } | { "AlreadyInChannel": CommunityCanisterChannelSummary } | { "GateCheckFailed": GateCheckFailedReason } | "CommunityNotFound" | "CommunityNotPublic" | "ChannelNotFound" | { "MemberLimitReached": number } | "UserBlocked" | "UserSuspended" | "CommunityFrozen" | "NotInvited" | { "InternalError": string };
export type LocalUserIndexGroupAndCommunitySummaryUpdatesSummaryUpdatesResponse = { "SuccessGroup": GroupCanisterGroupChatSummary } | { "SuccessCommunity": CommunityCanisterCommunitySummary } | { "SuccessGroupUpdates": GroupCanisterGroupChatSummaryUpdates } | { "SuccessCommunityUpdates": CommunityCanisterCommunitySummaryUpdates } | "SuccessNoUpdates" | "NotFound" | { "InternalError": string };
export type LocalUserIndexGroupAndCommunitySummaryUpdatesResponse = { "Success": Array<LocalUserIndexGroupAndCommunitySummaryUpdatesSummaryUpdatesResponse> };
export type CommunitySummaryUpdatesResponse = { "Success": CommunityCanisterCommunitySummaryUpdates } | "SuccessNoUpdates" | "PrivateCommunity";
export type CommunityEventsResponse = { "Success": EventsResponse } | "UserNotInCommunity" | "UserNotInChannel" | "ChannelNotFound" | "ThreadNotFound" | "UserSuspended" | "UserLapsed" | { "ReplicaNotUpToDateV2": bigint };
export type CommunitySummaryResponse = { "Success": CommunityCanisterCommunitySummary } | "PrivateCommunity";
export type GroupThreadPreviewsResponse = { "Success": GroupThreadPreviewsSuccessResult } | "CallerNotInGroup" | { "ReplicaNotUpToDate": bigint };
export type GroupEventsResponse = { "Success": EventsResponse } | "CallerNotInGroup" | "ThreadMessageNotFound" | "UserSuspended" | "UserLapsed" | { "ReplicaNotUpToDateV2": bigint };
export type UserEventsResponse = { "Success": EventsResponse } | "ChatNotFound" | "ThreadMessageNotFound" | { "ReplicaNotUpToDateV2": bigint };
export type UserInitialStateSuccessResult = { timestamp: bigint, direct_chats: UserInitialStateDirectChatsInitial, group_chats: UserInitialStateGroupChatsInitial, favourite_chats: UserInitialStateFavouriteChatsInitial, communities: UserInitialStateCommunitiesInitial, avatar_id?: bigint | undefined, blocked_users: Array<UserId>, suspended: boolean, pin_number_settings?: PinNumberSettings | undefined, local_user_index_canister_id: TSBytes, achievements: Array<ChitEarned>, achievements_last_seen: bigint, total_chit_earned: number, chit_balance: number, streak: number, streak_ends: bigint, next_daily_claim: bigint, is_unique_person: boolean, wallet_config: UserWalletConfig, referrals: Array<UserReferral>, message_activity_summary: UserMessageActivitySummary, };
export type UserInitialStateResponse = { "Success": UserInitialStateSuccessResult };
export type UserUpdatesSuccessResult = { timestamp: bigint, username?: string | undefined, display_name: OptionUpdateString, direct_chats: UserUpdatesDirectChatsUpdates, group_chats: UserUpdatesGroupChatsUpdates, favourite_chats: UserUpdatesFavouriteChatsUpdates, communities: UserUpdatesCommunitiesUpdates, avatar_id: OptionUpdateU128, blocked_users?: Array<UserId> | undefined, suspended?: boolean | undefined, pin_number_settings: OptionUpdatePinNumberSettings, 
/**
 * @default []
 */
achievements: Array<ChitEarned>, achievements_last_seen?: bigint | undefined, total_chit_earned: number, chit_balance: number, streak: number, streak_ends: bigint, next_daily_claim: bigint, is_unique_person?: boolean | undefined, wallet_config?: UserWalletConfig | undefined, 
/**
 * @default []
 */
referrals: Array<UserReferral>, message_activity_summary?: UserMessageActivitySummary | undefined, };
export type UserUpdatesResponse = { "Success": UserUpdatesSuccessResult } | "SuccessNoUpdates";
