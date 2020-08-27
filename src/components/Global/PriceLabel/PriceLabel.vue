<template>
    <div class="price-label">
        <p
            v-if="priceBefore"
            class="before"
        >
            {{ $f24.convertToLocaleString(priceBefore) }}
        </p>
        <p class="price">
            <span v-if="plus">
                +
            </span>
            {{ $f24.convertToLocaleString(price) }}
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import BestSeller from '@/components/Global/BestSeller/BestSeller.vue';

    @Component({
        components: { BestSeller }
    })
    export default class PriceLabel extends Vue {
        @Prop() price!: string;
        @Prop() priceBefore!: string;
        @Prop() plus!: boolean;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .price-label {
        display: flex;
        align-items: center;
    }

    .price {
        color: $color-blue-darker;
        font-weight: bold;
        @include font-size($h2-font-sizes);
        margin: 0 $margin-default;
    }

    .before {
        font-weight: bold;
        color: $color-red;
        text-decoration: line-through;
        @include font-size($big-font-sizes);
    }
</style>
