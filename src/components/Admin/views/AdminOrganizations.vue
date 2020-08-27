<template>
    <section class="section">
        <div class="page-header">
            <h2 class="title">
                Organizations
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
            <b-button
                v-if="$store.getters['userStore/isSupport']"
                type="is-primary is-padding-small has-icon"
                rounded
                tag="router-link"
                :to="{name: 'add-organization'}"
            >
                <UiIcon
                    icon="add"
                    size="22px"
                    color="white"
                />
                Add organization
            </b-button>
        </div>

        <UiSearch
            v-model="search"
            :source="source"
            :page="page"
            :limit="limit"
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
        >
            <template slot-scope="props">
                <b-table-column
                    field="state"
                    label="State"
                    sortable
                >
                    {{ props.row.state }}
                </b-table-column>

                <b-table-column
                    field="name"
                    :label="$t('SHAREHOLDERS_DETAILS.NAME')"
                    sortable
                >
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column
                    field="corporation_type"
                    label="Type"
                    sortable
                >
                    {{ props.row.corporation_type }}
                </b-table-column>

                <b-table-column
                    field="email"
                    label="Email"
                    sortable
                >
                    <span
                        class="tag"
                    >
                        {{ props.row.email }}
                    </span>
                </b-table-column>

                <b-table-column
                    field="id"
                    label="Details"
                >
                    <b-button
                        type="is-primary is-padding-small"
                        tag="router-link"
                        rounded
                        :to="{name: 'organization', params: {organizationId: props.row.id }}"
                    >
                        details
                    </b-button>
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

    @Component({
        components: {
            UiSearch,
            UiInputSelectbox
        }
    })
    export default class AdminOrganizations extends Vue {
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

        async mounted() {
            await this.getProcesses();
        }

        async getProcesses() {
            this.isLoading = true;
            this.source = axios.CancelToken.source();
            try {
                const options = {
                    cancelToken: this.source.token,
                    cache: true,
                    headers: {
                        'Access-Control-Expose-Headers': '*'
                    }
                };
                const { status, headers, data } = await apiService.get('organizations', this.searchParameters, options) || {};
                if (status !== 200) return;
                this.processes = data;
                this.total = headers['x-total'];
            } catch (e) {
                // TODO Investigate how to catch the calling from axios
                alertService.dangerMessage('Something went wrong, please try again in a few minutes');
                throw new Error(e);
            } finally {
                this.isLoading = false;
            }
        }

        resetOrdering() {
            this.sortField = '';
            this.$refs.table.currentSortColumn = {};
            this.getProcesses();
        }

        get offset() {
            return (this.limit * this.page) - this.limit;
        }

        get searchParameters() {
            const config: any = [
                { key: 'state', value: 'running' },
                { key: 'limit', value: this.limit },
                { key: 'skip', value: this.offset }
            ];
            if (this.sortField) {
                const value = this.sortOrder === 'desc' ? '^' + this.sortField : this.sortField;
                config.push({ key: 'sort', value: value });
            }
            return [...this.search, ...config];
        }

        onPageChange(page) {
            this.page = page;
            this.getProcesses();
        }

        onSort(field, order) {
            this.sortOrder = order;
            this.sortField = field;
            this.sortingPriority[0] = ({ field, order });
            this.getProcesses();
        }

        @Watch('search')
        onSearch() {
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
    }

    /deep/ .load-processes {
        padding: 5 * $margin-default 2 * $margin-default;
        position: relative;
        border-radius: $border-radius;
        margin-bottom: 3 * $margin-default;
        overflow: hidden;
    }

    .filters-other {
        margin-top: 2 * $margin-default;

        .control {
            margin-right: $margin-default;
        }
    }

    .page-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2 * $margin-default;
    }
</style>
