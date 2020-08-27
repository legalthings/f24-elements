<template>
    <div>
        <div class="header-content has-text-centered">
            <h1 class="is-size-3">
                {{ $t('FUNNEL.SHAREHOLDER.PAGE_TITLE') }}
            </h1>
            <b-button
                slot="header-extra"
                type="is-primary has-icon"
                rounded
                @click="addShareholder"
            >
                <UiIcon
                    icon="add"
                    color="white"
                />
                {{ $t('FUNNEL.GLOBAL.ADD_SHAREHOLDER') }}
            </b-button>
        </div>

        <component
            :is="getComponent(step.slug)"
            v-for="(step, index) in data.steps"
            :key="index"
            :ref="index"
            v-model="value[index]"
            :step-data="value"
            :active="getIsActive(index)"
            :index="index"
            :data="data"
            :helper="helper"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import FunnelService from '@/services/funnel-service';

    @Component
    export default class Shareholders extends Vue {
        @Prop() data!: any;
        @Prop() value!: any;
        @Prop() stepsDefinition;
        @Prop() helper!: FunnelService;

        $refs!: {
            $el: any;
        };

        $parent!: any;

        componentMap: any = {
            shareholder: () => import('@/components/Funnel/IncorporationFunnel/components/ShareholderBlock.vue'),
            'share-distribution': () => import('@/components/Funnel/IncorporationFunnel/components/DistributionBlock.vue')
        };

        mounted() {
            setTimeout(() => this.scrollToTop(this.data.progress.parentIndex), 300);
        }

        removeShareholder(index: number) {
            this.data.progress.childIndex = 0;
            this.$parent.removeShareholder(index);
        }

        addShareholder() {
            this.$parent.addShareholder();
        }

        getComponent(slug: string) {
            return this.componentMap[slug];
        }

        getIsActive(index: number) {
            return this.data.progress.parentIndex === index;
        }

        nextRouteStep() {
            this.$router.push({ name: 'incorporation-details' });
        }

        scrollToTop(index: number) {
            const top = this.$refs[index][0] && this.$refs[index][0].$el.offsetTop;
            window.scrollTo({
                top: top + 10,
                left: 0,
                behavior: 'smooth'
            });
        }

        nextStep() {
            if (this.value.length > this.data.progress.parentIndex + 1) {
                this.data.progress.childIndex = 0;
                this.data.progress.parentIndex++;
                this.scrollToTop(this.data.progress.parentIndex);
            } else {
                this.nextRouteStep();
            }
        }

        previousStep() {
            if (this.data.progress.parentIndex > 0) {
                this.data.progress.parentIndex--;
                this.data.progress.childIndex = 2;
                this.scrollToTop(this.data.progress.parentIndex);
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
        margin: $margin-default 0 3 * $margin-default;

        @include breakpoint-down(md) {
            flex-direction: column;
            margin: 0 0 2 * $margin-default;

            h1 {
                margin-bottom: 2 * $margin-default;
            }
        }
    }

    /deep/ .stepper-grid {

        &:not(.is-open) {
            /*opacity: .3;*/
        }
    }

    /deep/ .stepper-header-title {
        color: $color-blue-darker;
        @include font-size($h3-font-sizes);
    }
</style>
