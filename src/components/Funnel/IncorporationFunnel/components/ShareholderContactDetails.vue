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

        <div class="columns mg-top-30">
            <b-field
                :label="$t('FUNNEL.SHAREHOLDER.COUNTRY_CODE')"
                class="country-code column is-3"
            >
                <vue-country-code
                    v-model="value.countryCode"
                    :preferred-countries="['nl', 'be', 'de', 'gb', 'fr', 'es']"
                    :default-country="value.countryCode.iso2"
                    @onSelect="onCountrySelect"
                />
            </b-field>

            <UiInputText
                v-model="value.phoneNumber"
                :label="$t('FUNNEL.SHAREHOLDER.PERSONAL_PHONE_NUMBER')"
                class="column"
                rules="required|numeric"
            />
        </div>

        <UiInputText
            v-model="value.email"
            :label="$t('FUNNEL.SHAREHOLDER.PERSONAL_EMAIL')"
            rules="required|email"
        />

        <UiInputAddress
            v-model="value.address"
            class=" mg-top-40"
        />
    </ValidationObserver>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import UiInputAddress from '@/components/Global/UiFormInputs/UiInputAddress/UiInputAddress.vue';

    @Component({
        components: { UiInputAddress, UiInputText }
    })
    export default class ShareholderContactDetails extends Vue {
        @Prop() value!: any;
        @Prop() length!: number;
        @Prop() index!: number;

        created() {
            if (!this.value.countryCode) {
                this.value.countryCode = {
                    name: 'Netherlands (Nederland)',
                    iso2: 'NL',
                    dialCode: '31',
                    preferred: true
                };
            }
        }

        onCountrySelect(v: any) {
            this.value.countryCode = v;
            this.$emit('input', this.value);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .country-code {
        z-index: 100;

        /deep/ .label {
            margin: 0 0 5px;
        }

        .vue-country-select {
            width: 100%;
            border-color: #c0ceda;
            border-radius: 4px;
            border-width: 2px;
        }

        /deep/ .dropdown {
            z-index: 9;

            .dropdown-item {
                padding: $margin-default;
            }
        }
    }
</style>
