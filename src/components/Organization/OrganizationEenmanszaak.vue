<template>
    <div>
        <PageSection>
            <div slot="header">
                {{ $t('ORGANIZATION.ORGANIZATION_DETAILS') }}
            </div>
            <div slot="content">
                <OrganizationDetailsInfo :organization="organization" />
            </div>
        </PageSection>
        <PageSection>
            <div slot="header">
                {{ $t('ORGANIZATION.EVENTS') }}
            </div>
            <div slot="content">
                <OrganizationDetailsEvents :events="organization.eventsData.events" />
            </div>
        </PageSection>
        <PageSection>
            <div slot="header">
                {{ $t('SIDEBAR_MENU.DOCUMENTS') }}
            </div>
            <div slot="content">
                <OrganizationDocumentsTable
                    :documents="organizationDocuments"
                    :is-loading="isLoading"
                />
            </div>
        </PageSection>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import OrganizationDetailsEvents from '@/components/Organization/components/OrganizationDetailsEvents.vue';
    import apiService from '@/services/api.service';
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';
    import OrganizationDocuments from '@/components/Organization/views/OrganizationDocuments/OrganizationDocuments.vue';
    import OrganizationDetailsInfo from '@/components/Organization/views/OrganizationDetails/components/OrganizationDetailsInfo.vue';
    import OrganizationDocumentsTable from '@/components/Organization/components/OrganizationDocumentsTable.vue';
    import { EventsTypes } from '@/types/events.types';

    @Component({
        components: {
            OrganizationDocumentsTable,
            OrganizationDetailsInfo,
            OrganizationDocuments,
            PageSection,
            OrganizationDetailsEvents
        }
    })
    export default class OrganizationEenmanszaak extends Vue {
        @Prop() organization!: OrganizationService;

        organizationEvents: Array<EventsTypes> = [];
        organizationDocuments = [];
        isLoading = false;

        async created() {
            this.getDocuments();
        }

        async getDocuments() {
            try {
                this.isLoading = true;
                const { data, status } = await apiService.get('documents', [{
                    key: 'organization',
                    value: this.organization.id
                }]);
                if (status === 200) {
                    this.organizationDocuments = data;
                }
            } catch (e) {
                console.log(e);
            } finally {
                this.isLoading = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .section {
        &:first-of-type {
            padding-top: 0;
        }
    }
</style>
