<template>
    <div class="user-account container">
        <PageBlock :back-button="{name: 'dashboard', label: $t('NAVIGATION.DASHBOARD')}">
            <template #content>
                <b-dropdown
                    v-if="$vmq.xs || $vmq.sm || $vmq.md"
                    class="mobile-menu"
                    aria-role="list"
                >
                    <span
                        slot="trigger"
                        class="trigger"
                    >
                        <span>
                            <UiIcon
                                :icon="current.icon"
                                color="gray"
                                type="custom"
                            />
                            {{ $t(current.name) }}
                        </span>
                        <UiIcon icon="chevron-down" />
                    </span>

                    <b-dropdown-item
                        v-for="item in config"
                        :key="item.slug"
                        has-link
                        aria-role="listitem"
                    >
                        <router-link :to="{name: 'user-details', params: {slug: item.slug}}">
                            <UiIcon
                                type="custom"
                                :icon="item.icon"
                            />
                            {{ $t(item.name) }}
                        </router-link>
                    </b-dropdown-item>
                </b-dropdown>

                <div class="box">
                    <UiGridA>
                        <template
                            v-if="!$vmq.xs && !$vmq.sm && !$vmq.md"
                            #menu
                        >
                            <GridMenu
                                :menu="config"
                                :active="current.slug"
                                parent-route-name="user-details"
                            />
                        </template>
                        <template
                            v-if="!isLoading"
                            #content
                        >
                            <h1 class="page-block-content-title mg-bottom-40">
                                {{ $t(current.name) }}
                            </h1>
                            <div class="page-block-content">
                                <component
                                    :is="current.component"
                                    :organizations="organizations"
                                />
                            </div>
                        </template>
                    </UiGridA>
                </div>
            </template>
        </PageBlock>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import GridMenu from '@/components/Global/Grid/GridMenu/GridMenu.vue';
    import MyAccount from '@/components/UserAccount/views/AccountBlock.vue';
    import HeaderDashboard from '@/components/Global/Header/HeaderDashboard/HeaderDashboard.vue';
    import UiGridA from '@/components/Global/Grid/UiGridA/UiGridA.vue';
    import apiService from '@/services/api.service';
    import { OrganizationShareTypes } from '@/types/organisation.types';

    @Component({
        components: { UiGridA, HeaderDashboard, MyAccount, GridMenu, PageBlock }
    })
    export default class UserAccount extends Vue {
        organizations: Array<OrganizationShareTypes> = [];
        isLoading = false;

        config = [
            {
                name: 'USER_ACCOUNT.MY_ACCOUNT',
                slug: 'my-account',
                icon: 'account',
                component: () => import(/* webpackChunkName: "account-block" */ './views/AccountBlock.vue')
            },
            {
                name: 'USER_ACCOUNT.SECURITY',
                slug: 'security',
                icon: 'lock',
                component: () => import(/* webpackChunkName: "security-block" */ './views/SecurityBlock.vue')
            },
            {
                name: 'USER_ACCOUNT.INVOICES',
                slug: 'invoices',
                icon: 'doc',
                component: () => import(/* webpackChunkName: "invoices-block" */ './views/InvoicesBlock.vue')
            },
            {
                name: 'USER_ACCOUNT.ORGANIZATIONAL_RIGHTS',
                slug: 'rights',
                icon: 'user-rights',
                component: () => import(/* webpackChunkName: "organization-rights" */ './views/OrganizationsRights.vue')
            }
        ];

        async created() {
            this.organizations = await this.getOrganizations();
        }

        async getOrganizations() {
            this.isLoading = true;
            try {
                const { data, status } = await apiService.get('organizations');
                if (status === 200) {
                    return data;
                }
            } catch (e) {
                console.log(e);
            } finally {
                this.isLoading = false;
            }
        }

        get current() {
            if (!this.config.find(e => e.slug === this.$route.params.slug) && this.$route.name === 'user-details') {
                this.$router.replace({ name: 'user-details', params: { slug: this.config[0].slug } });
                return this.config[0];
            } else {
                return this.config.find(e => e.slug === this.$route.params.slug);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    /deep/ .page-block {
        @include breakpoint-up(md) {
            margin-top: 4 * $margin-default;
        }
    }

    /deep/ .dropdown.mobile-menu {
        width: 100%;

        .dropdown-trigger {
            width: 100%;
            border: 1px solid rgba($color-blue-gray-02, .5);
            background: $color-gray-00;
            border-radius: $border-radius / 4;
            margin-bottom: $margin-default;
            padding: $margin-default 2 * $margin-default;

            .trigger {
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    display: flex;
                    align-items: center;
                }
            }
        }

        .dropdown-content a {
            display: flex;
            align-items: center;
            padding: 2 * $margin-default;
            color: $color-blue;
        }

        .ui-icon svg {
            width: 22px;
            height: 22px;
            margin-right: $margin-default;
        }
    }
</style>
