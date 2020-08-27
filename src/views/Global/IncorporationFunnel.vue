<template>
    <div class="pre-incorporation">
        <HeaderFunnel>
            <HeaderStepper
                v-if="hasStepper"
                :steps="steps"
            />
        </HeaderFunnel>
        <div class="container">
            <section class="section">
                <router-view
                    v-model="stepData.steps"
                    :data="stepData"
                    :steps-definition="stepsDefinition"
                    :helper="helper"
                />
            </section>
        </div>
        <LanguageSelector class="mg-bottom-60" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import HeaderFunnel from '@/components/Global/Header/HeaderFunnel/HeaderFunnel.vue';
    import HeaderStepper from '@/components/Global/Header/HeaderStepper/HeaderStepper.vue';
    import { stepsDefinition } from '@/mocks/products-options';
    import alertService from '@/services/alert.service';
    import { Route } from 'vue-router';
    import LanguageSelector from '@/components/Global/LanguageSelector/LanguageSelector.vue';
    import i18n from '@/dependencies/i18n';
    import { storageHelper } from '@/helpers/storage.helper';
    import FunnelService from '@/services/funnel-service';
    import { FunnelStepDefinition, FunnelStepsDefinition } from '@/types/funnel.types';

    @Component({
        components: { LanguageSelector, HeaderFunnel, HeaderStepper }
    })
    export default class IncorporationFunnel extends Vue {
        stepsDefinition: FunnelStepsDefinition | any = {};
        helper;

        created() {
            const storage = storageHelper.get('STEPS');
            this.stepsDefinition = storage ? JSON.parse(storage) : stepsDefinition;
            this.redirectToCurrentStep();
            this.helper = new FunnelService(this.stepsDefinition);
        }

        redirectToCurrentStep() {
            if (this.$route.name !== this.stepsDefinition.currentSlug) {
                this.$router.push({ name: this.stepsDefinition.currentSlug });
            }
        }

        get stepData(): FunnelStepDefinition {
            return this.stepsDefinition.steps.find(s => s.slug === this.$route.name) ?? {};
        }

        removeShareholder(index: number) {
            const shareholders: any = this.stepsDefinition.steps.find(s => s.slug === 'incorporation-shareholders');
            if (shareholders) {
                shareholders.steps.splice(index, 1);
            }
            alertService.successMessage('Shareholder was removed');
        }

        addShareholder() {
            const shareholders: any = this.stepsDefinition.steps.find(s => s.slug === 'incorporation-shareholders');
            if (shareholders) {
                const beforeLastIndex = shareholders.steps.length - 1;
                shareholders.steps.splice(beforeLastIndex, 0, {
                    slug: 'shareholder'
                });
            }
            alertService.successMessage('A new shareholder was added');
        }

        // The main route steps you see in the header bar
        get steps() {
            return [
                {
                    label: i18n.t('FUNNEL.GLOBAL.STEP_SHAREHOLDERS'),
                    slug: 'incorporation-shareholders'
                },
                {
                    label: i18n.t('FUNNEL.GLOBAL.STEP_DETAILS'),
                    slug: 'incorporation-details'
                },
                {
                    label: i18n.t('FUNNEL.GLOBAL.STEP_DOCUMENTS'),
                    slug: 'incorporation-documents'
                }
            ];
        }

        get hasStepper() {
            return this.steps.map(s => (s.slug)).includes(this.$route.name as string);
        }

        @Watch('$route')
        onChange(to: Route) {
            const hasStep = !!this.stepsDefinition.steps.find(s => s.slug === to.name);
            if (!hasStep) return;
            this.stepsDefinition.currentSlug = to.name as string;
        }

        @Watch('stepsDefinition', { deep: true })
        onStepChange(value) {
            // TODO Save data to API, perhaps introduce a timer to avoid flooding the API on every letter the user type.
            storageHelper.set('STEPS', JSON.stringify(value));
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    /deep/ .buttons {
        justify-content: space-between;
        margin: 4 * $margin-default 0 1 * $margin-default;
    }

    /deep/ h1 {
        @include fs-medium;
    }
</style>
