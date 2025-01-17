<script lang="ts">
    import Alarm from "svelte-material-icons/Alarm.svelte";
    import AccountMultiple from "svelte-material-icons/AccountMultiple.svelte";
    import AccountPlusOutline from "svelte-material-icons/AccountPlusOutline.svelte";
    import Cancel from "svelte-material-icons/Cancel.svelte";
    import { _ } from "svelte-i18n";
    import Search from "../../Search.svelte";
    import Member from "./Member.svelte";
    import BlockedUser from "./BlockedUser.svelte";
    import MembersHeader from "./MembersHeader.svelte";
    import VirtualList from "../../VirtualList.svelte";
    import {
        type FullMember,
        type Member as MemberType,
        type OpenChat,
        type UserSummary,
        type UserLookup,
        type CommunitySummary,
        type MultiUserChat,
        type CommunityIdentifier,
        type MultiUserChatIdentifier,
        chatIdentifiersEqual,
        LARGE_GROUP_THRESHOLD,
        userStore,
        currentUser as user,
    } from "openchat-client";
    import { createEventDispatcher, getContext } from "svelte";
    import InvitedUser from "./InvitedUser.svelte";
    import { menuCloser } from "../../../actions/closeMenu";
    import UserGroups from "../communities/details/UserGroups.svelte";
    import Translatable from "../../Translatable.svelte";
    import { i18nKey } from "../../../i18n/i18n";
    import { trimLeadingAtSymbol } from "../../../utils/user";
    import User from "./User.svelte";

    const MAX_SEARCH_RESULTS = 255; // irritatingly this is a nat8 in the candid
    const client = getContext<OpenChat>("client");

    export let closeIcon: "close" | "back";
    export let collection: CommunitySummary | MultiUserChat;
    export let invited: Set<string>;
    export let members: MemberType[];
    export let blocked: Set<string>;
    export let lapsed: Set<string>;
    export let initialUsergroup: number | undefined = undefined;
    export let showHeader = true;

    let userGroups: UserGroups | undefined;

    $: userId = $user.userId;
    $: knownUsers = getKnownUsers($userStore, members);
    $: largeGroup = members.length > LARGE_GROUP_THRESHOLD;
    $: me = knownUsers.find((u) => u.userId === userId);
    $: fullMembers = knownUsers
        .filter((u) => matchesSearch(searchTermLower, u) && u.userId !== userId)
        .sort(compareMembers);
    $: blockedUsers = matchingUsers(searchTermLower, $userStore, blocked, true);
    $: lapsedMembers = matchingUsers(searchTermLower, $userStore, lapsed, true);
    $: invitedUsers = matchingUsers(searchTermLower, $userStore, invited, true);
    $: showBlocked = blockedUsers.length > 0;
    $: showInvited = invitedUsers.length > 0;
    $: showLapsed = lapsedMembers.length > 0;
    $: canInvite = client.canInviteUsers(collection.id);
    $: canPromoteMyselfToOwner = false;

    function matchingUsers(
        term: string,
        users: UserLookup,
        ids: Set<string>,
        includeMe = false,
    ): UserSummary[] {
        return Array.from(ids).reduce((matching, id) => {
            const user = users.get(id);
            if (user && matchesSearch(term, user) && (user.userId !== userId || includeMe)) {
                matching.push(user);
            }
            return matching;
        }, [] as UserSummary[]);
    }

    let searchTermEntered = "";
    let id = collection.id;
    let membersList: VirtualList;
    let memberView: "members" | "blocked" | "invited" | "lapsed" = "members";
    let selectedTab: "users" | "groups" = "users";

    $: searchTerm = trimLeadingAtSymbol(searchTermEntered);
    $: searchTermLower = searchTerm.toLowerCase();

    $: {
        if (!idsMatch(collection.id, id)) {
            id = collection.id;
            memberView = "members";
        }

        if (
            (memberView === "blocked" && blocked.size === 0) ||
            (memberView === "invited" && invited.size === 0)
        ) {
            memberView = "members";
        }

        if (initialUsergroup !== undefined) {
            selectedTab = "groups";
        }
    }

    const dispatch = createEventDispatcher();

    function idsMatch(
        previous: CommunityIdentifier | MultiUserChatIdentifier,
        next: CommunityIdentifier | MultiUserChatIdentifier,
    ): boolean {
        if (previous === next) return true;
        if (previous.kind === "community" && next.kind === "community")
            return previous.communityId === next.communityId;
        if (previous.kind !== "community" && next.kind !== "community")
            return chatIdentifiersEqual(previous, next);
        return false;
    }

    function close() {
        dispatch("close");
    }

    function showInviteUsers() {
        dispatch("showInviteUsers");
    }

    function matchesSearch(searchTermLower: string, user: UserSummary): boolean {
        if (searchTermLower === "") return true;
        if (user.username === undefined) return true;
        return (
            user.username.toLowerCase().includes(searchTermLower) ||
            (user.displayName !== undefined &&
                user.displayName.toLowerCase().includes(searchTermLower))
        );
    }

    function getKnownUsers(userStore: UserLookup, members: MemberType[]): FullMember[] {
        const users: FullMember[] = [];
        members.forEach((m) => {
            const user = userStore.get(m.userId);
            if (user) {
                users.push({
                    ...user,
                    ...m,
                    displayName: m.displayName ?? user.displayName,
                });
            }
        });
        return users;
    }

    function compareMembers(a: FullMember, b: FullMember): number {
        if (a.role !== b.role) {
            if (a.role === "owner") return -1;
            if (b.role === "owner") return 1;
            if (a.role === "admin") return -1;
            if (b.role === "admin") return 1;
            if (a.role === "moderator") return -1;
            if (b.role === "moderator") return 1;
        }
        return 0;
    }

    function setView(v: "members" | "blocked" | "invited" | "lapsed"): void {
        memberView = v;
    }

    function selectTab(tab: "users" | "groups") {
        selectedTab = tab;
        userGroups?.reset();
    }

    function onSearchEntered() {
        if (largeGroup && knownUsers.length < members.length && searchTerm.length > 0) {
            // let's kick off the universal usersearch to try to fill in any missing users
            // no need to process the results, they will automatically get added to the userstore and that
            // will cause the search results to be reactively recalculated
            client.searchUsers(searchTerm, MAX_SEARCH_RESULTS);
        }
        membersList.reset();
    }
</script>

{#if showHeader}
    <MembersHeader
        level={collection.level}
        {closeIcon}
        {canInvite}
        on:close={close}
        on:showInviteUsers={showInviteUsers} />
{/if}

{#if collection.level === "community"}
    <div class="tabs">
        <div
            tabindex="0"
            role="button"
            on:click={() => selectTab("users")}
            class:selected={selectedTab === "users"}
            class="tab">
            <Translatable resourceKey={i18nKey("communities.members")} />
        </div>
        <div
            tabindex="0"
            role="button"
            on:click={() => selectTab("groups")}
            class:selected={selectedTab === "groups"}
            class="tab">
            <Translatable resourceKey={i18nKey("communities.userGroups")} />
        </div>
    </div>
{/if}

{#if selectedTab === "users"}
    <div class="search">
        <Search
            on:searchEntered={onSearchEntered}
            searching={false}
            bind:searchTerm={searchTermEntered}
            placeholder={i18nKey("search")} />
    </div>

    {#if showBlocked || showInvited || showLapsed}
        <div class="tabs">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                tabindex="0"
                role="button"
                on:click={() => setView("members")}
                class:selected={memberView === "members"}
                class="tab sub">
                <AccountMultiple
                    size={"0.9em"}
                    viewBox={"0 -2 24 24"}
                    color={memberView === "members" ? "var(--txt)" : "var(--txt-light)"} />
                <Translatable resourceKey={i18nKey("members")} />
            </div>
            {#if showInvited}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    tabindex="0"
                    role="button"
                    on:click={() => setView("invited")}
                    class:selected={memberView === "invited"}
                    class="tab sub">
                    <AccountPlusOutline
                        size={"0.9em"}
                        viewBox={"0 -2 24 24"}
                        color={memberView === "invited" ? "var(--txt)" : "var(--txt-light)"} />
                    <Translatable resourceKey={i18nKey("invited")} />
                </div>
            {/if}

            {#if showBlocked}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    tabindex="0"
                    role="button"
                    on:click={() => setView("blocked")}
                    class:selected={memberView === "blocked"}
                    class="tab sub">
                    <Cancel
                        size={"0.9em"}
                        viewBox={"0 -2 24 24"}
                        color={memberView === "blocked" ? "var(--txt)" : "var(--txt-light)"} />
                    <Translatable resourceKey={i18nKey("blocked")} />
                </div>
            {/if}

            {#if showLapsed}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    tabindex="0"
                    role="button"
                    on:click={() => setView("lapsed")}
                    class:selected={memberView === "lapsed"}
                    class="tab sub">
                    <Alarm
                        size={"0.9em"}
                        viewBox={"0 -2 24 24"}
                        color={memberView === "lapsed" ? "var(--txt)" : "var(--txt-light)"} />
                    <Translatable resourceKey={i18nKey("access.lapsed.user")} />
                </div>
            {/if}
        </div>
    {/if}

    {#if memberView === "members"}
        {#if me !== undefined}
            <Member
                me
                member={me}
                canPromoteToOwner={canPromoteMyselfToOwner}
                canDemoteToAdmin={client.canDemote(collection.id, me.role, "admin")}
                canDemoteToModerator={client.canDemote(collection.id, me.role, "moderator")}
                canDemoteToMember={client.canDemote(collection.id, me.role, "member")}
                on:changeRole />
        {/if}
        <VirtualList
            bind:this={membersList}
            keyFn={(user) => user.userId}
            items={fullMembers}
            let:item>
            <Member
                me={false}
                member={item}
                canPromoteToOwner={client.canPromote(collection.id, item.role, "owner")}
                canPromoteToAdmin={client.canPromote(collection.id, item.role, "admin")}
                canDemoteToAdmin={client.canDemote(collection.id, item.role, "admin")}
                canPromoteToModerator={client.canPromote(collection.id, item.role, "moderator")}
                canDemoteToModerator={client.canDemote(collection.id, item.role, "moderator")}
                canDemoteToMember={client.canDemote(collection.id, item.role, "member")}
                canBlockUser={client.canBlockUsers(collection.id)}
                canRemoveMember={client.canRemoveMembers(collection.id)}
                {searchTerm}
                on:blockUser
                on:chatWith
                on:changeRole
                on:removeMember />
        </VirtualList>
    {:else if memberView === "blocked"}
        <div use:menuCloser class="user-list">
            {#each blockedUsers as user}
                <BlockedUser
                    me={user.userId === userId}
                    {user}
                    {searchTerm}
                    canUnblockUser={client.canUnblockUsers(collection.id)}
                    on:unblockUser />
            {/each}
        </div>
    {:else if memberView === "invited"}
        <div use:menuCloser class="user-list">
            {#each invitedUsers as user}
                <InvitedUser
                    me={user.userId === userId}
                    {user}
                    {searchTerm}
                    canUninviteUser={client.canInviteUsers(collection.id)}
                    on:cancelInvite />
            {/each}
        </div>
    {:else if memberView === "lapsed"}
        <div use:menuCloser class="user-list">
            {#each lapsedMembers as user}
                <User me={user.userId === userId} {user} {searchTerm} />
            {/each}
        </div>
    {/if}
{:else if collection.kind === "community"}
    <div class="user-groups">
        <UserGroups
            bind:this={userGroups}
            bind:openedGroupId={initialUsergroup}
            community={collection} />
    </div>
{/if}

<style lang="scss">
    :global(.member-section-selector .button-group.fill) {
        flex-wrap: nowrap;
    }
    :global(.member-section-selector button) {
        padding: $sp2 0 !important;
    }

    .member-section-selector {
        margin: 0 $sp4 $sp4 $sp4;
        @include mobile() {
            margin: 0 $sp3 $sp3 $sp3;
        }
    }

    .user-list {
        height: 100%;
        @include nice-scrollbar();
    }

    .user-groups {
        padding: 0 0 $sp4 0;
        flex: auto;
    }

    .tabs {
        display: flex;
        align-items: center;
        @include font(medium, normal, fs-90);
        color: var(--txt-light);
        gap: $sp5;
        border-bottom: 1px solid var(--bd);
        cursor: pointer;
        margin: 0 $sp4 $sp5 $sp4;

        @include mobile() {
            gap: $sp4;
        }

        .tab {
            padding-bottom: 10px;
            margin-bottom: -2px;
            border-bottom: 3px solid transparent;
            white-space: nowrap;
            &.selected {
                color: var(--txt);
                border-bottom: 3px solid var(--txt);

                &.sub {
                    border-bottom: 3px solid var(--accent);
                }
            }
        }
    }
</style>
