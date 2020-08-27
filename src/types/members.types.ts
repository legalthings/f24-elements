import { UserTypes } from './user.types';
import { OrganizationShareTypes } from '@/types/organisation.types';

export interface MembersTypes {
    created: string;
    user?: UserTypes;
    organization?: OrganizationShareTypes;
    roles: {
        created: string;
        id: string;
        permissions: Array<any>
    }
}
