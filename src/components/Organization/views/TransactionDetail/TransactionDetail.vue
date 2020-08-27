<template>
    <PageBlock
        :back-button="{label: $t('NAVIGATION.OVERVIEW'), name:'organization', params: {organizationId : $route.params.organizationId}}"
    >
        <template #content>
            <PageSection>
                <div slot="header">
                    Transactions details
                </div>
                <div slot="content">
                    <div class="box">
                        <PageSectionItems
                            :item="{label:$t('SHAREHOLDERS_DETAILS.DATE'), value: format(transaction.created)}"
                        />

                        <PageSectionItems
                            v-if="transaction.type === 'transfer'"
                            :item="{label:$t('SHAREHOLDERS_DETAILS.FROM'), value: getShareholderNameByShare(transaction.from)}"
                        />
                        <PageSectionItems
                            :item="{label:$t('SHAREHOLDERS_DETAILS.TO'), value: getShareholderNameByShare(transaction.to)}"
                        />
                        <PageSectionItems
                            :item="{label: $t('SHAREHOLDERS_DETAILS.TYPE_OF_SHARES')}"
                        >
                            <div slot="value">
                                <ShareSymbol :asset="transaction.asset" />
                                {{ $t('ORGANIZATIONS_SHAREHOLDERS.' + transaction.asset.toUpperCase()) }}
                            </div>
                        </PageSectionItems>

                        <PageSectionItems
                            :item="{label: $t('SHAREHOLDERS_DETAILS.TYPE_OF_TRANSACTION'), value: transaction.type}"
                        />

                        <PageSectionItems
                            :item="{label: $t('SHAREHOLDERS_DETAILS.AMOUNT'), value: transaction.amount}"
                        />
                    </div>
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
    import { TransactionTypes } from '@/types/transaction.types';
    import alertService from '@/services/alert.service';
    import ShareSymbol from '@/components/Global/ShareSymbol/ShareSymbol.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import { formatDate } from '@/helpers/utility.helper';

    @Component({
        components: { ShareSymbol, PageSectionItems, PageSection, PageBlock }
    })
    export default class TransactionDetail extends Vue {
        @Prop() organization!: OrganizationService;

        transaction: TransactionTypes | undefined;

        created() {
            const result = this.organization.sharesEvents.find(s => (s.id === this.$route.params.transactionId));
            if (!result) {
                this.$router.push({
                    name: 'organization',
                    params: { organizationId: this.$route.params.organizationId }
                });
                alertService.dangerMessage('No transaction was founded');
            }
            this.transaction = result;
        }

        getShareholderNameByShare(share: any) {
            return this.organization.getShareholderNameByShare(share);
        }

        format(date: string) {
            return formatDate(date);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
