<template>
    <section class="section">
        <h2 class="title">
            Procedures
            <span class="tag">
                <UiIcon
                    v-if="isLoading"
                    icon="loading"
                    color="blue"
                    size="20"
                />
                <span v-else>
                    {{ total }} items
                </span>
            </span>
        </h2>

        <UiSearch
            v-model="search"
            :source="source"
            :page="page"
            :limit="limit"
            :filters="processesFilters"
        >
            <b-button
                v-if="sortField"
                type="is-primary is-padding-small ordering-reset"
                outlined
                rounded
                class="tag clean-search"
                @click="resetOrdering"
            >
                Reset ordering
            </b-button>
        </UiSearch>

        <b-table
            ref="table"
            class="mg-top-30"
            :data="processes"
            :loading="isLoading"

            hoverable
            paginated
            backend-pagination
            backend-sorting
            :total="total"
            :per-page="limit"

            @sort="onSort"
            @page-change="onPageChange"
            @click="rowClick"
        >
            <template slot-scope="props">
                <b-table-column
                    field="name"
                    :label="$t('SHAREHOLDERS_DETAILS.NAME')"
                    width="200"
                    sortable
                >
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column
                    field="riskLevel"
                    label="Risk level"
                    width="110"
                    sortable
                >
                    <span class="tag">{{ props.row.riskLevel || '-' }}</span>
                </b-table-column>

                <b-table-column
                    field="urgency"
                    label="Speed"
                    sortable
                >
                    <span
                        class="tag"
                        :class="{'is-danger': props.row.urgency}"
                    >
                        {{ getSpeedLabel(props.row.urgency) }}
                    </span>
                </b-table-column>

                <b-table-column
                    field="current.actor.organization_name"
                    label="Client"
                    sortable
                >
                    {{ props.row.current.actor && props.row.current.actor.organization_name }}
                </b-table-column>

                <b-table-column
                    field="scenario"
                    label="Product"
                    sortable
                >
                    <span class="tag">
                        {{ props.row.scenario }}
                    </span>
                </b-table-column>

                <b-table-column
                    field="current.title"
                    label="Step"
                    sortable
                >
                    {{ props.row.current.title }}
                </b-table-column>

                <b-table-column
                    field="creation"
                    label="Date"
                    sortable
                >
                    {{ props.row.creation ? $f24.formatDate(props.row.creation, true) : 'unknown' }}
                </b-table-column>

                <b-table-column
                    label="Details"
                    width="100"
                >
                    <span class="table-action-link">
                        <UiIcon
                            icon="arrow-right"
                        />
                    </span>
                </b-table-column>
            </template>

            <template slot="bottom-left">
                <b-field :label="$t('GLOBAL.ITEMS_PER_PAGE')">
                    <UiInputSelectbox
                        v-model="limit"
                        :value="limit"
                        :items="[{name:'15', id: '15'},{name:'50', id: '50'},{name:'100', id: '100'}]"
                        @change.native="getProcesses()"
                    />
                </b-field>
            </template>

            <template slot="empty">
                <section class="section">
                    <div
                        v-if="!isLoading && processes.length === 0"
                        class="content has-text-grey has-text-centered"
                    >
                        <p>
                            <b-icon
                                icon="table"
                                size="is-large"
                            />
                        </p>
                        <p>
                            {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
                        </p>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import axios from 'axios';
    import alertService from '@/services/alert.service';
    import apiService from '@/services/api.service';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
    import UiSearch from '@/components/Admin/components/UiSearch.vue';
    import adminService from '../services/admin.service';

    @Component({
        components: {
            UiSearch,
            UiInputSelectbox
        }
    })
    export default class AdminProcesses extends Vue {
        $refs!: {
            table: any;
        };

        processes: Array<any> = [];
        isLoading = true;

        total = 0;
        page = 1;
        limit = 15;
        source: any = null;
        search: any = {};
        sortField = '';
        sortOrder = '';
        sortingPriority: any = [];
        processesFilters: any = [];

        async created() {
            this.processesFilters = adminService.processesFilters;
            if (this.$store.getters['userStore/isSupport']) {
                this.processesFilters = await adminService.getAllFilters();
            }
        }

        async getProcesses() {
            this.isLoading = true;
            this.source = axios.CancelToken.source();
            try {
                const options = {
                    cancelToken: this.source.token,
                    cache: true
                };
                const { status, headers, data } = await apiService.get('proxy/flow/processes', this.searchParameters, options) || {};
                if (status !== 200) return;
                this.processes = data;
                this.total = headers['x-result-total'];
            } catch (e) {
                alertService.dangerMessage('Something went wrong, please try again in a few minutes');
                throw new Error(e);
            }
            this.isLoading = false;
        }

        get offset() {
            return (this.limit * this.page) - this.limit;
        }

        get searchParameters() {
            const config: any = [
                { key: 'limit', value: this.limit },
                { key: 'offset', value: this.offset }
            ];
            if (this.sortField) {
                const value = this.sortOrder === 'desc' ? '^' + this.sortField : this.sortField;
                config.push({ key: 'sort', value: value });
            }
            return [...this.search, ...config];
        }

        getSpeedLabel(value: number) {
            let label = '-';
            if (value === 1) label = 'Snell';
            if (value === 3) label = 'Spoed';
            return label;
        }

        resetOrdering() {
            this.sortField = '';
            this.$refs.table.currentSortColumn = {};
            this.getProcesses();
        }

        onSort(field, order) {
            this.sortOrder = order;
            this.sortField = field;
            this.sortingPriority[0] = ({ field, order });
            this.getProcesses();
        }

        onPageChange(page) {
            this.page = page;
            this.getProcesses();
        }

        rowClick(row: any) {
            this.$router.push({ name: 'process-details', params: { processId: row.id } });
        }

        @Watch('search')
        onSearch() {
            if (this.source) this.source.cancel();
            this.page = 1;
            this.getProcesses();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    /deep/ table {
        @include table-primary;
        @include table-primary-compact;

        tbody tr {
            cursor: pointer;
        }
    }

    /deep/ .load-processes {
        padding: 5 * $margin-default 2 * $margin-default;
        position: relative;
        border-radius: $border-radius;
        margin-bottom: 3 * $margin-default;
        overflow: hidden;
    }
</style>
