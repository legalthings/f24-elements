<template>
    <span :style="{background: color}">
        {{ symbol }}
    </span>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { getShareTypeSymbol } from '@/helpers/organizations.helper';
    import { ColorHelper } from '@/helpers/utility.helper';

    @Component
    export default class ShareSymbol extends Vue {
        @Prop() asset!: string;

        get symbol() {
            return getShareTypeSymbol(this.asset);
        }

        get color() {
            return ColorHelper.getHex(this.asset);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    span {
        @include fs-medium;
        min-width: 52px;
        display: inline-block;
        text-align: center;
        margin-right: $margin-default;
        color: $color-gray-00;
        padding: $margin-default / 2 0;
        border-radius: $border-radius / 2;
        @include font-size($small-font-sizes);
    }
</style>
