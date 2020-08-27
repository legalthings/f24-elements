<template>
    <section class="section">
        <h2 class="title">
            Processes
            <span class="tag">
                <UiIcon
                    v-if="isLoading"
                    icon="loading"
                    color="blue"
                    size="20"
                />
                <span v-else>
                    {{ processes.length }} items
                </span>
            </span>
        </h2>

        <b-table
            ref="table"
            :loading="isLoading"
            detailed
            :data="processes"
            :paginated="true"
            :per-page="10"
            detail-key="id"
            default-sort="lead.created"
            :current-page.sync="currentPage"
            default-sort-direction="desc"
            :show-detail-icon="false"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"

            hoverable
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
    import { Component, Vue } from 'vue-property-decorator';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
    import UiSearch from '@/components/Admin/components/UiSearch.vue';
    import incorporationService from '@/services/incorporation.service';

    @Component({
        components: {
            UiSearch,
            UiInputSelectbox
        }
    })
    export default class AdvisorProcesses extends Vue {
        $refs!: {
            table: any;
        };

        processes: Array<any> = [];
        isLoading = true;

        sortIcon = 'chevron-up';
        sortIconSize = 'is-small';
        limit = 15;
        currentPage = 1;
        source: any = null;
        search: any = {};
        sortField = '';
        sortOrder = '';

        async created() {
            this.getProcesses();
        }

        async getProcesses() {
            this.isLoading = true;
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

        getSpeedLabel(value: number) {
            let label = '-';
            if (value === 1) label = 'Snell';
            if (value === 3) label = 'Spoed';
            return label;
        }

        rowClick(row: any) {
            window.location.href = row.url;
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
