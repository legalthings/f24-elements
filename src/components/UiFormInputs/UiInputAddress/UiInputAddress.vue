<template>
    <div>
        <div class="columns">
            <UiInputText
                v-model="value.postalCode"
                :label="$t('ADDRESS.POSTAL_CODE')"
                class="column"
                :rules="isRequired ? 'required' : ''"
            />
            <UiInputText
                v-model="value.number"
                :label="$t('ADDRESS.NUMBER')"
                class="column is-3"
                :rules="isRequired ? 'required|numeric' : 'numeric'"
            />
            <UiInputText
                v-model="value.addition"
                :label="$t('ADDRESS.ADDITION')"
                class="column is-3"
                rules=""
            />
        </div>
        <div
            class="columns"
            :class="{'is-loading': loading}"
        >
            <span v-if="loading">
                <b-loading
                    :active="true"
                    :is-full-page="false"
                    :can-cancel="false"
                />
            </span>
            <UiInputText
                v-model="value.street"
                :label="$t('ADDRESS.STREET')"
                class="column is-6"
                :rules="isRequired ? 'required': ''"
            />
            <UiInputText
                v-model="value.city"
                :label="$t('ADDRESS.CITY')"
                class="column is-6"
                :rules="isRequired ? 'required' : ''"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import UiInputText from '../UiInputText/UiInputText.vue';
    import { zipcode } from '../../../dependencies/validators';
    import { numeric } from 'vee-validate/dist/rules';
    import { cloneDeep } from 'lodash';

    @Component({
        components: { UiInputText }
    })
    export default class UiInputAddress extends Vue {
        @Prop() value: any;
        @Prop({ default: true }) isRequired!: boolean;
        @Prop({ default: false }) preventLookup!: boolean;
        @Prop() size: any;
        @Prop() api!: any;

        lastInput: any = undefined;
        loading = false;

        get isDutchZipCode() {
            return zipcode.validate(this.value?.postalCode);
        }

        get isNumber() {
            return numeric.validate(this.value?.number);
        }

        normalizePostalCode(p: string) {
            return p.replace(/ /gi, '').toUpperCase();
        }

        setStreetAndCity(c: any) {
            this.value.street = cloneDeep(c.openbareruimte);
            this.value.city = cloneDeep(c.woonplaats);
        }

        async setAddress() {
            this.loading = true;
            const params = [
                {
                    key: 'postcode',
                    value: this.normalizePostalCode(this.value.postalCode)
                },
                {
                    key: 'number',
                    value: this.value.number
                }
            ];
            try {
                const { status, data } = await this.api.get('utils/bag', params);

                if (status === 200 && data.totalItemCount !== 0) {
                    this.setStreetAndCity(data._embedded.adres[0]);
                }
            } catch (e) {
                console.log(e);
            } finally {
                this.loading = false;
            }
        }

        shouldUpdate() {
            if (this.lastInput) {
                clearTimeout(this.lastInput);
                this.lastInput = null;
            }
            this.lastInput = setTimeout(() => {
                this.setAddress();
            }, 500);
        }

        @Watch('value.postalCode')
        @Watch('value.number')
        onDataChange() {
            if (this.isDutchZipCode && this.isNumber && !this.preventLookup) {
                this.shouldUpdate();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .columns.is-loading {
        position: relative;
    }
</style>
