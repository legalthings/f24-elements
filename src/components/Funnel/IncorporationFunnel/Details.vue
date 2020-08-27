<template>
    <div>
        <div class="header-content has-text-centered mg-tb-40">
            <h1 class="is-size-3">
                {{ $t('FUNNEL.DETAILS.PAGE_TITLE') }}
            </h1>
        </div>

        <ActivitiesBlock
            v-model="value[0]"
            :active="true"
            :index="0"
            :data="data"
            :helper="helper"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import ActivitiesBlock from '@/components/Funnel/IncorporationFunnel/components/ActivitiesBlock.vue';
    import FunnelService from '@/services/funnel-service';

    @Component({
        components: { ActivitiesBlock }
    })
    export default class Shareholders extends Vue {
        @Prop() data!: any;
        @Prop() value!: any;
        @Prop() stepsDefinition;
        @Prop() helper!: FunnelService;

        $refs!: {
            $el: any;
        };

        $parent!: any;

        nextStep() {
            this.$router.push({ name: 'incorporation-documents' });
        }

        previousStep(index: number) {
            this.$router.push({ name: 'incorporation-shareholders' });
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
