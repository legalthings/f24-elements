<template>
    <div
        :class="{'is-mobile-right':isMobileRight}"
        class="best-seller"
    >
        <p
            class="stripe"
            v-html="$t('BEST_SELLER.LABEL')"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class BestSeller extends Vue {
        @Prop() private isMobileRight!: boolean;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .best-seller {
        overflow: hidden;
        position: relative;
        width: 100px;
        height: 100px;
    }

    .stripe {
        width: 150px;
        text-align: center;
        position: absolute;
        background: $color-green;
        transform: rotate(-45deg);
        color: $color-gray-00;
        line-height: 14px;
        font-size: 12px;
        padding: 4px 0;
        left: -44px;
        top: 10px;

        .is-mobile-right & {

            @include breakpoint-down(sm) {
                transform: rotate(45deg);
                left: auto;
                top: 6px;
            }
        }
    }
</style>
