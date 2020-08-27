<template>
    <div class="stepper">
        <HeaderStep
            v-for="(step, index) in steps"
            :key="index"
            :current="current"
            :index="index"
            :label="step.label"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { StepsTypes } from '@/types/steps.types';
    import HeaderStep from '@/components/Global/Header/HeaderStepper/HeaderStep.vue';

    @Component({
        components: { HeaderStep }
    })
    export default class HeaderStepper extends Vue {
        @Prop() steps!: Array<StepsTypes>;

        get current() {
            const index: any = this.steps.find((s: any) => s.slug === this.$route.name);
            return this.steps.indexOf(index);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .stepper {
        display: flex;
        flex-direction: row;
        background: rgba($color-gray-100, 0.2);
        border-radius: 32px;
        padding: $margin-default / 2;
    }
</style>
