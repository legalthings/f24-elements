<template>
    <ul>
        <li
            v-for="(product) in productList"
            :key="product.id"
        >
            {{ product.name }}
        </li>
    </ul>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        components: {}
    })
    export default class ProcessProducts extends Vue {
        @Prop() organization!: any;
        products = this.organization.data.products ?? [];

        get productList() {
            let result: any = [];
            Object.keys(this.products).map(o => {
                const active = this.products[o].filter(p => p.count === 1);
                result = [...result, ...active];
            });
            return result;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    li {
        @include font-size($regular-font-sizes);
        margin-bottom: $margin-default;
    }
</style>
