<template>
    <div class="contracts">
        <PageBlock
            :back-button="{name: 'organization', label: $t('NAVIGATION.OVERVIEW'), params: {organizationId: $route.params.organizationId}}"
        >
            <template
                v-if="!isLoading"
                #content
            >
                <PageSection>
                    <div slot="header">
                        Notariscontrole
                    </div>

                    <div
                        v-if="incorporation"
                        slot="content"
                        class="box"
                    >
                        <ValidationObserver
                            ref="observer"
                            v-slot="validator"
                            tag="form"
                        >
                            <div class="shares">
                                <h3>Organization data</h3>

                                <UiInputText
                                    v-model="incorporationClone.data.naam_onderneming"
                                    label="Company name"
                                    rules="required"
                                />

                                <UiInputText
                                    v-model="incorporationClone.kvk_number"
                                    label="KVK number"
                                    rules="required|kvk"
                                    max="8"
                                />

                                <h3 class="mg-top-40">
                                    Shares
                                </h3>

                                <UiInputRadio
                                    v-model="incorporationClone.fully_paid"
                                    label="Volgestort"
                                    :inline="true"
                                />

                                <UiInputText
                                    v-model="incorporationClone.data.nominale_waarde_aandeel"
                                    label="Nominale waarde aandeel"
                                />

                                <UiInputText
                                    disabled
                                    :value="totalShares"
                                    label="Aantal aandelen"
                                />

                                <UiInputText
                                    disabled
                                    :value="nominalValue"
                                    label="Geplaatst kapitaal"
                                />
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
                                    v-for="(shareholder, index) in incorporationClone.ah"
                                    :key="index"
                                    class="column"
                                >
                                    <div class="shareholder">
                                        <div class="header">
                                            <h5>Shareholder #{{ index + 1 }}</h5>
                                            <b-button
                                                v-if="index !== 0"
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
                                            @change.native="scrollToError"
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
                            <div
                                v-if="$store.getters['userStore/isSupport']"
                                class="columns is-multiline mg-top-30"
                            >
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
                                    v-for="(member, index) in incorporationClone.members"
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

                            <hr>

                            <!-- SUBMIT BUTTON -->
                            <div
                                class="buttons"
                                :class="{'has-changed': hasChanged}"
                            >
                                <b-button
                                    v-if="hasChanged"
                                    type="is-light"
                                    rounded
                                    @click="resetChanges"
                                >
                                    Reset alle wijzigingen
                                </b-button>

                                <div class="confirm">
                                    <UiInputCheckbox
                                        v-if="hasChanged"
                                        v-model="agreeOnChanges"
                                        :items="[{ name: 'Ik heb geverifieerd dat deze gegevensaanpassingen correct zijn.', id:true}]"
                                    />

                                    <div @click="scrollToError">
                                        <b-tag
                                            v-if="validator.invalid"
                                            type="is-danger"
                                            :closable="false"
                                            class="fix-errors"
                                        >
                                            Click here to see the errors
                                        </b-tag>
                                    </div>

                                    <b-button
                                        :loading="isSubmitLoading"
                                        :disabled="validator.invalid || (hasChanged && !agreeOnChanges)"
                                        :class="{'is-danger': validator.invalid}"
                                        type="is-success"
                                        rounded
                                        @click="confirmDataIsGood"
                                    >
                                        Indienen
                                    </b-button>
                                </div>
                            </div>
                        </ValidationObserver>
                    </div>

                    <div
                        v-else
                        slot="content"
                        class="box"
                    >
                        {{ $t('GLOBAL.NO_DATA_AVAILABLE') }}
                    </div>
                </PageSection>
            </template>
        </PageBlock>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageSection from '@/components/Global/Page/PageSection/PageSection.vue';
    import OrganizationService from '@/components/Organization/services/organization.service';
    import PageBlock from '@/components/Global/Page/PageBlock/PageBlock.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import { cloneDeep, isEqualWith } from 'lodash';
    import apiService from '@/services/api.service';
    import UiInputCheckbox from '@/components/Global/UiFormInputs/UiInputCheckbox/UiInputCheckbox.vue';
    import alertService from '@/services/alert.service';
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import { convertToLocaleString } from '@/helpers/utility.helper';

    @Component({
        components: {
            UiInputRadio,
            UiInputCheckbox,
            UiInputText,
            PageSection,
            PageBlock
        }
    })

    export default class OrganizationNotary extends Vue {
        @Prop() organization!: OrganizationService;
        isLoading = true;
        isSubmitLoading = false;
        incorporation: any = null;
        incorporationClone: any = {};
        agreeOnChanges = false;
        shouldReload = false;
        loadingModal;

        beforeDestroy() {
            if (this.shouldReload) {
                this.$emit('reload');
                this.loadingModal.close();
            }
        }

        async created() {
            try {
                const { data, status } = await apiService.get('incorporations/' + this.organization.id);
                if (!data.data.members) {
                    data.data.members = [];
                }
                if (status === 200) {
                    this.incorporationClone = data.data;
                    this.incorporation = cloneDeep(data.data);
                }
            } catch (e) {
                console.log('Fail to fetch incorporation data', e);
            } finally {
                this.isLoading = false;
                setTimeout(() => this.validate(), 100);
            }
        }

        validate() {
            const provider: any = this.$refs.observer;
            return provider.validate();
        }

        get nominalValue() {
            return convertToLocaleString(this.totalShares * Number(this.incorporationClone.data.nominale_waarde_aandeel.toString().replace(/,/g, '.')));
        }

        get totalShares() {
            return this.incorporationClone.ah.reduce((acc, c) => (acc = acc + c.aantal_aandelen), 0);
        }

        get hasChanged() {
            return !isEqualWith(this.incorporationClone, this.incorporation);
        }

        async submitChanges() {
            this.loadingModal = this.$buefy.loading.open({});
            this.isSubmitLoading = true;

            // TODO Check how to solve the locale and automatically convert to BE default
            this.incorporationClone.data.nominale_waarde_aandeel = Number(this.incorporationClone.data.nominale_waarde_aandeel.toString().replace(/,/g, '.'));

            try {
                const { data, status } = await apiService.post('incorporations/' + this.organization.id, this.incorporationClone);
                if (status === 201) {
                    this.shouldReload = true;
                    await this.$router.push({ name: 'organization', params: { organizationId: data.id } });
                } else {
                    alertService.dangerMessage('Error submitting data correction');
                }
            } catch (e) {
                alertService.dangerMessage('Error submitting data correction');
            } finally {
                this.isSubmitLoading = false;
                this.loadingModal.close();
            }
        }

        async submitApproval() {
            this.loadingModal = this.$buefy.loading.open({});
            try {
                const { data, status } = await apiService.post('organizations/' + this.organization.id, { state: 'incorporated' });
                if (status === 200) {
                    this.shouldReload = true;
                    await this.$router.push({ name: 'organization', params: { organizationId: data.id } });
                } else {
                    alertService.dangerMessage('Error submitting data correction');
                }
            } catch (e) {
                alertService.dangerMessage('Error submitting data correction', e);
            } finally {
                this.isLoading = false;
                this.loadingModal.close();
            }
        }

        submit() {
            this.hasChanged ? this.submitChanges() : this.submitApproval();
        }

        resetChanges() {
            this.agreeOnChanges = false;
            this.incorporationClone = cloneDeep(this.incorporation);
        }

        confirmDataIsGood() {
            this.$buefy.dialog.confirm({
                message: 'Weet je het zeker?',
                type: 'is-success',
                onConfirm: () => this.submit()
            });
        }

        addShareholder() {
            this.incorporationClone.ah.push({});
            setTimeout(() => this.validate(), 100);
        }

        addMember() {
            this.incorporationClone.members.push({});
            setTimeout(() => this.validate(), 100);
        }

        removeShareholder(index: number) {
            this.incorporationClone.ah.splice(index, 1);
        }

        removeMember(index: number) {
            this.incorporationClone.members.splice(index, 1);
        }

        async scrollToError() {
            await this.validate();
            const list = document.getElementsByClassName('has-error');
            const arr = Array.prototype.slice.call(list);
            if (arr.length === 0) return;
            const min = Math.min.apply(null, arr.map(l => l.offsetTop));
            window.scroll({
                top: min + 80,
                behavior: 'smooth'
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

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

    .shares {
        background: $color-blue-gray-01;
        padding: $margin-default 2 * $margin-default;
        border-radius: $border-radius;

        h2 {
            margin-bottom: 2 * $margin-default;
        }

        div {
            margin: 2 * $margin-default 0;
        }
    }

    .confirm {
        display: flex;
        align-items: center;

        .button {
            margin: 0 0 0 2 * $margin-default;
        }
    }

    .buttons {
        justify-content: flex-end;

        &.has-changed {
            justify-content: space-between;
        }

        .fix-errors {
            cursor: pointer;
        }
    }
</style>
