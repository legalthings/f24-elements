<template>
    <ValidationObserver
        ref="observer"
        class="field"
        :class="{'shareholder-jointly' : length > 1}"
        tag="form"
    >
        <h4 v-if="length > 1">
            Director {{ index + 1 }}
        </h4>

        <UiInputRadio
            v-model="value.dutchLanguage"
            :inline="true"
            :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_DIRECTOR_DUTCH_QUESTION', {director: directorLabel})"
            :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_TOOLTIP')"
            class="mt-4"
        />

        <UiInputRadio
            v-if="$f24.isFalseAndNotUndefined(value.dutchLanguage)"
            v-model="value.englishLanguage"
            :inline="true"
            :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_HOLDING_DIRECTOR_ENGLISH_QUESTION', {director: directorLabel})"
            :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_ENGLISH_TOOLTIP')"
            class="mg-top-50"
            rules="required|isTrue"
        />

        <UiInputRadio
            v-model="value.netherlandsResidence"
            :inline="true"
            :items="netherlandsResidenceOptions"
            :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_NETHERLANDS_RESIDENCE_QUESTION')"
            :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_NETHERLANDS_RESIDENCE_TOOLTIP')"
            class="mg-top-50"
        />

        <UiInputRadio
            v-if="$f24.isFalseAndNotUndefined(value.netherlandsResidence)"
            v-model="value.signInNetherlands"
            :inline="true"
            :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_SIGN_IN_NETHERLANDS_QUESTION')"
            :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_SIGN_IN_NETHERLANDS_TOOLTIP')"
            class="mg-top-50"
            rules="required|isTrue"
        />
    </ValidationObserver>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import i18n from '@/dependencies/i18n';

    @Component({
        components: { UiInputRadio }
    })
    export default class ShareholderGeneralInformation extends Vue {
        @Prop() value!: any;
        @Prop() length!: number;
        @Prop() index!: number;
        @Prop() shareholderType!: string;

        get shareholderOptions() {
            return {
                shareholderType: [
                    {
                        name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_TYPE_OPTION_1'),
                        id: 'natural'
                    },
                    {
                        name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_TYPE_OPTION_2'),
                        id: 'holding'
                    }
                ]
            };
        }

        get netherlandsResidenceOptions() {
            return [
                {
                    name: i18n.t('GLOBAL.TRUE'),
                    id: true
                },
                {
                    name: i18n.t('GLOBAL.FALSE'),
                    id: false
                },
                {
                    name: i18n.t('FUNNEL.SHAREHOLDER.SHAREHOLDER_NETHERLANDS_RESIDENCE_OPTION'),
                    id: 'POSTAL_ADDRESS'
                }
            ];
        }

        get directorLabel() {
            return this.shareholderType === 'natural' ? i18n.t('FUNNEL.GLOBAL.SHAREHOLDER') : i18n.t('FUNNEL.GLOBAL.DIRECTOR');
        }

        @Watch('value.netherlandsResidence')
        onNetherlandsResidence() {
            delete this.value.signInNetherlands;
            this.$emit('input', this.value);
        }

        @Watch('value.dutchLanguage')
        onDutchLanguage() {
            delete this.value.englishLanguage;
            this.$emit('input', this.value);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
