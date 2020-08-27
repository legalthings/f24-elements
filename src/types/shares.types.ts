import { UserTypes } from './user.types';
import { OrganizationShareTypes } from '@/types/organisation.types';

export interface SharesSummaryTypes {
    shares: Array<ShareTypes>;
    user: UserTypes;
    organization: OrganizationShareTypes;
}

export interface ShareTypes {
    asset: string;
    amount: number;
    fully_paid_amount: number;
    number: Array<any>;
    encumbered?: string;
    encumbered_amount?: number;
}

export interface ShareValueTypes {
    asset: string;
    value: number;
    created: string;
}
