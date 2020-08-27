<template>
    <div>
        <div v-if="organizations.length > 0">
            <h3>
                {{ $t('USER_ACCOUNT.SHOW_INVOICES_FOR') }}
            </h3>
            <UiInputSelectbox
                v-model="organization"
                :items="organizations"
                :is-loading="isLoading"
                :placeholder="$t('USER_ACCOUNT.SELECT_ORGANIZATION')"
            />
        </div>
        <section class="mg-top-40">
            <b-table
                v-if="data.length > 0"
                ref="table"
                :checked-rows.sync="checkedRows"
                default-sort="created"
                :data="data"
                hoverable
                sort-icon="chevron-up"
                sort-icon-size="is-small"
                checkable
            >
                <template slot-scope="props">
                    <b-table-column
                        :label="$t('SHAREHOLDERS_DETAILS.DATE')"
                        field="created"
                        width="160"
                        sortable
                    >
                        <span class="has-text-weight-bold">
                            {{ $f24.formatDate(props.row.created) }}
                        </span>
                    </b-table-column>

                    <b-table-column
                        :label="$t('USER_ACCOUNT.REFERENCE')"
                        field="external_data.invoice_id"
                        sortable
                    >
                        {{ props.row.external_data ? props.row.external_data.invoice_id : '-' }}
                    </b-table-column>

                    <b-table-column
                        :label="$t('SHAREHOLDERS_DETAILS.AMOUNT')"
                        field="external_data.total_paid"
                        width="100"
                        sortable
                    >
                        <span class="amount">
                            <span>
                                {{ props.row.external_data ? $f24.convertToLocaleString(props.row.external_data.total_paid) : '-' }}
                            </span>
                        </span>
                    </b-table-column>

                    <b-table-column
                        label=""
                        field="action"
                        width="60"
                    >
                        <div
                            v-if="props.row.external_data"
                            class="action"
                        >
                            <span @click="download(props.row)">
                                <UiIcon icon="document" />
                            </span>
                        </div>
                    </b-table-column>
                </template>

                <template
                    v-if="data.length > 1"
                    slot="bottom-left"
                >
                    <b-button
                        :disabled="(checkedRows < 1) || isDownloadLoading"
                        :loading="isDownloadLoading"
                        type="is-primary"
                        rounded
                        @click="downloadZip"
                    >
                        {{ $t('USER_ACCOUNT.DOWNLOAD_SELECTION') }}
                    </b-button>
                </template>
            </b-table>
            <div v-if="data.length === 0 && organization">
                {{ $t('USER_ACCOUNT.NO_INVOICES') }}
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import apiService from '@/services/api.service';
    import { OrganizationShareTypes } from '@/types/organisation.types';
    import UiButton from '@/components/Global/UiButton/UiButton.vue';
    import DownloadInvoiceService from '../services/download-invoice.service';
    import { InvoiceTypes } from '@/types/invoice.types';
    import { downloadFile } from '@/helpers/utility.helper';
    import UiInputSelectbox from '@/components/Global/UiFormInputs/UiInputSelectbox/UiInputSelectbox.vue';

    @Component({
        components: { UiInputSelectbox, UiButton }
    })
    export default class InvoicesBlock extends Vue {
        @Prop() organizations!: Array<OrganizationShareTypes>;
        isLoading = false;
        isDownloadLoading = false;
        organization: string | null = null;
        checkedRows = [];

        data: Array<any> = [];

        async getInvoices(id: string): Promise<any> {
            try {
                this.isLoading = true;
                const { data, status } = await apiService.get('invoices', [
                    {
                        key: 'organization',
                        value: id
                    }
                ]);
                if (status === 200) {
                    return data;
                }
            } catch (e) {
                console.log(e);
            } finally {
                this.isLoading = false;
            }
        }

        getUrl(id: string) {
            return `${apiService.API_URL}invoices/${id}.pdf`;
        }

        async download(document: InvoiceTypes) {
            const { data } = await apiService.getFileFromURL(this.getUrl(document.id));
            const name = `${this.selectedOrganization?.name} - ${document.external_data.invoice_id}`;
            downloadFile(data, name, 'pdf');
        }

        async downloadZip() {
            this.isDownloadLoading = true;
            const zipFilename = `${this.selectedOrganization?.name} - Invoices.zip`;
            const config = {
                organization: this.organization,
                zipFilename: zipFilename,
                checkedRows: this.checkedRows
            };

            await DownloadInvoiceService.download(config);
            this.isDownloadLoading = false;
        }

        get selectedOrganization() {
            return this.organizations.find(o => o.id === this.organization);
        }

        @Watch('organization')
        async onOrganizationChange() {
            if (!this.organization) return;
            this.data = await this.getInvoices(this.organization);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~css/imports';
    @import "~css/tables";

    /deep/ table {
        @include table-secondary;
    }

    h3 {
        @include fs-medium;
        margin-bottom: $margin-default;
        @include font-size($regular-font-sizes);
    }

    .amount {
        display: flex;

        span:last-child {
            width: 60px;
            display: inline-block;
            text-align: right;
        }
    }

    .action {
        display: flex;
        cursor: pointer;

        .ui-icon {
            margin-left: auto;
        }
    }
</style>
