<template>
    <router-link :to="{name: config.name, params:config.params }">
        <span>
            <UiIcon icon="arrow-left" />
            {{ $t('BACK_BUTTON.LABEL') }} {{ config.label }}
        </span>
    </router-link>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class BackButton extends Vue {
        @Prop() config!: any;
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports.scss';

    a {
        display: inline-block;

        span {
            display: flex;
        }

        &:hover {
            color: $color-blue-darker;

            .ui-icon {
                fill: $color-blue-darker;
            }
        }
    }
</style>
