<template>
    <span>
        <template v-if="isRouter">
            <router-link :to="url">
                <slot />
            </router-link>
        </template>
        <template v-else>
            <a
                :href="url"
                :target="blank ? '_blank' : ''"
            >
                <slot />
            </a>
        </template>
    </span>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiButton extends Vue {
        @Prop({ default: false }) isRouter: any;
        @Prop() url!: any;
        @Prop({ default: false }) blank!: boolean;
    }
</script>

<style lang="scss" scoped>
    span a {
        display: flex;
    }
</style>
