<template>
    <div class="ui-ribbon">
        <span
            class="stripe"
            :style="style"
        >
            <slot />
        </span>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiRibbon extends Vue {
        @Prop({ default: 'right' }) private config!: any;

        get style() {
            const position = this.config && this.config.position === 'left' ? -45 : 45;
            return {
                transform: `rotate(${position}deg`
            };
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .ui-ribbon {
        overflow: hidden;
        position: relative;
        width: 130px;
        height: 130px;
    }

    .stripe {
        width: 180px;
        text-align: center;
        position: absolute;
        background: $color-green;
        color: $color-gray-00;
        line-height: 14px;
        font-size: 12px;
        padding: 8px 0;
        top: 18px;
    }
</style>
