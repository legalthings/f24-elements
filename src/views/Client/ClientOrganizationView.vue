<template>
    <PageFrame
        :is-valid="isValid"
        :is-loading="isLoading"
        :organization="organization"
        :menu-items="menuItems"
        @reload="reload"
    >
        <template #notifications>
            <ImportedOrganizationsNotification
                v-if="!isLoading && shouldHaveAlert"
                :organization="organization"
            />

            <NotaryOrganizationsNotification v-if="!isLoading && shouldNotaryGetAlert" />
        </template>
    </PageFrame>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import PageFrame from '@/components/Global/Page/PageFrame/PageFrame.vue';
    import apiService from '@/services/api.service';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import { NavigationItem } from '@/types/navigation.types';
    import i18n from '@/dependencies/i18n';
    import ImportedOrganizationsNotification from '@/components/Organization/components/ImportedOrganizationsNotification/ImportedOrganizationsNotification.vue';
    import NotaryOrganizationsNotification from '@/components/Organization/components/NotaryOrganizationsNotification/NotaryOrganizationsNotification.vue';

    @Component({
        components: { NotaryOrganizationsNotification, ImportedOrganizationsNotification, PageFrame }
    })
    export default class ClientOrganizationView extends Vue {
        organization: any = {};
        isLoading = true;
        isValid = false;

        hasNoOrganization() {
            this.$router.push({ name: 'dashboard' });
            this.$buefy.toast.open({
                message: 'Organization was not founded',
                type: 'is-danger'
            });
        }

        async created() {
            if (this.$store.getters['userStore/isClient']) {
                await this.setSession();
            }
            this.fetchOrganizationData();
        }

        async setSession() {
            return apiService.post('sessions/' + this.$store.state.userStore.session.id,
                { organization: this.$route.params.organizationId }
            );
        }

        reload(timeout: number) {
            setTimeout(() => {
                this.fetchOrganizationData();
                console.log('Organization view was reloaded');
            }, timeout);
        }

        async fetchOrganizationData() {
            this.isLoading = true;
            this.isValid = false;
            const organizationId = this.$route.params.organizationId;

            const configSummary = [{
                key: 'display',
                value: 'summary'
            }];

            const eventsConfig = [
                {
                    key: 'organization',
                    value: organizationId
                },
                {
                    key: 'limit',
                    value: '999'
                }
            ];

            try {
                const { data, status } = await apiService.get('organizations/' + organizationId);
                this.isValid = status === 200;
                if (this.isValid) {
                    const sharesData = await apiService.get('shares/' + organizationId);
                    const sharesSummary = await apiService.get('shares/' + organizationId, configSummary);
                    const eventsData = await apiService.get('events', eventsConfig);
                    this.organization = new OrganizationService(data, sharesSummary.data, sharesData.data, eventsData.data);
                } else {
                    this.hasNoOrganization();
                }
            } catch (e) {
                console.warn(e);
                this.hasNoOrganization();
            } finally {
                this.isLoading = false;
            }
        }

        get navigationItems(): Array<NavigationItem> {
            return [
                {
                    label: i18n.t('SIDEBAR_MENU.OVERVIEW'),
                    url: { path: `/organization/${this.organization.id}/` },
                    isRouter: true
                },
                {
                    label: i18n.t('SIDEBAR_MENU.COMPANY_DETAILS'),
                    url: { path: `/organization/${this.organization.id}/organization-details/` },
                    isRouter: true
                },
                {
                    label: i18n.t('SIDEBAR_MENU.SHAREHOLDERS'),
                    url: { name: 'organization-shareholders', params: { organizationId: this.organization.id } },
                    isRouter: true
                },
                {
                    label: i18n.t('SIDEBAR_MENU.DIRECTORS'),
                    url: { path: `/organization/${this.organization.id}/organization-directors/` },
                    isRouter: true
                },
                {
                    label: i18n.t('SIDEBAR_MENU.EVENTS'),
                    url: { path: `/organization/${this.organization.id}/organization-events/` },
                    isRouter: true
                },
                {
                    label: i18n.t('SIDEBAR_MENU.DOCUMENTS'),
                    url: { path: `/organization/${this.organization.id}/organization-documents/` },
                    isRouter: true
                },
                {
                    label: i18n.t('SIDEBAR_MENU.CONTRACT'),
                    url: { path: `/organization/${this.organization.id}/organization-contracts/` },
                    isRouter: true
                }
            ];
        }

        get navigationItemsEenmanszaak(): Array<NavigationItem> {
            return [
                {
                    label: i18n.t('SIDEBAR_MENU.OVERVIEW'),
                    url: { path: `/organization/${this.organization.id}/` },
                    isRouter: true
                },
                {
                    label: i18n.t('SIDEBAR_MENU.EVENTS'),
                    url: { path: `/organization/${this.organization.id}/organization-events/` },
                    isRouter: true
                },
                {
                    label: i18n.t('SIDEBAR_MENU.DOCUMENTS'),
                    url: { path: `/organization/${this.organization.id}/organization-documents/` },
                    isRouter: true
                }
            ];
        }

        get navigation() {
            return this.organization.data?.legacy_id ? this.getExtraMenuItems(this.navigationItems) : this.navigationItems;
        }

        get navigationEenmanszaak() {
            return this.organization?.data.legacy_id ? this.getExtraMenuItems(this.navigationItemsEenmanszaak) : this.navigationItemsEenmanszaak;
        }

        getExtraMenuItems(menu: Array<NavigationItem>) {
            const extraMenu = [
                {
                    label: i18n.t('SIDEBAR_MENU.BOOKKEEPING'),
                    url: { path: `/organization/${this.organization.id}/organization-bookkeeping/` },
                    isRouter: true
                }
            ];

            // TODO Please remove this once we have figured the import/new organizations
            const states = [
                'validation_requested',
                'unconfirmed'
            ];

            if ((this.$store.getters['userStore/isNotary'] || this.$store.getters['userStore/isSupport']) && states.includes(this.organization.data.state)) {
                menu.unshift(
                    {
                        label: 'Notariscontrole',
                        url: { path: `/organization/${this.organization.id}/organization-notary/` },
                        isRouter: true
                    }
                );
            }

            return menu.concat(extraMenu);
        }

        get menuItems() {
            return this.organization.corporation_type === 'emz' ? this.navigationEenmanszaak : this.navigation;
        }

        get shouldHaveAlert() {
            const states = [
                'validation_submitted',
                'validation_requested',
                'consider'
            ];
            return states.includes(this.organization.data.state) && !this.isNotaryOrSupport;
        }

        get isNotaryOrSupport() {
            return this.$store.getters['userStore/isNotary'] || this.$store.getters['userStore/isSupport'];
        }

        get shouldNotaryGetAlert() {
            const states = [
                'validation_requested',
                'unconfirmed'
            ];
            return states.includes(this.organization.data.state) && this.isNotaryOrSupport && this.$route.name !== 'organization-notary';
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
