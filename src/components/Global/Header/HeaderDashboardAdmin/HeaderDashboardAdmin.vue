<template>
    <HeaderWrapper class="header-wrapper-admin">
        <div class="logo-wrapper">
            <UiIcon
                alt="Firm24"
                class="logo"
                icon="logo"
                type="custom"
            />
            <i
                v-if="$store.getters['userStore/isAdvisor']"
                class="premium"
            >
                Premium
            </i>
        </div>
        <div class="header-buttons">
            <router-link
                v-for="item in items"
                :key="item.name"
                :to="item.to"
            >
                {{ item.name }}
            </router-link>
        </div>
        <ProfileDropdown class="profile" />
    </HeaderWrapper>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';
    import ProfileDropdown from '@/components/Global/Header/ProfileDropdown/ProfileDropdown.vue';

    @Component({
        components: {
            ProfileDropdown,
            HeaderWrapper
        }
    })
    export default class HeaderDashboardAdmin extends Vue {
        @Prop() items!: Array<any>;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .header-wrapper-admin {
        justify-content: center;
        height: 80px;
    }

    .profile {
        margin-left: auto;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;

        @include breakpoint-up(sm) {
            margin-right: 3 * $margin-default;
        }

        .logo {
            width: 60px;
            height: auto;

            @include breakpoint-up(sm) {
                width: 80px;
            }
        }

        .premium {
            font-size: 12px;
            margin-left: $margin-default;
        }
    }

    .header-buttons {
        display: flex;
        margin-left: 3 * $margin-default;

        a {
            margin-right: 3 * $margin-default;
            color: $color-gray-00;
            text-transform: capitalize;

            &.router-link-exact-active {
                color: $color-blue-gray-02;
            }
        }
    }
</style>
