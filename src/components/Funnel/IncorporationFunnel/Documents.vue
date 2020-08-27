<template>
    <component
        :is="component"
        ref="components"
        v-model="value[data.progress.parentIndex]"
        :data="data"
        :steps-definition="stepsDefinition"
        :helper="helper"
    />
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import HoldingUpsellBlock from '@/components/Funnel/IncorporationFunnel/components/HoldingUpsellBlock.vue';
    import FunnelService from '@/services/funnel-service';
    import DocumentsBlock from '@/components/Funnel/IncorporationFunnel/components/DocumentsBlock.vue';
    import formOptionsService from '@/services/form-options-service';

    @Component({
        components: { DocumentsBlock, HoldingUpsellBlock }
    })
    export default class Shareholders extends Vue {
        @Prop() data!: any;
        @Prop() value!: any;
        @Prop() stepsDefinition;
        @Prop() helper!: FunnelService;

        $refs!: any;
        $parent!: any;

        componentMap: any = [
            () => import('@/components/Funnel/IncorporationFunnel/components/HoldingUpsellBlock.vue'),
            () => import('@/components/Funnel/IncorporationFunnel/components/DocumentsBlock.vue')
        ];

        get component() {
            return this.componentMap[this.data.progress.parentIndex];
        }

        scrollToTop() {
            const top = this.$refs.components.$el.offsetTop;
            formOptionsService.scrollToPosition(top);
        }

        nextStep() {
            if (this.data.steps.length > this.data.progress.parentIndex + 1) {
                this.data.progress.parentIndex++;
                this.scrollToTop();
            } else {
                this.$router.push({ name: 'incorporation-overview' });
            }
        }

        previousStep() {
            if (this.data.progress.parentIndex > 0) {
                this.data.progress.parentIndex--;
                this.scrollToTop();
            } else {
                this.$router.push({ name: 'incorporation-details' });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /deep/ .stepper-grid {

        &:not(.is-open) {
            opacity: .3;
        }
    }

    /deep/ .stepper-header-title {
        color: $color-blue-darker;
        @include font-size($h3-font-sizes);
    }
</style>
