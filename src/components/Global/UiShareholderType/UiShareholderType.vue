<template>
    <span
        class="icon-wrapper"
        :style="style"
    >
        <template v-if="type === 'natural'">
            <UiIcon
                :size="size / 2"
                icon="account"
                type="custom"
                color="white"
            />
        </template>
        <template v-if="type === 'holding'">
            <i
                class="far fa-building"
                :style="fontSize"
            />
        </template>
    </span>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ColorHelper } from '@/helpers/utility.helper';

    @Component
    export default class UiShareholderType extends Vue {
        @Prop() type!: string;
        @Prop() name!: string;
        @Prop({ default: 40 }) size!: number;

        get color() {
            if (!this.name) return;
            return ColorHelper.getHex(this.name);
        }

        get fontSize() {
            return this.size / 2 + 'px';
        }

        get style() {
            return {
                background: this.color,
                'font-size': this.fontSize,
                width: this.size + 'px',
                height: this.size + 'px'
            };
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .icon-wrapper {
        background: $color-blue;
        border-radius: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: $margin-default;
        color: $color-gray-00;
        font-size: 18px;
    }
</style>
