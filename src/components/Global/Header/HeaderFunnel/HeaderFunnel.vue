<template>
    <HeaderWrapper>
        <div class="logo-wrapper">
            <UiIcon
                alt="Firm24"
                class="logo"
                icon="logo"
                type="custom"
            />
        </div>
        <div class="content-wrapper">
            <slot />
        </div>
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
    export default class FunnelHeader extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .logo-wrapper {
        display: flex;

        .logo {
            width: 120px;
            height: auto;
        }

        @include breakpoint-down(sm) {
            display: none;
        }
    }

    .content-wrapper {
        display: flex;
        flex: 4;
        justify-content: center;

        &.left {
            justify-content: flex-start;
        }
    }
</style>
