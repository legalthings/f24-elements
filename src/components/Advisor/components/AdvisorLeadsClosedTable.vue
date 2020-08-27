<template>
    <b-table
        ref="table"
        :loading="loading"
        detailed
        :data="tableData"
        :paginated="isPaginated"
        :per-page="perPage"
        detail-key="id"
        default-sort="updated"
        :current-page.sync="currentPage"
        default-sort-direction="desc"
        :show-detail-icon="false"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"

        hoverable
        @click="toggle"
    >
        <template slot-scope="props">
            <b-table-column
                label=""
                width="50"
            >
                <CardLogo
                    :name="props.row.lead.name"
                    class="is-size-3"
                />
            </b-table-column>

            <b-table-column
                field="lead.name"
                label="Name"
                sortable
            >
                {{ props.row.lead.name }}
            </b-table-column>

            <b-table-column
                field="lead.created"
                :label="$t('SHAREHOLDERS_DETAILS.DATE')"
                sortable
            >
                {{ $f24.formatDate(props.row.lead.created, true) }}
            </b-table-column>

            <b-table-column
                field="updated"
                :label="$t('GLOBAL.LAST_UPDATE')"
                sortable
            >
                {{ $f24.formatDate(props.row.updated, true) }}
            </b-table-column>

            <b-table-column
                field="status"
                label="Result"
                sortable
            >
                <UiIcon
                    :icon="props.row.status === 'won' ? 'thumbs-up' : 'thumbs-down'"
                    size="24"
                    :color="props.row.status === 'won' ? 'green' : 'red'"
                />
            </b-table-column>

            <b-table-column
                width="60"
            >
                <div class="row-action">
                    <UiIcon
                        icon="chevron-down-in-circle"
                        class="open-details"
                        :class="{'is-open': isRowOpen(props.row)}"
                    />
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

        <template
            slot="detail"
            slot-scope="{row}"
        >
            <article>
                <h4 class="mg-bottom-30">
                    Contact information
                </h4>
                <PageSectionItems
                    v-for="item in getDetails(row)"
                    :key="item.label"
                    :item="item"
                />
            </article>
        </template>
    </b-table>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import CardLogo from '@/components/Dashboard/components/CardLogo/CardLogo.vue';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import ModalLeadRate from '@/components/Advisor/modals/ModalLeadRate.vue';

    @Component({
        components: { PageSectionItems, CardLogo }
    })
    export default class AdvisorLeadsClosedTable extends Vue {
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

        openRows: Array<any> = [];

        getDetails(row: any) {
            return [
                {
                    label: 'Contact person',
                    value: row.lead.contact.first_name + ' ' + row.lead.contact.last_name
                },
                {
                    label: 'Phone number',
                    value: row.lead.contact.phone
                },
                {
                    label: 'Email address',
                    value: row.lead.contact.email
                },
                {
                    label: 'Feedback',
                    value: row.feedback
                },
                {
                    label: 'Rate',
                    value: row.rating
                }
            ];
        }

        isRowOpen(row: any) {
            return this.openRows.includes(row);
        }

        toggleOpenRow(row: any) {
            if (this.openRows.includes(row)) {
                this.openRows = this.openRows.filter(f => f !== row);
            } else {
                this.openRows.push(row);
            }
        }

        toggle(row: any) {
            this.toggleOpenRow(row);
            this.$refs.table.toggleDetails(row);
        }

        rate(status: string, data: any) {
            this.$buefy.modal.open({
                parent: this,
                component: ModalLeadRate,
                hasModalCard: true,
                trapFocus: true,
                props: {
                    status: status,
                    close: this.onModalClose,
                    data
                }
            });
        }

        onModalClose() {
            this.$emit('updateLeads');
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
