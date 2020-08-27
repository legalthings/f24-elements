<template>
    <div>
        <HeaderDashboardAdmin :items="mainMenu" />
        <UiBreadcrumbs />
        <div class="container">
            <router-view
                :leads-amount="leadsAmount"
                :leads-open="leadsOpen"
                @updateLeads="fetchLeadsData"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderDashboardAdmin from '@/components/Global/Header/HeaderDashboardAdmin/HeaderDashboardAdmin.vue';
    import i18n from '@/dependencies/i18n';
    import UiBreadcrumbs from '@/components/Global/UiBreadcrumbs/UiBreadcrumbs.vue';
    import { TransactionStatusEnum } from '@/types/payment.enum';
    import ModalPaymentResponse from '@/components/Advisor/modals/ModalPaymentResponse.vue';
    import apiService from '@/services/api.service';

    @Component({
        components: {
            UiBreadcrumbs,
            HeaderDashboardAdmin
        }
    })
    export default class AdvisorDashboardView extends Vue {
        leadsAmount: number = 0;
        leadsOpen: any = {};

        get mainMenu() {
            return [
                {
                    name: i18n.t('NAVIGATION.DASHBOARD'),
                    to: { name: 'advisor-dashboard' }
                },
                {
                    name: i18n.t('NAVIGATION.PROCESSES'),
                    to: { name: 'advisor-processes' }
                },
                {
                    name: i18n.t('NAVIGATION.ORGANIZATIONS'),
                    to: { name: 'advisor-organizations' }
                },
                {
                    name: i18n.t('NAVIGATION.LEADS'),
                    to: { name: 'advisor-leads' }
                }
            ];
        }

        created() {
            this.evaluatePaymentParameters();
            this.fetchLeadsData();
        }

        fetchLeadsData() {
            this.getLeadsAmount();
            this.getOpenLeadsAmount();
        }

        async getLeadsAmount() {
            const { headers } = await apiService.get('leads', [{ key: 'limit', value: 1 }]);
            this.leadsAmount = headers['x-total'];
        }

        async getOpenLeadsAmount() {
            const { data, headers } = await apiService.get('lead-purchases', [
                {
                    key: 'limit',
                    value: 999
                },
                {
                    key: 'status',
                    value: 'open'
                }
            ]);
            this.leadsOpen = {
                total: headers['x-total'],
                data: data
            };
        }

        evaluatePaymentParameters() {
            const status = this.$route.query.status;
            if (status && Object.keys(TransactionStatusEnum).some(k => (TransactionStatusEnum[k] === status))) {
                this.$buefy.modal.open({
                    parent: this,
                    component: ModalPaymentResponse,
                    hasModalCard: true,
                    trapFocus: true,
                    props: {
                        status: status.toString().toUpperCase()
                    }
                });
                // Tricky to remove the param STATUS from the url
                const query = Object.assign({}, this.$route.query);
                delete query.status;
                this.$router.replace({ query });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .load-processes {
        padding: 5 * $margin-default 2 * $margin-default;
        position: relative;
        border-radius: $border-radius;
        margin-bottom: 3 * $margin-default;
        overflow: hidden;
    }
</style>
