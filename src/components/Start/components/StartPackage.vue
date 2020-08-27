<template>
    <div>
        <h1 class="title">
            Choose your service package
        </h1>
        <div class="product-options">
            <router-link
                v-for="item in data.productPackages"
                :key="item.slug"
                :to="{name: 'start-incorporation', params: {product: data.product.slug, type: $route.params.type, package: item.slug}}"
                class="card-link"
            >
                <UiCardOptional :best-seller="item.best_seller">
                    <template #icon>
                        <UiIcon
                            :icon="item.slug"
                            type="service"
                            size="110"
                        />
                    </template>
                    <template #title>
                        {{ $t(`START.${item.slug.toUpperCase()}.TITLE`) }}
                    </template>
                    <template #description>
                        {{ $t(`START.${item.slug.toUpperCase()}.DESCRIPTION`) }}
                    </template>
                    <template #footer>
                        <PriceLabel
                            :price="item.price"
                            :price-before="item.normal_price"
                        />
                    </template>
                </UiCardOptional>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PriceLabel from '@/components/Global/PriceLabel/PriceLabel.vue';
    import UiCardOptional from '@/components/Global/UiCardOptional/UiCardOptional.vue';

    @Component({
        components: { UiCardOptional, PriceLabel }
    })
    export default class StartPackage extends Vue {
        @Prop() data!: any;
    }
</script>
