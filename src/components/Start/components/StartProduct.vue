<template>
    <div>
        <h1 class="title">
            What do you want to do?
        </h1>
        <div class="product-options">
            <router-link
                v-for="item in data.products"
                :key="item.slug"
                :to="{name: 'start-incorporation', params: {product: item.slug}}"
                class="card-link"
            >
                <UiCardOptional>
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
                        <b-button
                            outlined
                            rounded
                            type="is-primary is-padding-small"
                        >
                            Start oprichting
                        </b-button>
                    </template>
                </UiCardOptional>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiCardOptional from '@/components/Global/UiCardOptional/UiCardOptional.vue';

    @Component({
        components: { UiCardOptional }
    })
    export default class StartProduct extends Vue {
        @Prop() data!: any;
    }
</script>
