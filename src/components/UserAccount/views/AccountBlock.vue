<template>
    <div v-if="dataFromApi">
        <EditableBlock
            class="mg-top-80"
            :is-valid="hasChanged"
            save-event-name="saveUserPersonalDetails"
            cancel-event-name="cancelUserPersonalDetails"
            @saveUserPersonalDetails="onSaveUserPersonalDetails"
            @cancelUserPersonalDetails="onCancelUserPersonalDetails"
        >
            <div slot="header">
                {{ $t('USER_ACCOUNT.PERSONAL_INFORMATION') }}
            </div>
            <div slot="content">
                <ul class="content-list">
                    <EditableBlockItem :label="$t('USER.EMAIL')">
                        <template #value>
                            {{ dataFromApi.email }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.email" />
                        </template>
                    </EditableBlockItem>
                    <EditableBlockItem :label="$t('USER.LANGUAGE')">
                        <template #value>
                            {{ language }}
                        </template>
                        <template #input>
                            <b-select
                                v-model="dataFromApiClone.locale"
                                icon="language"
                                icon-pack="fa"
                                expanded
                                :placeholder="$t('USER.SELECT_OPTION')"
                            >
                                <option
                                    v-for="language in languages"
                                    :key="language.name"
                                    :value="language.code"
                                >
                                    {{ language.name }}
                                </option>
                            </b-select>
                        </template>
                    </EditableBlockItem>
                </ul>
            </div>
        </EditableBlock>

        <EditableBlock
            v-if="dataFromApi"
            class="mg-top-80"
            :is-valid="hasChanged"
            save-event-name="saveUserDetails"
            cancel-event-name="cancelUserDetails"
            @saveUserDetails="onSaveUserDetails"
            @cancelUserDetails="onCancelUserDetails"
        >
            <div slot="header">
                {{ $t('USER_ACCOUNT.PERSONAL_DATA') }}
            </div>
            <div slot="content">
                <ul class="content-list">
                    <EditableBlockItem :label="$t('USER.GENDER')">
                        <template #value>
                            {{ getGender(dataFromApi.gender) }}
                        </template>
                        <template #input>
                            <div class="is-radio">
                                <b-radio
                                    v-for="gender in genders"
                                    :key="gender.name"
                                    v-model="dataFromApiClone.gender"
                                    name="gender"
                                    :native-value="gender.value"
                                >
                                    {{ gender.name }}
                                </b-radio>
                            </div>
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem
                        :can-edit="false"
                        :label="$t('USER.FIRST_NAME')"
                    >
                        <template #value>
                            {{ dataFromApi.first_name }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.first_name" />
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem
                        :can-edit="false"
                        :label="$t('USER.LAST_NAME')"
                    >
                        <template #value>
                            {{ dataFromApi.last_name }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.last_name" />
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem :label="$t('USER.BIRTH_DATE')">
                        <template
                            v-if="dataFromApi.birth_date"
                            #value
                        >
                            {{ $f24.formatDate(dataFromApi.birth_date) }}
                        </template>
                        <template #input>
                            <b-datepicker
                                v-model="dateOfBirth"
                                icon="calendar-day"
                                :placeholder="$t('USER.SELECT_OPTION')"
                            />
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem :label="$t('USER.BIRTH_COUNTRY')">
                        <template #value>
                            {{ getCountryName(dataFromApi.birth_country) }}
                        </template>
                        <template #input>
                            <b-select
                                v-model="dataFromApiClone.birth_country"
                                icon="globe-europe"
                                expanded
                                :placeholder="$t('USER.SELECT_OPTION')"
                            >
                                <option
                                    v-for="country in countries"
                                    :key="country.id"
                                    :value="country.id"
                                >
                                    {{ country.name }}
                                </option>
                            </b-select>
                        </template>
                    </EditableBlockItem>
                </ul>
            </div>
        </EditableBlock>

        <EditableBlock
            v-if="dataFromApi.address"
            :is-valid="hasChanged"
            class="mg-top-80"
            save-event-name="saveContactDetails"
            cancel-event-name="onCancelContactDetails"
            @saveContactDetails="onSaveContactDetails"
            @onCancelContactDetails="onCancelContactDetails"
        >
            <div slot="header">
                {{ $t('USER_ACCOUNT.CONTACT_DETAILS') }}
            </div>
            <div slot="content">
                <ul class="content-list">
                    <EditableBlockItem :label="$t('ADDRESS.STREET')">
                        <template #value>
                            {{ dataFromApi.address.street }}
                        </template>
                        <template #input>
                            <div class="is-radio">
                                <b-input v-model="dataFromApiClone.address.street" />
                            </div>
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem :label="$t('ADDRESS.NUMBER')">
                        <template #value>
                            {{ dataFromApi.address.number }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.address.number" />
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem :label="$t('ADDRESS.ADDITION')">
                        <template #value>
                            {{ dataFromApi.address.addition }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.address.addition" />
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem :label="$t('ADDRESS.POSTAL_CODE')">
                        <template #value>
                            {{ dataFromApi.address.postal_code }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.address.postal_code" />
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem :label="$t('ADDRESS.CITY')">
                        <template #value>
                            {{ dataFromApi.address.city }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.address.city" />
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem :label="$t('ADDRESS.PROVINCE')">
                        <template #value>
                            {{ dataFromApi.address.province }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.address.province" />
                        </template>
                    </EditableBlockItem>

                    <EditableBlockItem :label="$t('ADDRESS.COUNTRY')">
                        <template #value>
                            {{ dataFromApi.address.country }}
                        </template>
                        <template #input>
                            <b-input v-model="dataFromApiClone.address.country" />
                        </template>
                    </EditableBlockItem>
                </ul>
            </div>
        </EditableBlock>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import EditableBlockItem from '@/components/Global/EditableBlock/EditableBlockItem.vue';
    import EditableBlock from '@/components/Global/EditableBlock/EditableBlock.vue';
    import { UserTypes } from '@/types/user.types';
    import userService from '@/services/user.service';
    import alertService from '@/services/alert.service';
    import { namespace } from 'vuex-class';
    import { cloneDeep, isEqual } from 'lodash';
    import formOptionsService from '@/services/form-options-service';

    const userStore = namespace('userStore');

    @Component({
        components: { EditableBlock, EditableBlockItem }
    })
    export default class AccountBlock extends Vue {
        @userStore.Action updateSessionFromApi: any;

        languages = [
            {
                code: 'nl',
                name: 'Nederlands'
            },
            {
                code: 'en',
                name: 'English'
            }
        ];

        genders = [
            {
                value: 'male',
                name: 'Dhr'
            },
            {
                value: 'female',
                name: 'Mw'
            }
        ];

        defaultAddressValues = {
            addition: '',
            city: '',
            country: '',
            province: '',
            number: '',
            postal_code: '',
            street: ''
        };

        dataFromApi: UserTypes | any = {};
        dataFromApiClone: UserTypes | any = {};

        async created() {
            this.dataFromApi = await userService.getUserData();
            if (!this.dataFromApi.address) {
                this.dataFromApi.address = this.defaultAddressValues;
            }
            this.dataFromApiClone = cloneDeep(this.dataFromApi);
        }

        getGender(gender: string) {
            const genderResult = this.genders.find(g => g.value === gender);
            return genderResult ? genderResult.name : '';
        }

        getCountryName(id: string) {
            return formOptionsService.getCountryNameById(id);
        }

        get countries() {
            return formOptionsService.countries;
        }

        get language() {
            const locale = this.languages.find(l => l.code === this.dataFromApi.locale);
            return locale ? locale.name : this.$i18n.t('GLOBAL.NETHERLANDS');
        }

        get hasChanged() {
            return !isEqual(this.dataFromApiClone, this.dataFromApi);
        }

        get dateOfBirth() {
            return new Date(this.dataFromApiClone.birth_date || new Date());
        }

        set dateOfBirth(v: any) {
            this.dataFromApiClone.birth_date = v.toString();
        }

        async onSaveUserDetails() {
            try {
                // Prevent to change user first/last name
                delete this.dataFromApiClone.first_name;
                delete this.dataFromApiClone.last_name;
                this.dataFromApiClone.birth_date = this.dataFromApiClone.birth_date ? this.dataFromApiClone.birth_date.toString() : '';
                const { status } = await userService.updateUser(this.removeEmptyFields(this.dataFromApiClone));
                if (status === 200) {
                    if (!this.dataFromApiClone.address) {
                        this.dataFromApiClone.address = this.defaultAddressValues;
                    }
                    this.dataFromApiClone.first_name = this.dataFromApi.first_name;
                    this.dataFromApiClone.last_name = this.dataFromApi.last_name;
                    this.dataFromApi = cloneDeep(this.dataFromApiClone);
                    alertService.successMessage('Personal details were updated');
                }
            } finally {
                await this.updateSessionFromApi();
            }
        }

        async onCancelUserDetails() {
            this.dataFromApiClone = cloneDeep(this.dataFromApi);
        }

        onSaveUserPersonalDetails() {
            this.onSaveUserDetails();
            this.$i18n.locale = this.dataFromApiClone.locale;
        }

        onCancelUserPersonalDetails() {
            this.onCancelUserDetails();
        }

        onSaveContactDetails() {
            this.onSaveUserDetails();
        }

        onCancelContactDetails() {
            this.onCancelUserDetails();
        }

        isEmpty(value) {
            if (value === null) {
                return true;
            }
            if (typeof value === 'object' && Object.keys(value).length === 0) {
                return true;
            }
            return typeof value === 'string' && value.trim() === '';
        }

        removeEmptyFields(input) {
            if (Array.isArray(input)) {
                for (let index = input.length - 1; index >= 0; index--) {
                    if (typeof input[index] === 'object') {
                        this.removeEmptyFields(input[index]);
                    }
                    if (this.isEmpty(input[index])) {
                        input.splice(index, 1);
                    }
                }
            } else {
                for (const index in input) {
                    if (typeof input[index] === 'object') {
                        this.removeEmptyFields(input[index]);
                    }
                    if (this.isEmpty(input[index])) {
                        delete input[index];
                    }
                }
            }
            return input;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .user-image {
        display: flex;
        justify-content: center;

        figure {
            width: 100px;
            height: 100px;
        }

        img {
            border-radius: 100%;
            @include box-shadow();
        }

        /deep/ .content-list-values {
            display: flex;
            justify-content: center;

            .section {
                padding: $margin-default;
            }
        }
    }
</style>
