<template>
    <div class="shareholders-details">
        <PageBlock
            :back-button="{name: 'organization', label: $t('NAVIGATION.OVERVIEW'), params: {organizationId: $route.params.organizationId}}"
        >
            <template #content>
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
                        {{ $t('ORGANIZATION.SHARE_EVENTS') }}
                    </div>
                    <b-button
                        slot="options"
                        type="is-primary is-padding-small has-icon"
                        href="https://www.firm24.com/wijzigen-onderneming/"
                        tag="a"
                        target="_blank"
                        rounded
                    >
                        <i class="fas fa-people-arrows" />
                        {{ $t('ORGANIZATION.UPDATE_SHAREHOLDERS') }}
                    </b-button>
                    <div slot="content">
                        <OrganizationDetailsEvents
                            v-if="organization.eventsData.sharesEvents.length > 0"
                            :organization="organization"
                            :events="organization.eventsData.sharesEvents"
                            :has-shares="true"
                        />
                        <div
                            v-else
                            class="box"
                        >
                            {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
                        </div>
                    </div>
                </PageSection>

                <PageSection>
                    <div slot="header">
                        {{ $t('ORGANIZATION.ORGANIZATION_EVENTS') }}
                    </div>
                    <UiDropdownRequestChange slot="options" />
                    <div slot="content">
                        <OrganizationDetailsEvents
                            :organization="organization"
                            :events="organization.eventsData.organizationEvents"
                        />
                    </div>
                </PageSection>

                <PageSection>
                    <div slot="header">
                        {{ $t('ORGANIZATION.ISSUES_CAPITAL') }}
                    </div>

                    <div slot="content">
                        <OrganizationDetailsCapital
                            v-if="capitalOverview.length > 0"
                            :shares-events="capitalOverview"
                            :organization="organization"
                        />
                        <div
                            v-else
                            class="box"
                        >
                            {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
                        </div>
                    </div>
                </PageSection>

                <PageSection>
                    <div slot="header">
                        {{ $t('ORGANIZATION.PAID_UP_CAPITAL') }}
                    </div>

                    <div slot="content">
                        <OrganizationDetailsCapitalPaidUp
                            v-if="paidUpCapitalOverview.length >0"
                            :shares-events="paidUpCapitalOverview"
                            :organization="organization"
                        />
                        <div
                            v-else
                            class="box"
                        >
                            {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
                        </div>
                    </div>
                </PageSection>

                <PageSection>
                    <div slot="header">
                        {{ $t('ORGANIZATION.SHAREHOLDERS') }}
                    </div>
                    <div slot="content">
                        <OrganizationDetailsShareholders :organization="organization" />
                    </div>
                </PageSection>
            </template>
        </PageBlock>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';
    import UiCollapsible from '@/components/Global/UiCollapsible/UiCollapsible.vue';
    import OrganizationDetailsEvents from '@/components/Organization/components/OrganizationDetailsEvents.vue';
    import OrganizationDetailsShareholders
        from '@/components/Organization/views/OrganizationDetails/components/OrganizationDetailsShareholders.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import OrganizationDetailsInfo
        from '@/components/Organization/views/OrganizationDetails/components/OrganizationDetailsInfo.vue';
    import OrganizationDetailsCapital
        from '@/components/Organization/views/OrganizationDetails/components/OrganizationDetailsCapital.vue';
    import OrganizationDetailsCapitalPaidUp
        from '@/components/Organization/views/OrganizationDetails/components/OrganizationDetailsCapitalPaidUp.vue';
    import UiDropdownRequestChange from '@/components/Global/UiDropdownRequestChange/UiDropdownRequestChange.vue';

    @Component({
        components: {
            UiDropdownRequestChange,
            OrganizationDetailsCapitalPaidUp,
            OrganizationDetailsCapital,
            OrganizationDetailsInfo,
            OrganizationDetailsShareholders,
            OrganizationDetailsEvents,
            UiCollapsible,
            PageSection,
            PageBlock
        }
    })

    export default class OrganizationDetails extends Vue {
        @Prop() organization!: OrganizationService;

        get capitalOverview() {
            return this.organization.sharesEvents.filter((s: any) => s.type === 'issue');
        }

        get paidUpCapitalOverview() {
            return this.organization.sharesEvents.filter((s: any) => s.type === 'fully_paid');
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
