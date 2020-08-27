import { OrganizationShareTypes } from '@/types/organisation.types';
import { LeadsStatusEnum } from '@/types/lead.enum';
import { AddressTypes } from '@/types/address.types';

export interface LeadTypes {
    name: string;
    product: LeadProductTypes;
    _id: string;
}

export interface LeadProductTypes {
    created: string;
    id: string;
    name: string;
    price: number
    reference: string;
    tax: number;
}

export interface LeadTransactionsTypes {
    count: number;
    created: string;
    id: string;
    organization: OrganizationShareTypes;
    status: string;
    transaction: LeadTransactionTypes;
    type: LeadTypes;
}

export interface LeadTransactionTypes {
    created: string;
    description: string;
    id: string;
    organization: OrganizationShareTypes;
    price: number;
    products: [LeadProductTypes];
    transaction?: string;
}

export interface LeadPurchasesTypes {
    created: string;
    id: string;
    lead: LeadLeadTypes;
    organization: OrganizationShareTypes;
    status: LeadsStatusEnum;
    transaction: LeadTransactionTypes;
}

export interface LeadLeadTypes {
    address: AddressTypes;
    contact: LeadContractTypes;
    created: string;
    id: string;
    name: string;
    organization: string;
    registered_city: string;
    registration_number: string;
    type: string;
}

export interface LeadContractTypes {
    email: string;
    first_name: string;
    gender: string;
    last_name: string;
    phone: string;
}
