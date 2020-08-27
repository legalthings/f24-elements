<template>
    <div>
        <div class="rights-header">
            <h3>
                {{ $t('USER_ACCOUNT.SHOW_PERMISSIONS_FOR') }}
            </h3>
            <div>
                <UiInputSelectbox
                    v-model="organizationId"
                    :items="organizations"
                    :placeholder="$t('USER_ACCOUNT.SELECT_ORGANIZATION')"
                />
                <!--                <b-button-->
                <!--                    type="is-primary is-padding-small"-->
                <!--                    rounded-->
                <!--                >-->
                <!--                    {{ $t('USER_ACCOUNT.ADD_USER') }}-->
                <!--                </b-button>-->
            </div>
        </div>
        <section
            v-if="members.length > 0"
            class="mg-top-40"
        >
            <h3>
                {{ $t('USER_ACCOUNT.EXISTING_USERS') }}
            </h3>
            <b-table
                ref="table"
                default-sort="created"
                :data="members"
                hoverable
                sort-icon="chevron-up"
                sort-icon-size="is-small"
            >
                <template slot-scope="props">
                    <b-table-column
                        :label="$t('SHAREHOLDERS_DETAILS.ORGANIZATION')"
                        field="name"
                        width="260"
                        sortable
                    >
                        <div
                            class="member"
                            @click="openOrganization(props.row)"
                        >
                            <CardLogo
                                v-if="$vmq.lg"
                                :name="props.row.name"
                            />
                            <span class="has-text-weight-bold">
                                {{ props.row.name }}
                            </span>
                        </div>
                    </b-table-column>

                    <b-table-column
                        :label="$t('GLOBAL.ROLE')"
                        field="external_data.invoice_id"
                        class="permissions"
                        sortable
                    >
                        {{ props.row.role }}
                    </b-table-column>

                    <b-table-column
                        label=""
                        field="id"
                        width="60"
                        class="action"
                    >
                        <UiIcon
                            icon="arrow-right"
                            @click="openOrganization(props.row)"
                        />
                    </b-table-column>
                </template>
            </b-table>
        </section>
        <div
            v-if="members.length > 0 && !organization"
            class="mg-top-30"
        >
            {{ $t('USER_ACCOUNT.NO_MEMBERS') }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';
    import { OrganizationShareTypes } from '@/types/organisation.types';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';
    import CardLogo from '@/components/Dashboard/components/CardLogo/CardLogo.vue';
    import ModalMemberDetails from '@/components/UserAccount/modals/ModalMemberDetails.vue';

    @Component({
        components: { CardLogo, UiInputSelectbox, UiButton }
    })
    export default class OrganizationsRights extends Vue {
        organization: OrganizationShareTypes | undefined;
        organizationId: string | null = null;
        @Prop() organizations!: Array<OrganizationShareTypes>;

        get members() {
            this.organization = this.organizations.find(o => o.id === this.organizationId);
            return this.organization ? this.organization.members.map(o => {
                return {
                    name: o.organization?.name || `${o.user?.first_name} ${o.user?.last_name}`,
                    data: o.organization || o.user,
                    permissions: this.filterPermissionsLabel(o.role.permissions),
                    role: o.role.id
                };
            }) : [];
        }

        filterPermissionsLabel(permissions: Array<any>) {
            return permissions.map(p => p.scope);
        }

        openOrganization(member: any) {
            this.$buefy.modal.open({
                parent: this,
                canCancel: this.$vmq.lg,
                component: ModalMemberDetails,
                hasModalCard: true,
                trapFocus: true,
                props: {
                    organization: this.organization,
                    member: member
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';
    @import "~css/tables";

    .rights-header {

        div {
            justify-content: space-between;
            align-items: center;
            display: flex;

            .control {
                flex: 1;
                margin-right: 3 * $margin-default;
            }
        }
    }

    /deep/ table {
        @include table-secondary;

        td {
            vertical-align: middle;
        }
    }

    h3 {
        @include fs-medium;
        margin-bottom: $margin-default;
        @include font-size($regular-font-sizes);
    }

    .ui-icon {
        cursor: pointer;

        &:hover {
            fill: $color-blue-dark;
        }
    }

    .member {
        cursor: pointer;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        /deep/ .logo {
            margin-right: $margin-default;
            width: 50px;
            height: 50px;

            span {
                font-size: 24px;
            }
        }
    }

    .permissions {
        text-transform: capitalize;
    }
</style>
