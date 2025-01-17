// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AccessGate } from "./AccessGate";
import type { AccessGateConfig } from "./AccessGateConfig";
import type { ChatMetrics } from "./ChatMetrics";
import type { EventIndex } from "./EventIndex";
import type { EventWrapperMessage } from "./EventWrapperMessage";
import type { GroupMembership } from "./GroupMembership";
import type { GroupPermissions } from "./GroupPermissions";
import type { GroupSubtype } from "./GroupSubtype";
import type { MessageIndex } from "./MessageIndex";
import type { VideoCall } from "./VideoCall";

export type CommunityCanisterChannelSummary = { channel_id: bigint, last_updated: bigint, name: string, description: string, subtype?: GroupSubtype | undefined, avatar_id?: bigint | undefined, is_public: boolean, history_visible_to_new_joiners: boolean, messages_visible_to_non_members: boolean, min_visible_event_index: EventIndex, min_visible_message_index: MessageIndex, latest_message?: EventWrapperMessage | undefined, latest_message_sender_display_name?: string | undefined, latest_event_index: EventIndex, latest_message_index?: MessageIndex | undefined, member_count: number, permissions_v2: GroupPermissions, metrics: ChatMetrics, date_last_pinned?: bigint | undefined, events_ttl?: bigint | undefined, events_ttl_last_updated: bigint, gate?: AccessGate | undefined, gate_config?: AccessGateConfig | undefined, membership?: GroupMembership | undefined, video_call_in_progress?: VideoCall | undefined, is_invited?: boolean | undefined, external_url?: string | undefined, };
