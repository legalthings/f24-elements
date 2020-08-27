<template>
    <div class="tooltip">
        <div class="is-flex">
            <slot />
            <UiIcon
                class="tooltip"
                icon="more-info"
                @click="isActive = !isActive"
            />
        </div>
        <b-notification :active.sync="isActive">
            {{ tooltip }}
        </b-notification>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class UiTooltip extends Vue {
        @Prop() private tooltip!: string;

        isActive = false;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .ui-icon {
        cursor: pointer;
        margin-left: $margin-default;
    }

    .notification {
        margin-top: $margin-default;
    }
</style>
