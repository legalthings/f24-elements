<template>
    <div
        v-if="actionPoints"
        :class="{'label': label}"
        class="action-points"
    >
        <span class="amount">
            {{ actionPoints }}
        </span>

        <span v-if="label">
            {{ $tc('CARD.ACTION_POINT', actionPoints) }}
        </span>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class CardActionPoints extends Vue {
        @Prop() actionPoints!: number;
        @Prop({ default: true }) label!: boolean;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .action-points {
        @include fs-medium;
        color: $color-gray-00;
        @include font-size($small-font-sizes);
        padding: 6px 10px 6px 3px;
        border-radius: $border-radius;

        &.label {
            background: rgba($color-gray-100, .3);

            .amount {
                padding: 3px 4px 2px 8px;
            }
        }

        .amount {
            text-align: center;
            padding: 3px 8px;
            margin-right: 6px;
            background: $color-red;
            border-radius: $border-radius;
            box-shadow: 0 1px 2px 0 rgba($color-gray-100, .3);
        }
    }
</style>
