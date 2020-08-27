<template>
    <div class="dashboard-header">
        <h1 class="header-title">
            {{ $t('DASHBOARD_HEADER.TITLE') }}
        </h1>
        <div class="tools">
            <ListOptions class="is-hidden-mobile" />

            <UiInputSelectbox
                v-model="filter"
                :items="filterItems"
                :value="value"
                rounded
            />

            <UiDropdownNewRequest />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';
    import ListOptions from '@/components/Global/ListOptions/ListOptions.vue';
    import SearchButton from '@/components/Global/Buttons/SearchButton.vue';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
    import UiDropdownNewRequest from '@/components/Dashboard/components/UiDropdownNewRequest/UiDropdownNewRequest.vue';

    @Component({
        components: {
            UiDropdownNewRequest,
            UiInputSelectbox,
            ListOptions,
            HeaderWrapper,
            SearchButton
        }
    })
    export default class DashboardHeader extends Vue {
        @Prop() value: any;

        get filterItems() {
            return [
                {
                    name: this.$t('DASHBOARD.ALL'),
                    id: 'ALL'
                },
                {
                    name: this.$t('DASHBOARD.LIVE'),
                    id: 'LIVE'
                },
                {
                    name: this.$t('DASHBOARD.INCORPORATION'),
                    id: 'INCORPORATION'
                },
                {
                    name: this.$t('DASHBOARD.UNCONFIRMED'),
                    id: 'UNCONFIRMED'
                },
                {
                    name: this.$t('DASHBOARD.LIQUIDATING'),
                    id: 'LIQUIDATING'
                }
            ];
        }

        get filter() {
            return this.value;
        }

        set filter(v) {
            this.$emit('input', v);
        }

        get url() {
            return `${process.env.VUE_APP_FUNNEL_URL}soort_oprichting?session=${this.$store.state.userStore.session.id}`;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .dashboard-header {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        @include breakpoint-up(sm) {
            flex-direction: row;
        }

        .header-title {
            @include fs-medium;
            @include font-size($h1-font-sizes);
        }
    }

    .tools {
        display: flex;
        @include breakpoint-down(sm) {
            margin-left: auto;
            margin-top: 2 * $margin-default;
        }

        > div {
            margin-right: $margin-default;
        }
    }

    .search-button {
        margin: 0 $margin-default;
    }

    .edit-button {
        @include breakpoint-down(sm) {
            padding: 0 6px !important;
        }

        .ui-icon {
            margin-top: 4px;
        }
    }

</style>
