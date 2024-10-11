// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityAddMembersToChannelFailedResult } from "./CommunityAddMembersToChannelFailedResult";
import type { CommunityAddMembersToChannelPartialSuccessResult } from "./CommunityAddMembersToChannelPartialSuccessResult";

export type CommunityAddMembersToChannelResponse = "Success" | { "PartialSuccess": CommunityAddMembersToChannelPartialSuccessResult } | { "Failed": CommunityAddMembersToChannelFailedResult } | "CommunityFrozen" | "CommunityPublic" | "UserSuspended" | "UserLapsed" | "UserNotInCommunity" | "UserNotInChannel" | "ChannelNotFound" | { "UserLimitReached": number } | "NotAuthorized" | { "InternalError": string };