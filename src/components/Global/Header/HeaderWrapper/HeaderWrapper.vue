<template>
    <header class="header-wrapper">
        <slot />
    </header>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class HeaderWrapper extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .header-wrapper {
        height: 64px;
        display: flex;
        align-items: center;
        color: $color-gray-00;
        padding: 0 2 * $margin-default;
        background: url("../../../../assets/images/header/header-bg.svg") no-repeat right top, linear-gradient(93deg, $color-blue -46%, $color-blue-darker 64%);

        .bookkeeper & {
            background: linear-gradient(93deg, $color-purple -46%, $color-purple-dark 64%);
        }

        @include breakpoint-up(md) {
            height: 112px;
            padding: 0 5 * $margin-default;
        }
    }
</style>
