<template>
    <div class="box">
        <PageSectionItems
            v-for="item in organizationDetails"
            :key="item.label"
            :item="item"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PageSectionItems from '@/components/Global/Page/PageSection/PageSectionItems.vue';
    import i18n from '@/dependencies/i18n';
    import OrganizationService from '@/components/Organization/services/organization.service';

    @Component({
        components: { PageSectionItems }
    })
    export default class OrganizationDetailsInfo extends Vue {
        @Prop() organization!: OrganizationService;

        get organizationDetails() {
            return [
                {
                    label: i18n.t('ORGANIZATION.COMPANY_NAME'),
                    value: this.organization.data.name
                },
                {
                    label: i18n.t('ORGANIZATION.CHAMBER_OF_COMMERCE_NUMBER'),
                    value: this.organization.data.registration_number || this.$i18n.t('GLOBAL.NOT_YET_AVAILABLE')
                },
                {
                    label: i18n.t('ORGANIZATION.REGISTERED_OFFICE'),
                    value: this.organization.data.registered_city || this.$i18n.t('GLOBAL.NOT_YET_AVAILABLE') + ', Nederland'
                },
                {
                    label: i18n.t('ORGANIZATION.DATE_OF_ESTABLISHMENT'),
                    value: this.$f24.formatDate(this.organization.data.created)
                },
                {
                    label: i18n.t('ORGANIZATION.NAME_OF_EXECUTIVE_NOTARY'),
                    value: (this.organization.data.notary && this.organization.data.notary.name) || '-'
                }
            ];
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';
    @import "~css/_tables";

    .b-table {
        width: 100%;
    }

    /deep/ .table {
        @include table-primary;

        .mobile-header-column {

            .mobile-header-column-actions {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        .detail {
            margin-top: -10px !important;

            td {
                border-radius: $border-radius;
            }

            .detail-container {
                @include breakpoint-down(md) {
                    margin-top: 10px;
                }
                @include breakpoint-down(sm) {
                    padding: 0 !important;
                }
            }
        }
    }

    .row-action {
        display: flex;
    }

    .open-details {
        cursor: pointer;
        transition: transform .3s ease-in-out;

        &:hover {
            fill: $color-blue-darker;
        }

        &.is-open {
            transform: rotate(180deg);
        }
    }

    .logo {
        border-radius: 100%;
        width: 50px;
        height: 50px;
        background: $color-blue-gray-01;
    }
</style>
