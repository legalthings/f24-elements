<template>
    <HeaderWrapper class="header-wrapper">
        <div class="logo-wrapper">
            <UiIcon
                alt="Firm24"
                class="logo"
                icon="logo"
                type="custom"
            />
        </div>
        <slot />
        <b-button
            v-if="!$store.getters['userStore/user']"
            type="is-primary"
            tag="router-link"
            :to="{name: 'login'}"
            rounded
        >
            <UiIcon
                icon="account"
                type="custom"
                color="white"
                size="22"
            />
            {{ $t('USER.SIGN_IN') }}
        </b-button>
        <ProfileDropdown
            v-else
            class="profile"
        />
    </HeaderWrapper>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';
    import ProfileDropdown from '@/components/Global/Header/ProfileDropdown/ProfileDropdown.vue';

    @Component({
        components: {
            ProfileDropdown,
            HeaderWrapper
        }
    })
    export default class HeaderDashboard extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .header-wrapper {
        justify-content: center;
    }

    .button {
        margin-left: auto;
    }

    .profile {
        position: relative;
        margin-left: auto;
    }

    .logo-wrapper {
        display: flex;
        @include breakpoint-up(md) {
            margin-right: 3 * $margin-default;
        }

        .logo {
            width: 100px;
            height: auto;

            @include breakpoint-up(md) {
                width: 120px;
            }
        }
    }
</style>
