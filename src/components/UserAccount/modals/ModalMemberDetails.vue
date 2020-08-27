<template>
    <UiModal @close="$parent.close()">
        <template #header>
            <div class="user-details">
                <CardLogo :name="member.name" />
                <h3>
                    {{ member.name }}
                </h3>
            </div>
        </template>
        <template #content>
            <div class="permissions">
                <h5 class="permissions-title">
                    {{ $t('GLOBAL.ROLE') }}
                </h5>
                <div class="permissions-list columns is-multiline">
                    <span
                        class="column"
                    >
                        {{ member.role }}
                    </span>
                </div>
            </div>
            <hr>
            <div class="permissions">
                <h5 class="permissions-title">
                    {{ $t('GLOBAL.PERMISSIONS') }}
                </h5>
                <div class="permissions-list columns is-multiline">
                    <span
                        v-for="permission in member.permissions"
                        :key="permission"
                        class="column"
                    >
                        <UiIcon
                            icon="check"
                            color="green"
                        />
                        {{ permission }}
                    </span>
                </div>
            </div>

            <div class="buttons">
                <b-button
                    type="is-primary is-padding-small"
                    rounded
                    @click="$parent.close()"
                >
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.CLOSE') }}
                </b-button>
            </div>
        </template>
    </UiModal>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import SearchButton from '@/components/Global/Buttons/SearchButton.vue';
    import UiInputRadio from '@/components/Global/UiFormInputs/UiInputRadio/UiInputRadio.vue';
    import UiInputUpload from '@/components/Global/UiFormInputs/UiInputUpload/UiInputUpload.vue';
    import UiInputText from '@/components/Global/UiFormInputs/UiInputText/UiInputText.vue';
    import { OrganizationShareTypes } from '@/types/organisation.types';
    import HeaderWrapper from '@/components/Global/Header/HeaderWrapper/HeaderWrapper.vue';
    import CardLogo from '@/components/Dashboard/components/CardLogo/CardLogo.vue';
    import UiModal from '@/components/Global/Modals/UiModal/UiModal.vue';

    @Component({
        components: { UiModal, CardLogo, HeaderWrapper, UiInputText, UiInputUpload, UiInputRadio, SearchButton }
    })
    export default class ModalMemberDetails extends Vue {
        @Prop() organization!: OrganizationShareTypes;
        @Prop() member!: any;
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';

    .user-details {
        display: flex;
        flex-direction: row;
        align-items: center;

        h3 {
            margin-left: $margin-default;
        }

        /deep/ .logo {
            width: 48px;
            height: 48px;

            span {
                font-size: 20px;
            }
        }
    }

    .permissions {
        display: flex;
        align-items: center;
        margin-bottom: 3 * $margin-default;

        .permissions-title {
            flex: 2;
        }
    }

    .permissions-list {
        flex: 3;

        span {
            text-transform: capitalize;
            display: flex;
            align-items: center;
            margin: 0;
            padding: $margin-default;

            .ui-icon {
                margin-right: $margin-default;
            }
        }
    }

    .buttons {
        margin-top: 2 * $margin-default;
        justify-content: flex-end;
    }
</style>
