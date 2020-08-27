<template>
    <section class="section">
        <h2 class="title">
            Add Organization
        </h2>

        <div class="box">
            <ValidationObserver
                ref="observer"
                v-slot="validator"
                tag="form"
            >
                <ValidationProvider
                    v-slot="{ errors, valid }"
                    rules="required"
                    name="type"
                    vid="type"
                >
                    <b-field
                        label="Type"
                        :type="{ 'is-danger': errors[0], 'is-success': valid }"
                        :message="errors"
                        class="mt-5"
                    >
                        <UiInputSelectbox
                            v-model="data.type"
                            :items="typeOptions"
                            rules="required"
                            placeholder="Select type"
                        />
                    </b-field>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors, valid }"
                    rules="required"
                    name="notary"
                    vid="notary"
                >
                    <b-field
                        label="Notary"
                        :type="{ 'is-danger': errors[0], 'is-success': valid }"
                        :message="errors"
                        class="mt-5"
                    >
                        <UiInputSelectbox
                            v-model="data.notary"
                            :items="notaries"
                            rules="required"
                            placeholder="Select notary"
                        />
                    </b-field>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors, valid }"
                    rules="required"
                    name="incorporation_date"
                    vid="incorporation_date"
                >
                    <b-field
                        label="Incorporation date"
                        class="mt-5"
                        :type="{ 'is-danger': errors[0], 'is-success': valid }"
                        :message="errors"
                    >
                        <b-datepicker
                            v-model="data.incorporation_date"
                            label="incorporation date"
                            placeholder="Click to select..."
                            icon="calendar"
                            trap-focus
                        />
                    </b-field>
                </ValidationProvider>

                <UiInputText
                    v-model="data.data.naam_onderneming"
                    label="Naam onderneming"
                    rules="required"
                    class="mt-5"
                />

                <UiInputText
                    v-model="data.kvk_number"
                    label="Kvk number"
                    rules="required|kvk"
                    :max="9"
                    class="mt-5"
                />

                <UiInputText
                    v-model="data.data.nominale_waarde_aandeel"
                    label="Nominale waarde aandeel"
                    rules="required"
                    class="mt-5"
                />

                <UiInputText
                    v-model="data.data.vestigingsstraat"
                    label="Vestigingsstraat"
                    rules="required"
                    class="mt-5"
                />

                <UiInputText
                    v-model.number="data.data.vestigingsnummer"
                    label="Vestigingsnummer"
                    rules="required"
                    class="mt-5"
                />

                <UiInputText
                    v-model="data.data.vestigingspostcode"
                    label="Vestigingspostcode"
                    rules="required|zipcode"
                    class="mt-5"
                />

                <UiInputText
                    v-model="data.data.vestigingsplaats"
                    label="Vestigingsplaats"
                    rules="required"
                    class="mt-5"
                />

                <div class="columns">
                    <div class="column">
                        <h3>
                            Deed document
                        </h3>
                        <UiInputText
                            v-model="data.deed_document.id"
                            label="Id"
                            rules="required"
                        />
                        <UiInputText
                            v-model="data.deed_document.name"
                            label="Name"
                            rules="required"
                        />
                    </div>
                    <div class="column">
                        <h3>
                            Kvk document
                        </h3>
                        <UiInputText
                            v-model="data.kvk_document.id"
                            label="Id"
                            rules="required"
                        />
                        <UiInputText
                            v-model="data.kvk_document.name"
                            label="Name"
                            rules="required"
                        />
                    </div>
                </div>

                <!-- Shareholders -->
                <div class="columns is-multiline mg-top-30">
                    <div class="column is-12 extra-column">
                        <h3>
                            Shareholders
                        </h3>
                        <b-button
                            type="is-primary is-padding-small has-icon"
                            rounded
                            @click="addShareholder()"
                        >
                            <UiIcon
                                icon="add"
                                size="22px"
                                color="white"
                            />
                            Add shareholder
                        </b-button>
                    </div>
                    <div
                        v-for="(shareholder, index) in data.ah"
                        :key="index"
                        class="column"
                    >
                        <div class="shareholder">
                            <div class="header">
                                <h5>Shareholder #{{ index + 1 }}</h5>
                                <b-button
                                    class="remove-shareholder"
                                    type="is-danger is-padding-small"
                                    rounded
                                    @click="removeShareholder(index)"
                                >
                                    <i class="fas fa-trash-alt" />
                                </b-button>
                            </div>

                            <div v-if="shareholder.type === '2'">
                                <UiInputText
                                    v-model="shareholder.name_company"
                                    label="Company name"
                                />
                                <UiInputText
                                    v-model="shareholder.kvk_number"
                                    label="Kvk nummer"
                                    rules="required|kvk"
                                    max="8"
                                />
                            </div>

                            <UiInputText
                                v-model="shareholder.first_name"
                                label="First name"
                            />
                            <UiInputText
                                v-model="shareholder.last_name"
                                label="Last name"
                            />
                            <UiInputText
                                v-model="shareholder.email"
                                label="E-mailadress"
                                rules="required|email"
                            />

                            <UiInputRadio
                                v-model="shareholder.bestuurder"
                                label="Director?"
                                :items="[{name: 'Ja', id: 'true'}, {name: 'Nee', id: 'false'}]"
                                :inline="true"
                            />

                            <UiInputRadio
                                v-model="shareholder.type"
                                label="Type?"
                                :items="[{name: 'Natuurlijk persoon', id: '1'}, {name: 'BV', id: '2'}]"
                                :inline="true"
                            />

                            <div class="shares">
                                <UiInputText
                                    v-model.number="shareholder.aantal_aandelen"
                                    label="Aantal aandelen"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- MEMBERS -->
                <div class="columns is-multiline mg-top-30">
                    <div class="column is-12 extra-column">
                        <h3>
                            Members
                        </h3>
                        <b-button
                            type="is-primary is-padding-small has-icon"
                            rounded
                            @click="addMember()"
                        >
                            <UiIcon
                                icon="add"
                                size="22px"
                                color="white"
                            />
                            Add member
                        </b-button>
                    </div>

                    <div
                        v-for="(member, index) in data.members"
                        :key="index"
                        class="column is-4"
                    >
                        <div class="shareholder">
                            <div class="header">
                                <h5>Member #{{ index + 1 }}</h5>
                                <b-button
                                    class="remove-shareholder"
                                    type="is-danger is-padding-small"
                                    rounded
                                    @click="removeMember(index)"
                                >
                                    <i class="fas fa-trash-alt" />
                                </b-button>
                            </div>
                            <div>
                                <UiInputText
                                    v-model="member.first_name"
                                    label="First name"
                                />
                                <UiInputText
                                    v-model="member.last_name"
                                    label="Last name"
                                />
                                <UiInputText
                                    v-model="member.email"
                                    label="Email"
                                    rules="required|email"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="buttons mt-5">
                    <b-button
                        :disabled="validator.invalid"
                        :class="{'is-danger': validator.invalid}"
                        type="is-success"
                        rounded
                        @click="submit"
                    >
                        Submit
                    </b-button>
                </div>
            </ValidationObserver>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import apiService from '@/services/api.service';
    import alertService from '@/services/alert.service';
    import { cloneDeep } from 'lodash';
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import { storageHelper } from '@/helpers/storage.helper';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';

    @Component({
        components: {
            UiInputSelectbox,
            UiInputRadio,
            UiInputText,
            PageBlock
        }
    })
    export default class AdminAddOrganization extends Vue {
        data: any = {
            data: {},
            incorporation_date: new Date(),
            deed_document: {},
            kvk_document: {},
            ah: [],
            members: []
        };

        observer: any;
        notaries = [];
        isLoading = true;
        dataClone;

        $refs!: any;

        typeOptions = [
            {
                name: 'eenmanszaak',
                id: 'eenmanszaak'
            },
            {
                name: 'vof',
                id: 'vof'
            },
            {
                name: 'bv',
                id: 'bv'
            },
            {
                name: 'stichting',
                id: 'stichting'
            },
            {
                name: 'holding',
                id: 'holding'
            },
            {
                name: 'nv',
                id: 'nv'
            }
        ];

        async created() {
            this.dataClone = cloneDeep(this.data);
            const storage = storageHelper.get('ADD_ORGANIZATION');
            this.data = storage ? JSON.parse(storage) : this.data;
            this.data.incorporation_date = new Date(this.data.incorporation_date);
            const { data } = await apiService.get('organizations', [{ key: 'type', value: 'notary' }]);
            this.notaries = data;
        }

        mounted() {
            this.observer = this.$refs.observer;
        }

        async submit() {
            const { data, status } = await apiService.post('incorporations', this.data);
            if (status === 201) {
                alertService.successMessage('Incorporation was added');
                this.data = cloneDeep(this.dataClone);
                await this.$router.push({ name: 'organization', params: { organizationId: data.id } });
            }
        }

        addShareholder() {
            this.data.ah.push({});
        }

        removeShareholder(index: number) {
            this.data.ah.splice(index, 1);
        }

        addMember() {
            this.data.members.push({});
        }

        removeMember(index: number) {
            this.data.members.splice(index, 1);
        }

        @Watch('data', { deep: true })
        onDataChange(value) {
            storageHelper.set('ADD_ORGANIZATION', JSON.stringify(value));
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    .box {
        padding: 4 * $margin-default;
    }

    /deep/ .back-button {
        padding: 0;
    }

    /deep/ .page-block {
        margin: 0;
    }

    .columns {
        margin-top: 3 * $margin-default;
        background: $color-gray-10;
        border-radius: $border-radius;

        .column {
            h3 {
                margin-bottom: 2 * $margin-default;
            }
        }
    }

    .extra-column {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .remove-shareholder {
        padding: 0 !important;
        display: flex;
        align-items: center;
        width: 40px;
        height: 40px !important;
        position: absolute;
        right: $margin-default;

        /deep/ span {
            display: flex;
            align-items: center;
        }

        i {
            margin: 0;
        }
    }

    .shareholder {
        border: 1px solid $color-blue-gray-01;
        padding: 2 * $margin-default;
        border-radius: $border-radius;
        height: 100%;

        div {
            margin: 2 * $margin-default 0;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }
    }
</style>
