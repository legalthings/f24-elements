<template>
    <ul class="usp-list">
        <slot />
    </ul>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class UspList extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .usp-list {

        li {
            list-style: none;
            font-weight: bold;
            position: relative;
            padding-left: 3 * $margin-default;
            margin-bottom: 3 * $margin-default;

            &:before {
                left: 0;
                width: 22px;
                content: '';
                height: 22px;
                mask-size: 22px;
                position: absolute;
                background-size: 100%;
                background-color: $color-green;
                mask: url("../../../assets/icons/common/icon-check.svg");
            }
        }
    }
</style>
