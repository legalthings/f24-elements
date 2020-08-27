<template>
    <div class="bookkeeping">
        <PageBlock
            :back-button="{name: 'organization', label: $t('NAVIGATION.OVERVIEW'), params: {organizationId: $route.params.organizationId}}"
        >
            <template
                v-if="!isLoading"
                #content
            >
                <PageSection>
                    <div slot="header">
                        {{ $t('SIDEBAR_MENU.BOOKKEEPING') }}
                    </div>
                    <div slot="content">
                        <div v-if="!hasBookkeeping">
                            <BookkeepingBanner
                                v-if="!hasProcessStarted && !hasProcess"
                                :action="openCalendly"
                            />
                            <div
                                v-if="hasProcessStarted && !hasProcess"
                                class="box"
                            >
                                Your request is been processed
                            </div>
                            <BookkeepingProgress
                                v-if="hasProcessStarted && hasProcess"
                                :process="processData"
                                class="box"
                            />
                        </div>

                        <div
                            v-if="hasBookkeeping"
                            class="columns"
                        >
                            <div class="column">
                                <div class="box">
                                    <h3 class="box-title">
                                        {{ $t('BOOKKEEPING.BOOKKEPPER') }}
                                    </h3>
                                    <div class="is-flex">
                                        <figure class="logo">
                                            <img
                                                :src="processData.actors.bookkeeper.organization.image"
                                                :alt="processData.actors.bookkeeper.organization.name"
                                            >
                                        </figure>
                                        <ul class="bookkeeping-details">
                                            <li>
                                                <strong>{{ subscriptionData.description }}</strong>
                                            </li>
                                            <li>
                                                {{ processData.actors.bookkeeper.organization.email }}
                                            </li>
                                            <li v-if="processData.actors.bookkeeper.organization.address">
                                                {{ processData.actors.bookkeeper.organization.address.street }},
                                                {{ processData.actors.bookkeeper.organization.address.number }}
                                            </li>
                                            <li v-if="processData.actors.bookkeeper.organization.address">
                                                {{ processData.actors.bookkeeper.organization.address.postalcode }} -
                                                {{ processData.actors.bookkeeper.organization.address.city }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="box">
                                    <h3 class="box-title">
                                        {{ $t('BOOKKEEPING.PACKET') }}
                                    </h3>
                                    <PageSectionItems
                                        :item="{label: $t('SHAREHOLDERS_DETAILS.NAME'), value: processData.data.package}"
                                    />
                                    <PageSectionItems
                                        :item="{label: $t('SHAREHOLDERS_DETAILS.AMOUNT'), value: $f24.convertToLocaleString(Number(subscriptionData.amount.value))}"
                                    />
                                    <PageSectionItems
                                        :item="{label: $t('GLOBAL.STARTING_DATE'), value: $f24.formatDate(subscriptionData.startDate)}"
                                    />
                                    <PageSectionItems
                                        :item="{label: $t('GLOBAL.NEXT_BILLING'), value: $f24.formatDate(subscriptionData.nextPaymentDate)}"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </PageSection>
                <div v-if="hasBookkeeping">
                    <PageSection>
                        <div slot="header">
                            {{ $t('BOOKKEEPING.LATEST_PAYMENTS') }}
                        </div>
                        <div
                            slot="content"
                            class="box"
                        >
                            <b-table
                                :data="paymentHistory"
                                :columns="paymentColumns"
                                :paginated="true"
                                hoverable
                                :per-page="5"
                                sort-icon="chevron-up"
                            />
                        </div>
                    </PageSection>
                    <PageSection v-if="!isLoading && hasBookkeeping">
                        <div slot="header">
                            {{ $t('BOOKKEEPING.ACCOUNTING_LINKS') }}
                        </div>
                        <div slot="content">
                            <div class="columns accounting-logos">
                                <div class="column">
                                    <div class="box">
                                        <figure>
                                            <img
                                                src="/img/content/bookkeeping/employes.png"
                                                alt="Employes"
                                            >
                                        </figure>
                                        <b-button
                                            href="https://payroll.employes.nl/login"
                                            tag="a"
                                            rounded
                                            type="is-primary is-padding-small"
                                            target="_blank"
                                        >
                                            Login
                                        </b-button>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="box">
                                        <figure>
                                            <img
                                                src="/img/content/bookkeeping/yuki.png"
                                                alt="Yuki"
                                            >
                                        </figure>
                                        <b-button
                                            href="https://www.yukiworks.nl/docs/Login.aspx"
                                            tag="a"
                                            rounded
                                            type="is-primary is-padding-small"
                                            target="_blank"
                                        >
                                            Login
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PageSection>
                </div>
            </template>
        </PageBlock>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';
    import BookkeepingBanner
        from '@/components/Organization/views/OrganizationBookkeeping/components/BookkeepingBanner/BookkeepingBanner.vue';
    import ModalBookkeeping from '@/components/Global/Modals/ModalBookkeeping/ModalBookkeeping.vue';
    import apiService from '@/services/api.service';
    import { BookkeepingTypes } from '@/types/bookkeeping.types';
    import BookkeepingProgress
        from '@/components/Organization/views/OrganizationBookkeeping/components/BookkeepingProgress/BookkeepingProgress.vue';
    import { convertToLocaleString, formatDate } from '@/helpers/utility.helper';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';

    @Component({
        components: {
            PageSectionItems,
            BookkeepingProgress,
            BookkeepingBanner,
            UiButton,
            PageSection,
            PageBlock
        }
    })

    export default class OrganizationBookkeeping extends Vue {
        @Prop() organization!: OrganizationService;
        subscriptionData: BookkeepingTypes | any = {};
        processData: any = {};
        hasProcessStarted = false;
        hasProcess = false;
        hasBookkeeping = false;
        isLoading = true;
        loadingModal = this.$buefy.loading.open({});

        async created() {
            let processesResponse;
            try {
                const { data, status } = await apiService.get('proxy/iam/organizations/' + this.organization.data.legacy_id);
                if (status !== 200) return;

                if (data.bookkeeping) {
                    processesResponse = await apiService.get('proxy/flow/processes/' + data.bookkeeping.process_id);
                    this.processData = processesResponse.data;
                }

                if (data.bookkeeping_organization) {
                    this.hasProcessStarted = true;
                }

                if (data.bookkeeping.subscription && processesResponse.status === 200) {
                    this.subscriptionData = data.bookkeeping.subscription;
                    this.hasBookkeeping = true;
                }

                if (data.bookkeeping.process_id && !data.bookkeeping.subscription) {
                    this.hasProcess = true;

                    if (processesResponse && processesResponse.status === 200) {
                        this.shouldMakeStartPaymentRequest(processesResponse.data.current.key);
                    }
                }
            } catch (e) {
                console.log('Error trying to get organization from legacy: ', e);
            } finally {
                this.isLoading = false;
                this.loadingModal.close();
            }
        }

        shouldMakeStartPaymentRequest(key: string) {
            if (key === 'confirm_start_payment') {
                this.sendConfirmPayment();
            }
        }

        async sendConfirmPayment() {
            try {
                const config = {
                    action: 'confirm_start_payment',
                    response: 'ok'
                };
                const { data, status } = await apiService.post('proxy/flow/processes/' + this.processData.id + '/response', config);
                if (status === 200) {
                    this.processData = data;
                }
            } catch (e) {
                console.log('Error trying to submit start payment: ', e);
            }
        }

        get paymentHistory() {
            return this.subscriptionData.payments.map(p => {
                return {
                    date: formatDate(p.paidAt),
                    amount: convertToLocaleString(Number(p.amount.value))
                };
            });
        }

        get paymentColumns() {
            return [
                { label: 'Date', field: 'date', sortable: true },
                { label: 'Amount', field: 'amount', sortable: true, width: '120px' }
            ];
        }

        openCalendly() {
            this.$buefy.modal.open({
                parent: this,
                component: ModalBookkeeping,
                hasModalCard: true,
                trapFocus: true
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    .box {
        height: 100%;

        .button {
            margin-top: 2 * $margin-default;
        }
    }

    .is-flex {
        align-items: center;
        @include breakpoint-down(sm) {
            flex-direction: column;
        }
    }

    .columns {
        flex-wrap: wrap;
        align-items: stretch;
    }

    .logo {
        flex-shrink: 0;
        margin-right: 4 * $margin-default;
        height: auto !important;
        width: 100px;

        @include breakpoint-down(sm) {
            margin-bottom: 2 * $margin-default;
        }
    }

    .bookkeeping-details {

        li {
            margin-bottom: 2 * $margin-default;
        }
    }

    /deep/ table {
        @include table-secondary;
    }

    .accounting-logos {
        .box {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            img {
                max-width: 200px;
            }
        }
    }
</style>
