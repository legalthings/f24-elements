<template>
    <b-table
        ref="table"
        :loading="loading"
        detailed
        :data="events"
        :paginated="isPaginated"
        :per-page="perPage"
        default-sort="created"
        detail-key="id"
        :current-page.sync="currentPage"
        default-sort-direction="desc"
        :show-detail-icon="false"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
    >
        <template slot-scope="props">
            <b-table-column
                field="scope"
                label="Event"
                width="50"
                sortable
            >
                <figure class="type-icon">
                    <UiIcon
                        v-if="props.row.scope === 'shares'"
                        size="16"
                        icon="certificate"
                        type="custom"
                        color="white"
                    />
                    <i
                        v-else
                        class="far fa-building"
                    />
                </figure>
            </b-table-column>

            <b-table-column
                field="created"
                :label="$t('SHAREHOLDERS_DETAILS.DATE')"
                width="130"
                sortable
            >
                {{ $f24.formatDate(props.row.created) }}
            </b-table-column>

            <b-table-column
                field="classification.label"
                :label="$t('ORGANIZATION.EVENT_TYPE')"
                width="230"
                sortable
            >
                {{ props.row.classification.label }}
            </b-table-column>

            <b-table-column
                v-if="hasShares"
                field="data.asset"
                :label="$t('ORGANIZATION.SHARE_TYPE')"
                sortable
            >
                {{ $t('ORGANIZATIONS_SHAREHOLDERS.' + props.row.data.asset.toUpperCase()) }}
            </b-table-column>

            <b-table-column
                :visible="hasShares"
                field="type"
                :label="$t('ORGANIZATION.SHAREHOLDERS')"
            >
                <div class="shareholders">
                    <span
                        v-for="(shareholder, index) in getShareholders(props.row.data)"
                        :key="shareholder"
                        :class="{'multiple-shareholder': getShareholders(props.row.data).length > 1 }"
                    >
                        <UiIcon
                            v-if="getShareholders(props.row.data).length > 1 && index === 1"
                            icon="arrow-left"
                            color="orange"
                        />
                        {{ shareholder }}
                    </span>
                </div>
            </b-table-column>

            <b-table-column
                :visible="hasSequence"
                field="sequence"
                :label="$t('EVENTS_DETAILS.SEQUENCE')"
            >
                {{ getSequenceText(props.row.index) }}
            </b-table-column>

            <b-table-column
                field="details"
                width="50"
            >
                <div class="row-action">
                    <UiIcon
                        icon="chevron-down-in-circle"
                        class="open-details"
                        :class="{'is-open': isRowOpen(props.row)}"
                        @click="toggle(props.row)"
                    />
                </div>
            </b-table-column>
        </template>

        <template
            #bottom-left
        >
            <b-select
                v-if="events.length > 5"
                v-model="perPage"
            >
                <option value="5">
                    5 per page
                </option>
                <option value="10">
                    10 per page
                </option>
                <option
                    v-if="events.length > 10"
                    value="20"
                >
                    20 per page
                </option>
                <option
                    v-if="events.length > 20"
                    :value="events.length"
                >
                    View all {{ events.length }}
                </option>
            </b-select>
        </template>

        <template
            slot="detail"
            slot-scope="{row}"
        >
            <article>
                <OrganizationEventsDetailsShares
                    v-for="(component, index) in row.classification.components"
                    :key="index"
                    :props="row"
                    :details="getDetails(component, row)"
                    :has-multiple="row.classification.components.length > 1"
                />
            </article>
        </template>
    </b-table>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import OrganizationEventsDetailsShares from '@/components/Organization/views/OrganizationDetails/components/OrganizationEventsDetailsShares.vue';
    import SharesDetailsService from '../services/sharesDetails.service';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import i18n from '@/dependencies/i18n';

    @Component({
        components: { OrganizationEventsDetailsShares, PageSectionItems }
    })
    export default class OrganizationDetailsEvents extends Vue {
        $refs!: {
            table: any
        };

        @Prop() organization!: OrganizationService;
        @Prop() events!: Array<any>;
        @Prop({ default: false }) loading!: boolean;
        @Prop({ default: false }) hasSequence!: boolean;
        @Prop({ default: false }) hasShares!: boolean;

        isPaginated = this.events.length > 5;
        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        currentPage = 1;
        perPage = 5;

        openRows: Array<any> = [];

        getSequenceText(index: number) {
            return index === 1 ? `${i18n.t('SHAREHOLDERS_DETAILS.FIRST_REGISTRATION')}` : `${i18n.t('SHAREHOLDERS_DETAILS.CHANGE')} ${index - 1}`;
        }

        getId(d: any) {
            return d.organization || d.user;
        }

        getShareholders(data: any) {
            if (!data.from && data.to) {
                return [this.organization.getNameById(this.getId(data.to))];
            }
            if (data.from && data.to) {
                const from = this.organization.getNameById(this.getId(data.from));
                const to = this.organization.getNameById(this.getId(data.to));
                return [from, to];
            }
        }

        getDetails(component: any, data: any) {
            const details = new SharesDetailsService();
            switch (component) {
                case 'SHARES_COMPONENT':
                    return details.getShares(data);
                case 'ORGANIZATION_NAME_CHANGED':
                    return details.getOrganizationNameChange(data);
                case 'ORGANIZATION_REGISTERED_CITY_CHANGED':
                    return details.getOrganizationRegistrationCityChange(data);
                case 'ORGANIZATION_CREATED':
                    return details.getOrganizationCreated(data);
                case 'ORGANIZATION_INCORPORATED':
                    return details.getOrganizationIncorporated(data);
            }
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
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    .b-table {
        width: 100%;
    }

    /deep/ .table {
        @include table-primary;

        .mobile-header-column {

            .mobile-header-column-actions {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        .detail {
            margin-top: -10px !important;

            td {
                border-radius: $border-radius;
            }

            .detail-container {
                @include breakpoint-down(md) {
                    margin-top: 10px;
                }
                @include breakpoint-down(sm) {
                    padding: 0 !important;
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
