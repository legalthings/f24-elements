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

        <div class="columns mg-top-10">
            <UiInputSelectbox
                v-model="value.gender"
                :items="genders"
                expanded
                :placeholder="$t('USER.SELECT_OPTION')"
                :label="$t('GLOBAL.SALUTATION')"
                class="column is-3"
            />

            <UiInputText
                v-model="value.firstName"
                :label="$t('USER.FIRST_NAME')"
                class="column"
            />
        </div>

        <UiInputText
            v-model="value.lastName"
            :label="$t('USER.LAST_NAME')"
            class="mg-top-10"
        />

        <UiInputDatepicker
            v-model="value.birthdate"
            :label="$t('USER.BIRTH_DATE')"
            class="mg-top-30"
            :min="minimumAge"
            :max="maximumAge"
            :default-date="maximumAge"
            :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_BIRTH_DATE_TOOLTIP')"
        />

        <UiInputSelectbox
            v-model="value.birthCountry"
            :label="$t('USER.BIRTH_COUNTRY')"
            :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_BIRTH_COUNTRY_TOOLTIP')"
            :items="countries"
            expanded
            :placeholder="$t('USER.SELECT_OPTION')"
            class="mg-top-40"
        />

        <UiInputText
            v-if="!value.doesNotHaveBSN"
            v-model="value.bsn"
            :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BSN_QUESTION')"
            :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BSN_TOOLTIP')"
            class="mg-top-40"
            rules="required|numeric|min:9"
            max="9"
        />

        <UiInputCheckbox
            v-model="value.doesNotHaveBSN"
            class="mg-top-20"
            :class="{'mg-top-40': value.doesNotHaveBSN}"
            :label="value.doesNotHaveBSN ? $t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BSN_QUESTION') : ''"
            :tooltip="value.doesNotHaveBSN ? $t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BSN_TOOLTIP') : ''"
            :items="[{name:$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_DUTCH_BSN_QUESTION_2'), id: true}]"
            max="9"
        />

        <!-- Conditional if primary shareholder does not live in NL -->
        <div v-if="!value.netherlandsResidence">
            <UiInputSelectbox
                v-model="value.countryResidence"
                :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_COUNTRY_RESIDENCE_QUESTION')"
                :items="countries"
                rules="required|highRickCountry"
                expanded
                :placeholder="$t('USER.SELECT_OPTION')"
                class="mg-top-40"
            />

            <UiInputSelectbox
                v-model="value.maritalStatus"
                :label="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_MARITAL_STATUS_QUESTION')"
                :tooltip="$t('FUNNEL.SHAREHOLDER.SHAREHOLDER_MARITAL_STATUS_TOOLTIP')"
                :items="maritalStatus"
                expanded
                :placeholder="$t('USER.SELECT_OPTION')"
                class="mg-top-40"
            />
        </div>
    </ValidationObserver>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import UiInputDatepicker from '@/components/Global/UiFormInputs/UiInputDatepicker/UiInputDatepicker.vue';
    import UiInputCheckbox from '@/components/Global/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
    import formOptionsService from '@/services/form-options-service';

    @Component({
        components: { UiInputCheckbox, UiInputDatepicker, UiInputText, UiInputSelectbox, UiInputRadio }
    })
    export default class ShareholderPersonalInfo extends Vue {
        @Prop() value!: any;
        @Prop() length!: number;
        @Prop() index!: number;

        get genders() {
            return formOptionsService.genders;
        }

        get minimumAge() {
            const today = new Date();
            return new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
        }

        get maximumAge() {
            const today = new Date();
            return new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        }

        get countries() {
            return formOptionsService.countries;
        }

        get maritalStatus() {
            return formOptionsService.maritalStatus;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
</style>
