<template>
    <div>
        <UiInputSelectbox
            v-model="selected"
            :label="$t(label)"
            :preferred="preferred"
            :tooltip="tooltip"
            :rules="rules"
            expanded
            class="mt-5"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Country, Countries } from '@/components/UiFormInputs/UiInputCountry/country.types';
    import countriesService from './countries.service';
    import UiInputSelectbox from '@/components/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';

    @Component({
        components: {
            UiInputSelectbox
        }
    })
    export default class UiInputCountry extends Vue {
        @Prop() value!: any;
        @Prop() label!: string;
        @Prop() rules!: string;
        @Prop({ default: '' }) tooltip!: string;
        @Prop() invertOptions!: boolean;
        @Prop({ default: () => [] }) countries!: Country[];

        countriesService: typeof countriesService = countriesService;

        async created() {
            if (this.countries?.length === 0) {
                await this.countriesService.getCountries();
            }

            if (typeof this.value === 'string' && this.value !== '') {
                const country = this.countriesService.countries
                    .find((country) => country.id === this.value);

                if (country) {
                    this.$emit('input', country);
                }
            }
        }

        get preferred(): Countries[] {
            return this.invertOptions
                ? this.countriesService.residencyCountries
                : this.countriesService.preferredCountries;
        }

        get selected() {
            return this.value;
        }

        set selected(v: any) {
            this.$emit('input', v);
        }
    }
</script>
