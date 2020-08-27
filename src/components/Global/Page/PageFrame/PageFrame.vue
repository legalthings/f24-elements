<template>
    <div>
        <b-loading
            :is-full-page="true"
            :active.sync="isLoading"
        />
        <div
            v-if="!isLoading && isValid"
            class="page-frame"
        >
            <SidebarOrganization
                :menu-items="menuItems"
                :class="{'is-open':isMobileMenuOpen}"
                :organization="organization.data"
                @closeMobileMenu="toggleMobileMenu"
            />
            <div class="page-frame-content">
                <HeaderOrganization
                    :organization="organization.data"
                    @openMobileMenu="toggleMobileMenu"
                />
                <div class="container">
                    <slot name="notifications" />
                    <router-view
                        :organization="organization"
                        @reload="$emit('reload')"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import SidebarOrganization from '@/components/Global/Sidebar/SidebarOrganization/SidebarOrganization.vue';
    import HeaderOrganization from '@/components/Global/Header/HeaderOrganization/HeaderOrganization.vue';
    import { NavigationItem } from '@/types/navigation.types';

    @Component({
        components: { HeaderOrganization, SidebarOrganization }
    })
    export default class PageFrame extends Vue {
        isMobileMenuOpen = false;

        @Prop() organization!: any;
        @Prop({ default: true }) isLoading!: boolean;
        @Prop({ default: false }) isValid!: boolean;
        @Prop() menuItems!: Array<NavigationItem>;

        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }

        @Watch('$route')
        onRouteChange() {
            if (this.$vmq.xs || this.$vmq.sm || this.$vmq.md) {
                this.isMobileMenuOpen = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .page-frame {
        display: flex;
        height: 100%;
    }

    .container {
        flex: 1;
    }

    .page-frame-content {
        flex: 1;
    }
</style>
