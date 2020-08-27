<template>
    <PageBlock
        :back-button="{label: $t('NAVIGATION.OVERVIEW'), name:'organization', params: {organizationId : $route.params.organizationId}}"
    >
        <template #content>
            <PageSection>
                <div slot="header">
                    {{ shareholder.data.name || `${shareholder.data.first_name} ${shareholder.data.last_name}` }}
                </div>
                <div slot="content">
                    <div class="box">
                        <h3 class="box-title">
                            {{ $t('SHAREHOLDERS_DETAILS.SHAREHOLDER_INFORMATION') }}
                        </h3>
                        <PageSectionItems
                            :item="{label:$t('SHAREHOLDERS_DETAILS.SHAREHOLDER_TYPE'), value: $t('SHAREHOLDERS_DETAILS.' + shareholder.type.toUpperCase())}"
                        />
                        <PageSectionItems
                            :item="{label: $t('SHAREHOLDERS_DETAILS.OWNERSHIP_PERCENTAGE')}"
                        >
                            <div slot="value">
                                <ShareholderDetailChart
                                    :shareholder="shareholder"
                                    :total-shares="shareholder.totalShares"
                                    :total-available-shares="organization.getAllAvailableShareTypes().all_shares.amount"
                                />
                            </div>
                        </PageSectionItems>

                        <PageSectionItems
                            :item="{label: $t('SHAREHOLDERS_DETAILS.TYPE_OF_SHARES')}"
                        >
                            <div slot="value">
                                <ShareholderDetailShares :shareholder="shareholder" />
                            </div>
                        </PageSectionItems>

                        <PageSectionItems
                            :item="{label: $t('SHAREHOLDERS_DETAILS.DIRECTOR'), value: $t('GLOBAL.' + shareholder.boardMember.toString().toUpperCase())}"
                        />

                        <h3 class="box-title">
                            {{ $t('SHAREHOLDERS_DETAILS.OTHER_INFORMATION') }}
                        </h3>

                        <template v-if="shareholder.type === 'user'">
                            <PageSectionItems
                                :item="{label: $t('USER.FIRST_NAME'), value: shareholder.data.first_name}"
                            />
                            <PageSectionItems
                                :item="{label: $t('USER.LAST_NAME'), value: shareholder.data.last_name}"
                            />
                        </template>
                        <template v-else>
                            <PageSectionItems
                                :item="{label: 'Name', value: shareholder.data.name}"
                            />
                            <PageSectionItems
                                :item="{label: $t('ORGANIZATION.INCORPORATION_DATE'), value: $f24.formatDate(shareholder.data.created)}"
                            />
                        </template>

                        <PageSectionItems
                            v-if="shareholder.data.email"
                            :item="{label: $t('USER.EMAIL'), value: shareholder.data.email}"
                        />

                        <PageSectionItems
                            v-for="(item, key, index) in shareholder.data.address"
                            :key="index"
                            :item="{label: $t('ADDRESS.' + key.toUpperCase()), value: item}"
                        />
                    </div>
                </div>
            </PageSection>

            <PageSection v-if="organizationEvents.length > 0">
                <div slot="header">
                    {{ $t('ORGANIZATION.EVENTS') }}
                </div>
                <div
                    slot="content"
                >
                    <OrganizationDetailsEvents
                        :organization="organization"
                        :has-sequence="true"
                        :has-shares="true"
                        :events="organizationEvents"
                    />
                </div>
            </PageSection>
        </template>
    </PageBlock>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import ShareholderDetailChart
        from '@/components/Organization/views/ShareholderDetail/components/ShareholderDetailChart.vue';
    import ShareholderDetailShares
        from '@/components/Organization/views/ShareholderDetail/components/ShareholderDetailShares.vue';
    import { ShareholderTypes } from '@/types/organisation.types';
    import { EventsTypes } from '@/types/events.types';
    import OrganizationDetailsEvents from '@/components/Organization/components/OrganizationDetailsEvents.vue';

    @Component({
        components: {
            OrganizationDetailsEvents,
            ShareholderDetailShares,
            ShareholderDetailChart,
            PageSectionItems,
            PageSection,
            PageBlock
        }
    })
    export default class ShareholderDetail extends Vue {
        @Prop() organization!: OrganizationService;

        organizationEvents: Array<EventsTypes> = [];

        async created() {
            this.organizationEvents = this.organization.eventsData.getShareEventsById(this.$route.params.shareholderId);
        }

        get shareholder(): ShareholderTypes {
            return this.organization.getShareholderById(this.$route.params.shareholderId);
        }

        get events() {
            return this.organization.getSharesEventsById(this.$route.params.shareholderId);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
