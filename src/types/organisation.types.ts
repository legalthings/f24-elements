import { SharesSummaryTypes, ShareTypes, ShareValueTypes } from '@/types/shares.types';

export interface OrganisationListTypes {
    scenario: string;
    name: string;
    id: string;
    actionPoints?: number;
    meta: OrganisationMetaTypes;
    steps: Array<OrganisationListInfoTypes>;
    currentStepCount: number;
    currentStep: any;
    totalSteps: number;
    organisationInfo: OrganisationListInfoTypes;
    total_shares_amount: number;
    total_shares_value: number;
    shareholders: Array<any>;
    corporation_type: string;
    state: string;
    session?: string;
    isOldFunnel?: boolean;
    legacySession?: string;
    statusLabel?: string;
    url?: string;
    canRemoveProcess?: boolean;
}

export interface OrganisationListInfoTypes {
    name: string;
    value: string;
}

export interface OrganisationMetaTypes {
    logo: string;
}

export interface OrganizationShareTypes {
    id: string;
    types: Array<any>;
    shares: Array<any>;
    name: string;
    registration_number: string;
    registered_city: string;
    incorporation_date: string;
    shareholders: Array<any>;
    employees: Array<any>;
    members: Array<any>;
    created: string;
    corporation_type: string;
    share_values_summary: Array<ShareValueTypes>;
    shares_summary: Array<SharesSummaryTypes>;
    total_shares_amount: number;
    total_shares_value: number;
    state: string;
    notary: any;
    legacy_id: string;
}

export interface ShareholderTypes {
    data: any;
    shares: Array<ShareTypes>;
    type: string;
}
