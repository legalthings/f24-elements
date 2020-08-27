<template>
    <div class="ui-list-header">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    @import '~css/_imports';

    .ui-list-header {
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
    }
</style>
