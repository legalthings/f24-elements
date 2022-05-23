<template>
    <div class="container">
        <UiHeader>
            I'm a header
        </UiHeader>
        <section class="section">
            <p>
                Icon example:
            </p>
            <UiIcon icon="add" />
        </section>

        <section class="section">
            <ValidationObserver>
                <UiInputCountry
                    v-model="data.country"
                    label="Country"
                />

                <UiInputText
                    v-model="data.text"
                    label="Input text"
                    class="mt-5"
                />

                <UiInputSelectbox
                    v-model="data.select"
                    label="Input select"
                    class="mt-5"
                />

                <UiInputCheckbox
                    v-model="data.check"
                    label="Input check"
                    class="mt-5"
                />

                <UiInputRadio
                    v-model="data.radio"
                    label="Input radio"
                    :inline="true"
                    class="mt-5"
                />
                <UiInputUpload
                    v-model="data.upload"
                    label="Input upload"
                    :inline="true"
                    class="mt-5"
                />
                <UiInputDatepicker
                    v-model="data.date"
                    label="Input upload"
                    :inline="true"
                    class="mt-5"
                />
                <UiInputAddress
                    v-model="data.address"
                    class="mt-6"
                />
            </ValidationObserver>

            <UiLanguageSelector class="mt-5" />
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UiInputText from '@/components/UiFormInputs/UiInputText/UiInputText.vue';
    import UiLanguageSelector from '@/components/UiLanguageSelector/UiLanguageSelector.vue';
    import UiInputSelectbox from '@/components/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
    import UiInputCheckbox from '@/components/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
    import UiInputRadio from '@/components/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import UiInputUpload from '@/components/UiFormInputs/UiInputUpload/UiInputUpload.vue';
    import UiInputDatepicker from '@/components/UiFormInputs/UiInputDatepicker/UiInputDatepicker.vue';
    import UiInputAddress from '@/components/UiFormInputs/UiInputAddress/UiInputAddress.vue';
    import UiHeader from '@/components/UiHeader/UiHeader.vue';
    import UiInputCountry from '@/components/UiFormInputs/UiInputCountry/UiInputCountry.vue';

    @Component({
        components: {
            UiInputCountry,
            UiHeader,
            UiInputAddress,
            UiInputDatepicker,
            UiInputUpload,
            UiInputRadio,
            UiInputCheckbox,
            UiInputSelectbox,
            UiLanguageSelector,
            UiInputText
        }
    })
    export default class Home extends Vue {
        data: any = {
            address: {}
        };

        created() {
            this.$buefy.toast.open('Renatex');
        }
    }
</script>
