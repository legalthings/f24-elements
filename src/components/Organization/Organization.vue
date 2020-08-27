<template>
    <PageBlock
        :back-button="{name: 'dashboard', label: $t('NAVIGATION.DASHBOARD')}"
    >
        <template #content>
            <div v-if="organization.type !== 'emz'">
                <section class="section">
                    <p class="shareholder-register">
                        {{ $t('ORGANIZATION.DIGITAL_SHAREHOLDER_REGISTER') }} - {{ organization.data.name }}
                        <UiIcon
                            icon="more-info"
                            @click="openInfoShareholderRegister"
                        />
                    </p>
                    <h2 class="mg-top-40 mg-bottom-20">
                        {{ $t('ORGANIZATION.SHARES_CAPITAL') }}
                    </h2>
                    <UiSummaryBlocks :summary-data="summaryBlocksData" />
                </section>

                <OrganizationShareholders
                    :organization="organization"
                />
                <section class="section">
                    <div class="header">
                        <h2>
                            {{ $t('ORGANIZATION.EVENTS') }}
                        </h2>
                        <UiDropdownRequestChange />
                    </div>

                    <OrganizationDetailsEvents
                        :organization="organization"
                        :events="organization.eventsData.events"
                    />
                </section>
            </div>
            <OrganizationEenmanszaak
                v-else
                :organization="organization"
            />
        </template>
    </PageBlock>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiTable from '@/components/Global/UiTable/UiTable.vue';

    import UiSummaryBlocks from '@/components/Organization/components/UiSummaryBlocks.vue';
    import OrganizationShareholders from '@/components/Organization/components/OrganizationShareholders.vue';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import pageMetadataService from '@/services/page-metadata.service';
    import i18n from '@/dependencies/i18n';
    import OrganizationEenmanszaak from '@/components/Organization/OrganizationEenmanszaak.vue';
    import OrganizationDetailsEvents from '@/components/Organization/components/OrganizationDetailsEvents.vue';
    import UiDropdownRequestChange from '@/components/Global/UiDropdownRequestChange/UiDropdownRequestChange.vue';
    import { convertToLocaleString } from '@/helpers/utility.helper';
    import ModalShareholderRegister
        from '@/components/Global/Modals/ModalShareholderRegister/ModalShareholderRegister.vue';

    @Component({
        components: {
            UiDropdownRequestChange,
            OrganizationDetailsEvents,
            OrganizationEenmanszaak,
            PageBlock,
            OrganizationShareholders,
            UiSummaryBlocks,
            UiTable
        }
    })
    export default class Organization extends Vue {
        @Prop() organization!: OrganizationService;
        summaryBlocksData = [
            {
                label: i18n.t('ORGANIZATION.POSTED_CAPITAL'),
                value: convertToLocaleString(this.organization.data.total_shares_value)
            },
            {
                label: i18n.t('ORGANIZATION.PAID_UP_CAPITAL'),
                value: convertToLocaleString(this.organization.data.total_shares_value)
            },
            {
                label: i18n.t('DASHBOARD.AMOUNT_SHARES'),
                value: this.organization.data.total_shares_amount
            },
            {
                label: i18n.t('ORGANIZATION.AVERAGE_NOMINAL_SHARE_VALUE'),
                value: convertToLocaleString(this.organization.averageSharesValue)
            }
        ];

        created() {
            pageMetadataService.setPageTitle(this.$route, this.organization.data.name);
        }

        openInfoShareholderRegister() {
            this.$buefy.modal.open({
                parent: this,
                component: ModalShareholderRegister,
                hasModalCard: true
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2 * $margin-default;

        @include breakpoint-down(sm) {
            flex-direction: column;

            h2 {
                margin-bottom: $margin-default;
            }
        }
    }

    h2 {
        @include fs-medium;
    }

    .shareholder-register {
        display: flex;
        @include font-size($h2-font-sizes);
        color: $color-gray-70;
        align-items: center;

        .ui-icon {
            cursor: pointer;
            margin-left: $margin-default;

            &:hover {
                fill: $color-blue-darker;
            }
        }
    }
</style>
