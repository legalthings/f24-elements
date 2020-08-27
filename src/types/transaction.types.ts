import { OrganizationShareTypes } from '@/types/organisation.types';
import { SharesSummaryTypes } from '@/types/shares.types';

export interface TransactionTypes {
    organization: OrganizationShareTypes;
    notary: string;
    type: string;
    asset: string
    amount: number
    to: SharesSummaryTypes;
    from: SharesSummaryTypes;
    created: string;
    id: string;
    total_amount_asset: number;
    total_amount_recipient_asset: number;
}
