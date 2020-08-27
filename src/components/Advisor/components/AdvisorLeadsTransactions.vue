<template>
    <b-table
        ref="table"
        :loading="loading"

        :data="tableData"
        :paginated="isPaginated"
        :per-page="perPage"

        default-sort="lead.created"
        :current-page.sync="currentPage"
        default-sort-direction="desc"
        :show-detail-icon="false"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
    >
        <template slot-scope="props">
            <b-table-column
                field="type.name"
                label="Type"
                sortable
            >
                {{ props.row.type.name }}
            </b-table-column>

            <b-table-column
                field="lead.name"
                label="Amount"
                sortable
            >
                {{ props.row.count }}
            </b-table-column>

            <b-table-column
                field="lead.created"
                :label="$t('SHAREHOLDERS_DETAILS.DATE')"
                sortable
            >
                {{ $f24.formatDate(props.row.created, true) }}
            </b-table-column>

            <b-table-column
                width="60"
            >
                <div class="row-action">
                    <span @click="deleteTransaction(props.row)">
                        <b-icon
                            icon="trash-alt"
                            class="remove"
                        />
                    </span>
                    <b-button
                        type="is-primary is-padding-small"
                        rounded
                        @click="pay(props.row)"
                    >
                        Pay
                    </b-button>
                </div>
            </b-table-column>
        </template>

        <template
            #bottom-left
        >
            <b-select
                v-if="tableData.length > 5"
                v-model="perPage"
            >
                <option value="5">
                    5 per page
                </option>
                <option value="10">
                    10 per page
                </option>
                <option
                    v-if="tableData.length > 10"
                    value="20"
                >
                    20 per page
                </option>
                <option
                    v-if="tableData.length > 20"
                    :value="tableData.length"
                >
                    View all {{ tableData.length }}
                </option>
            </b-select>
        </template>
    </b-table>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import CardLogo from '@/components/Dashboard/components/CardLogo/CardLogo.vue';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import paymentService from '@/services/payment.service';
    import leadService from '@/services/leads.service';
    import alertService from '@/services/alert.service';

    @Component({
        components: { PageSectionItems, CardLogo }
    })
    export default class AdvisorLeadsTransactions extends Vue {
        $refs!: {
            table: any
        };

        $parent: any;

        @Prop() tableData!: Array<any>;
        @Prop({ default: false }) loading!: boolean;

        isPaginated = this.tableData.length > 5;
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 5;

        pay(data: any) {
            window.location.href = paymentService.startPayment(data.transaction.id);
        }

        async deleteTransaction(data: any) {
            const { status } = await leadService.deleteLead(data.id);
            if (status === 204) {
                alertService.successMessage('Lead transaction was removed');
                this.$emit('updateTransactions');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    /deep/ .table {
        @include table-primary;

        tbody tr:not(.detail) {
            cursor: pointer;
        }

        .detail {
            h4 {
                @include fs-medium;
            }

            .buttons {
                margin-top: 2 * $margin-default;

                p {
                    font-weight: bold;
                    margin-right: 7 * $margin-default;

                    @include breakpoint-down(sm) {
                        margin-bottom: 2 * $margin-default;
                    }
                }
            }
        }
    }

    .row-action {
        display: flex;
    }

    .open-details {
        cursor: pointer;
        transition: transform .3s ease-in-out;

        &:hover {
            fill: $color-blue-darker;
        }

        &.is-open {
            transform: rotate(180deg);
        }
    }

    .shareholders {
        display: flex;
        align-items: center;

        @include breakpoint-down(sm) {
            flex-direction: column;
        }

        .multiple-shareholder {
            display: flex;
            align-items: center;

            .ui-icon {
                transform: rotate(-180deg);
                margin: 0 $margin-default;
            }
        }
    }
</style>
