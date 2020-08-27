<template>
    <div class="sorting-bar">
        <div class="order">
            {{ $t('DASHBOARD.COMPANY_NAME') }}
        </div>
        <div class="info">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import CardList from '@/components/Dashboard/components/CardList/CardList.vue';

    @Component({
        components: {
            CardList
        }
    })

    export default class SortingBar extends Vue {
        @Prop() type!: string;
        isSorted = false;

        toggleNameOrder() {
            this.isSorted = !this.isSorted;
            this.$emit('toggleSorting', { sorted: this.isSorted, type: this.type });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    h2 {
        @include fs-medium;
    }

    .sorting-bar {
        display: flex;
        @include fs-medium;
        padding: $margin-default / 2 $margin-default;
        margin: $margin-default 0;
        color: $color-blue-gray-02;
        border-radius: $border-radius;
        @include font-size($small-font-sizes);
        background: rgba($color-blue-gray-02, .1);
        justify-content: space-between;
        align-items: center;

        @include breakpoint-down(md) {
            display: none;
        }

        .order {
            display: flex;
            align-items: center;
            flex: .4;
            padding-left: 13 * $margin-default;

            &.is-sorted {
                .ui-icon {
                    transform: rotate(-180deg);
                }
            }

            .ui-icon {
                margin-left: 4px;
                transition: transform .3s ease-in-out;
            }

            @include breakpoint-down(lg) {
                flex: .55;
            }
        }

        .info {
            flex: 1;
            display: flex;
            align-items: center;

            div {
                margin-right: 6 * $margin-default;

                &:first-child {
                    margin-right: 14 * $margin-default;
                }
            }
        }
    }
</style>
