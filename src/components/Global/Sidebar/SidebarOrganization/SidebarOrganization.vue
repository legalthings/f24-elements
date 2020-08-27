<template>
    <SidebarWrapper>
        <div class="sidebar-section">
            <UiIcon
                class="close-menu"
                color="white"
                icon="cross"
                @click="close"
            />
            <IncorporationDetails
                v-if="organization"
                :organization="organization"
            />
        </div>
        <SidebarNavigationItems :menu-items="menuItems" />
        <UiIcon
            class="logo"
            icon="logo"
            type="custom"
            @click="$router.push({name:'dashboard'})"
        />
    </SidebarWrapper>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import IncorporationDetails from '@/components/Global/IncorporationDetails/IncorporationDetails.vue';
    import SidebarWrapper from '@/components/Global/Sidebar/SidebarWrapper/SidebarWrapper.vue';
    import SidebarNavigationItems from '@/components/Global/Sidebar/SidebarNavigationItems/SidebarNavigationItems.vue';
    import { OrganizationShareTypes } from '@/types/organisation.types';
    import { NavigationItem } from '@/types/navigation.types';

    @Component({
        components: {
            IncorporationDetails,
            SidebarWrapper,
            SidebarNavigationItems
        }
    })
    export default class SidebarOrganization extends Vue {
        @Prop() organization!: OrganizationShareTypes;
        @Prop() menuItems!: Array<NavigationItem>;

        close() {
            this.$emit('closeMobileMenu');
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .sidebar-section {
        padding-top: 3 * $margin-default;
    }

    .close-menu {
        position: absolute;
        left: 5px;
        top: 0;
        margin: $margin-default;
        padding: $margin-default;

        @include breakpoint-up(md) {
            display: none;
        }
    }

    .logo {
        cursor: pointer;
        position: fixed;
        width: 100%;
        max-width: 120px;
        bottom: 20px;
        right: 20px;

        @include breakpoint-up(md) {
            right: auto;
            left: 3 * $margin-default;
        }
    }
</style>
