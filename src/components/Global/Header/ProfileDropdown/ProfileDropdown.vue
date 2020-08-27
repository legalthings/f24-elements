<template>
    <b-dropdown
        aria-role="list"
        class="profile-header"
    >
        <div
            slot="trigger"
            class="profile-dropdown-trigger"
        >
            <ProfileAvatar
                v-if="user"
                :avatar="user.image"
                class="avatar"
                :name="userName"
            />

            <UiIcon
                icon="chevron-down-in-circle"
                color="inactive"
            />
        </div>

        <ul class="menu-items">
            <li>
                <router-link to="/user-details">
                    <UiIcon
                        icon="settings"
                        color="blue"
                        size="16"
                    />
                    {{ $t('GLOBAL.ACCOUNT_SETTINGS') }}
                </router-link>
            </li>
            <li
                @click="logout"
            >
                <UiIcon
                    icon="logout"
                    color="blue"
                    size="16"
                />
                {{ $t('GLOBAL.LOGOUT') }}
            </li>
        </ul>
    </b-dropdown>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { namespace } from 'vuex-class';
    import ProfileAvatar from '@/components/Global/ProfileAvatar/ProfileAvatar.vue';
    import authService from '@/services/auth.service';

    const userStore = namespace('userStore');

    @Component({
        components: {
            ProfileAvatar
        }
    })
    export default class ProfileDropdown extends Vue {
        @userStore.Getter('user') user!: any;

        get userName() {
            return `${this.user.first_name} ${this.user.last_name}`;
        }

        async logout() {
            await authService.logout(true);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .profile-header {
        z-index: 10;
        display: flex;
        cursor: pointer;
        max-width: 300px;
        justify-content: flex-end;

        @include breakpoint-down(md) {
            position: absolute;
            right: 10px;
        }

        &.is-active {
            @include breakpoint-up(md) {
                &:before {
                    content: '';
                    z-index: -1;
                    left: - 2 * $margin-default;
                    top: - $margin-default;
                    width: calc(100% + #{4 * $margin-default});
                    height: calc(100% + 110px);
                    position: absolute;
                    padding: 2 * $margin-default;
                    background: $color-gray-00;
                    border-radius: $border-radius;
                    @include box-shadow();
                }
            }
        }
    }

    .profile-dropdown-trigger {
        display: flex;
        align-items: center;
        color: $color-blue-gray-02;

        .avatar {
            flex: 1;
            margin-right: $margin-default;
        }

        .ui-icon {
            transition: transform .3s ease-in-out;

            .is-active & {
                transform: rotate(-180deg);
            }

            @include breakpoint-down(md) {
                display: none;
            }
        }
    }

    /deep/ .dropdown-content {
        border: none;
        background: none;
        box-shadow: none;
    }

    .menu-items {
        margin-top: $margin-default;

        li, a {
            color: $color-blue;
            display: flex;
            align-items: center;

            &:hover {
                color: $color-blue-darker;

                .ui-icon {
                    fill: $color-blue-darker;
                }
            }
        }

        li {
            &:not(:last-child) {
                margin-bottom: $margin-default;
            }

            cursor: pointer;
        }

        .ui-icon {
            fill: $color-blue;
            margin-right: $margin-default;
        }

        @include breakpoint-down(md) {
            background: $color-gray-00;
            padding: 2 * $margin-default;
            border-radius: $border-radius;
        }
    }

</style>
