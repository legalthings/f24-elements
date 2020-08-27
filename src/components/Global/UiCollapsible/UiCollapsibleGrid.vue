<template>
    <UiCollapsible
        :active="active"
        :header="header"
        :step-id="stepId"
        :exclude="exclude"
        :disabled="disabled"
        :height="height"
        @setActive="onSetActive"
        @excludeStep="excludeStep"
    >
        <template #header>
            <slot name="header" />
        </template>
        <template #header-extra>
            <slot name="header-extra" />
        </template>
        <template #content>
            <UiGridA>
                <template #menu>
                    <slot name="menu" />
                </template>
                <template #content>
                    <slot name="content" />
                </template>
            </UiGridA>
        </template>
    </UiCollapsible>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiGridA from '@/components/Global/Grid/UiGridA/UiGridA.vue';
    import UiCollapsible from '@/components/Global/UiCollapsible/UiCollapsible.vue';

    @Component({
        components: { UiCollapsible, UiGridA }
    })
    export default class StepperGrid extends Vue {
        @Prop() stepId!: string;
        @Prop({ default: true }) header!: boolean;
        @Prop({ default: false }) active!: boolean;
        @Prop({ default: false }) exclude!: boolean;
        @Prop({ default: false }) disabled!: boolean;
        @Prop({ default: false }) height!: boolean;

        onSetActive() {
            this.$emit('setActive', this.stepId);
        }

        excludeStep() {
            this.$emit('excludeStep');
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .grid-a {
        margin: 0 (- 2 * $margin-default);

        @include breakpoint-down(md) {
            margin-top: - 2 * $margin-default;
        }
    }
</style>
