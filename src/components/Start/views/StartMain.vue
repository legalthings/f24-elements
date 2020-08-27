<template>
    <div>
        <h1 class="title">
            Choose your service package
        </h1>
        <div class="product-options">
            <router-link
                v-for="item in startProducts"
                :key="item.slug"
                :to="{name: item.slug}"
                class="card-link"
            >
                <UiCardOptional :best-seller="item.best_seller">
                    <template #icon>
                        <UiIcon
                            :icon="item.slug"
                            type="service"
                            size="60"
                        />
                    </template>
                    <template #title>
                        {{ $t(`START.${item.slug.toUpperCase()}.TITLE`) }}
                    </template>
                    <template #description>
                        {{ $t(`START.${item.slug.toUpperCase()}.DESCRIPTION`) }}
                    </template>
                </UiCardOptional>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiCardOptional from '@/components/Global/UiCardOptional/UiCardOptional.vue';
    import PriceLabel from '@/components/Global/PriceLabel/PriceLabel.vue';

    @Component({
        components: { PriceLabel, UiCardOptional }
    })
    export default class StartMain extends Vue {
        @Prop() products!: Array<any>;
        @Prop() productList!: Array<any>;
        @Prop() startProducts!: Array<any>;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';
</style>
