<template>
    <ul class="overview-list">
        <li
            v-for="(item, i) in items"
            :key="i"
        >
            <div>
                <UiTooltip
                    v-if="item.tooltip"
                    :tooltip="item.tooltip"
                >
                    <h4> {{ item.label }}</h4>
                </UiTooltip>
                <h4 v-else>
                    {{ item.label }}
                </h4>
            </div>
            <div class="price">
                <PriceLabel
                    :price="item.price"
                    :price-before="item.originalPrice"
                />
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiTooltip from '@/components/Global/UiTooltip/UiTooltip.vue';
    import PriceLabel from '@/components/Global/PriceLabel/PriceLabel.vue';

    @Component({
        components: {
            PriceLabel,
            UiTooltip
        }
    })
    export default class ActivitiesBlock extends Vue {
        @Prop() items!: any;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .overview-list {
        margin: 3 * $margin-default $margin-default;

        @include breakpoint-down(sm) {
            margin: 3 * $margin-default 0;
        }

        li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2 * $margin-default;
            padding: $margin-default 2 * $margin-default;
            border-radius: $border-radius;

            @include breakpoint-down(sm) {
                flex-direction: column;
            }

            &:nth-child(odd) {
                background: rgba($color-gray-10, .6);
            }

        }

        h4 {
            color: $color-blue-darker;
            @include font-size($regular-font-sizes);
            @include fs-medium;
        }

        /deep/ .price-label {

            @include breakpoint-down(sm) {
                margin-top: $margin-default;
            }

            * {
                @include font-size($regular-font-sizes);
            }
        }
    }
</style>
