<template>
    <div>
        <PageMainSection>
            <template #header>
                {{ $t('PAGE_TITLES.DASHBOARD') }}
            </template>
            <template #options>
                <div class="buttons">
                    <AdvisorHeaderButtons />
                    <span @click="addLeads">
                        add
                    </span>
                </div>
            </template>
            <template #content>
                <b-loading
                    :is-full-page="true"
                    :active.sync="isLoading"
                />
                <UiSummaryBlocks
                    :summary-data="summaryBlocksData"
                    variant="b"
                />

                <div class="columns">
                    <div class="column">
                        <div class="box">
                            <h4 class="box-title">
                                {{ $t('ADVISOR.YOUR_ACTIONS') }}
                                <b-tag
                                    type="is-danger"
                                    rounded
                                >
                                    {{ myActions.length }}
                                </b-tag>
                            </h4>
                            <ul class="box-list">
                                <li
                                    v-for="process in myActions"
                                    :key="process.id"
                                >
                                    <div class="list-name">
                                        <CardLogo :name="process.name" />
                                        <div class="list-name-detail">
                                            <span>
                                                {{ process.currentStep.title }}
                                            </span>
                                            <span>
                                                {{ process.name }}
                                            </span>
                                        </div>
                                    </div>
                                    <UiButton
                                        :is-router="!process.isOldFunnel"
                                        :url="process.url"
                                    >
                                        <UiIcon icon="arrow-right" />
                                    </UiButton>
                                </li>
                            </ul>

                            <div class="buttons buttons-list">
                                <b-button
                                    tag="router-link"
                                    :to="{name: 'advisor-processes'}"
                                    type="is-primary is-padding-small"
                                    rounded
                                    outlined
                                >
                                    {{ $t('ADVISOR.VIEW_PROCEDURES') }}
                                </b-button>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <h4 class="box-title">
                                {{ $t('ADVISOR.OPEN_LEADS') }}
                                <b-tag
                                    type="is-danger"
                                    rounded
                                >
                                    {{ leadsOpen.total }}
                                </b-tag>
                            </h4>
                            <ul class="box-list">
                                <li
                                    v-for="lead in leadsOpen.data"
                                    :key="lead.id"
                                >
                                    <div class="list-name">
                                        <CardLogo :name="lead.lead.name" />
                                        <span>
                                            {{ lead.lead.name }}
                                        </span>
                                    </div>
                                </li>
                            </ul>

                            <div class="buttons buttons-list">
                                <b-button
                                    tag="router-link"
                                    :to="{name: 'advisor-leads'}"
                                    type="is-primary is-padding-small"
                                    rounded
                                    outlined
                                >
                                    {{ $t('ADVISOR.VIEW_LEADS') }}
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </PageMainSection>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageMainSection from '@/components/Global/Page/PageMainSection/PageMainSection.vue';
    import i18n from '@/dependencies/i18n';
    import UiSummaryBlocks from '@/components/Organization/components/UiSummaryBlocks.vue';
    import incorporationService from '@/services/incorporation.service';
    import CardLogo from '@/components/Dashboard/components/CardLogo/CardLogo.vue';
    import AdvisorHeaderButtons from '@/components/Advisor/components/AdvisorHeaderButtons.vue';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';
    import apiService from '@/services/api.service';
    import { LeadPurchasesTypes } from '@/types/lead.types';

    @Component({
        components: {
            UiButton,
            AdvisorHeaderButtons,
            CardLogo,
            UiSummaryBlocks,
            PageMainSection
        }
    })
    export default class AdvisorDashboard extends Vue {
        @Prop() leadsAmount!: number;
        @Prop() leadsOpen!: { total: number, data: [LeadPurchasesTypes] };
        processes: Array<any> = [];
        leads: Array<any> = [];
        isLoading = true;

        get summaryBlocksData() {
            return [
                {
                    label: i18n.t('ADVISOR.OPEN_PROCEDURES'),
                    value: this.processes.length
                },
                {
                    label: i18n.t('ADVISOR.ACTIONS_REQUIRED'),
                    value: this.myActions.length
                },
                {
                    label: i18n.t('ADVISOR.YOUR_OPEN_LEADS'),
                    value: this.leadsOpen.total
                },
                {
                    label: i18n.t('ADVISOR.AVAILABLE_LEADS'),
                    value: this.leadsAmount
                }
            ];
        }

        created() {
            this.getIncorporations();
            this.getLeads();
        }

        async getIncorporations() {
            try {
                const data = await incorporationService.getProcesses();
                if (!data) return;
                this.processes = data;
            } catch (e) {
                console.log('Error', e);
            } finally {
                this.isLoading = false;
            }
        }

        get myActions() {
            return this.processes.filter(p => p.myTurn);
        }

        getLeads() {
            this.leads = [
                {
                    id: 1234,
                    name: 'Reno BV',
                    address: {
                        street: 'street'
                    }
                },
                {
                    id: 56789,
                    name: 'Ice shop',
                    address: {
                        street: 'street'
                    }
                }
            ];
        }

        addLeads() {
            const config = {
                name: 'Example Lead',
                type: 'bookkeeping',
                registration_number: '12345678',
                registered_city: 'Amsterdam',
                incorporation_date: '2020-01-31',
                address: {
                    street: 'Jan Ligthartstraat',
                    postal_code: '1964 HH',
                    number: '132',
                    addition: 'a',
                    city: 'Heemskerk',
                    province: 'Noord-Holland',
                    country: 'Netherlands'
                },
                contact: {
                    first_name: 'John',
                    last_name: 'Doe',
                    gender: 'male',
                    phone: Math.random().toString().replace('0.', ''),
                    email: Array.from({ length: 10 }, () => Math.random().toString(36)[2]).join('') + '@gmail.com'
                },
                organization: '5ec51dd745a62b00119348df'
            };

            apiService.post('leads', config, [], {
                headers: {
                    'x-token': 'fc98cbc3-f57e-4299-b2a6-baa8ae1aa0b8'
                }
            });

            this.$emit('updateLeads');
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .box {
        position: relative;
        border-radius: 10px;
    }

    .buttons-list {
        margin-top: 3 * $margin-default;
        justify-content: center;
    }

    .box-title {
        @include fs-medium;
        @include font-size($regular-font-sizes);
        display: flex;
        align-items: center;

        .tag {
            margin-left: $margin-default;
        }
    }

    .box-list {
        margin-top: $margin-default;
        height: 210px;
        overflow-x: auto;
        margin: 20px -20px;
        padding: 0 20px 40px;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: $margin-default 0;
            border-bottom: 1px solid $color-blue-gray-01;

            &:first-child {
                border-top: 1px solid $color-blue-gray-01;
            }
        }

        .list-name {
            display: flex;
            align-items: center;
            @include font-size($small-font-sizes);

            span {
                margin-left: $margin-default;
            }

            .list-name-detail {
                display: flex;
                flex-direction: column;

                span:last-child {
                    @include font-size($xsmall-font-sizes);
                    color: $color-blue-gray-02;
                    margin-top: 4px;
                }
            }
        }

        /deep/ .logo {
            width: 40px;
            height: 40px;

            span {
                font-size: 16px;
            }
        }
    }

</style>
