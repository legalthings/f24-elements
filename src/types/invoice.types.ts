import { OrganizationShareTypes } from '@/types/organisation.types';

export interface InvoiceTypes {
    id: string;
    created: string;
    external_id: string;
    external_data: InvoiceExternalId;
    organization: OrganizationShareTypes
}

export interface InvoiceExternalId {
    company_name: string;
    invoice_id: string;
    created_at: string;
    total_paid: number;
    total_unpaid: number;
    total_price_incl_tax: number;
    reference: string;
    state: string;
}
