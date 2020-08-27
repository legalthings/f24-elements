<template>
    <ul
        class="ui-summary-blocks columns is-multiline"
        :class="variant"
    >
        <li
            v-for="item in summaryData"
            :key="item.label"
            class="column is-one-quarter-desktop is-one-fifth"
        >
            <div class="box">
                <p class="summary-label">
                    {{ item.label }}
                </p>
                <p class="summary-value">
                    {{ item.value }}
                </p>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiSummaryBlocks extends Vue {
        @Prop() summaryData!: Array<any>;
        @Prop({ default: 'a' }) variant!: string;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .ui-summary-blocks {
        display: flex;

        .box {
            height: 100%;
            text-align: center;
            @include box-shadow();
        }

        &.a {
            .summary-label {
                @include fs-medium;
                color: $color-blue-gray-02;
            }

            .summary-value {
                margin-top: $margin-default;
                @include font-size($h2-font-sizes);
            }
        }

        &.b {
            .box {
                display: flex;
                flex-direction: column-reverse;
            }

            .summary-label {
                @include fs-medium;
                color: $color-blue-gray-02;
                margin-top: $margin-default;
                @include font-size($small-font-sizes);
            }

            .summary-value {
                @include fs-medium;
                @include font-size($h2-font-sizes);
            }
        }
    }

</style>
