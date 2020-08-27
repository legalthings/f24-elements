<template>
    <div class="filters">
        <div>
            <b-input
                v-model="stringSearchEmitted"
                rounded
                placeholder="Search..."
                icon="search"
                :icon-right="!!stringSearchEmitted ? 'close-circle' : ''"
                :icon-right-clickable="!!stringSearchEmitted"
                @icon-right-click="clearStringSearch"
                @keyup.native="search"
            />
        </div>

        <div class="filter-group">
            <UiInputSelectbox
                v-for="(filter, index) in filters"
                :key="index"
                v-model="localFilters[filter.identifier]"
                :expanded="true"
                :placeholder="filter.label"
                :items="filter.options"
                rounded
                rules=""
            />
            <b-button
                v-if="isClearVisible"
                type="is-primary is-padding-small"
                outlined
                rounded
                class="tag clean-search"
                @click="cleanSearch"
            >
                Remove filters
            </b-button>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import { RequestParams } from '@/types/apiTypes';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';

    @Component({
        components: {
            UiInputSelectbox
        }
    })
    export default class UiSearch extends Vue {
        @Prop() value!: any;
        @Prop() total!: any;
        @Prop() limit!: any;
        @Prop() page!: any;
        @Prop() source!: any;
        @Prop() filters!: Array<any>;
        @Prop() customFilters!: Array<any>;

        localFilters: any = {};
        stringSearch: any = null;
        stringSearchEmitted: any = null;
        lastInput: any;
        urgency: number | null = null;

        created() {
            this.$emit('input', this.searchParams);
        }

        get searchParams(): Array<RequestParams> {
            const config: any = [];
            Object.keys(this.localFilters).forEach(f => {
                if (this.localFilters[f]) {
                    if (f !== 'custom') {
                        config.push({ key: f, value: this.localFilters[f] });
                    } else {
                        const array = this.localFilters[f].split('=');
                        config.push({ key: array[0], value: array[1] });
                    }
                }
            });
            if (this.stringSearch) {
                config.push({ key: 'search', value: this.stringSearch });
            }
            return config;
        }

        get isClearVisible() {
            return Object.keys(this.localFilters).some(k => {
                return this.localFilters[k] !== null;
            }) || this.stringSearchEmitted?.length > 0;
        }

        cleanSearch() {
            this.clearStringSearch();
            this.localFilters = {};
        }

        clearStringSearch() {
            this.stringSearch = null;
            this.stringSearchEmitted = null;
        }

        search() {
            if (this.lastInput) {
                clearTimeout(this.lastInput);
                this.lastInput = null;
            }
            this.lastInput = setTimeout(() => {
                this.source.cancel();
                this.stringSearch = this.stringSearchEmitted;
            }, 500);
        }

        @Watch('searchParams')
        onSearchParams() {
            this.$emit('input', this.searchParams);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .filter-group {
        display: flex;
        margin-top: $margin-default;
        align-items: center;

        @include breakpoint-down(sm) {
            flex-direction: column;
        }

        > * {
            margin-right: $margin-default;
        }

        .control {
            width: 160px;

            @include breakpoint-down(sm) {
                width: 100%;
                margin: $margin-default / 3 0;
            }
        }

        .clean-search {
            cursor: pointer;

            &:hover {
                color: $color-blue-gray-01;
                background: $color-gray-80;
            }
        }
    }
</style>
