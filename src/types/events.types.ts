import { OrganizationShareTypes } from '@/types/organisation.types';

export interface EventsTypes {
    actions: Array<string>;
    organization: OrganizationShareTypes;
    share: any;
    data: any;
    type: string;
    scope: string;
    context: any;
    created: string;
    id: string;
    isOrganization: boolean;
    classification: any;
    meta: any;
}
