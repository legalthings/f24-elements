import { UserTypes } from './user.types';
import { OrganizationShareTypes } from '@/types/organisation.types';

export interface DocumentTypes {
    name: string;
    version: number;
    draft: boolean;
    finalized: boolean;
    organization: OrganizationShareTypes;
    user: UserTypes;
    created: string;
    id: string;
    legacy_id: string;
    kos_file_name: string;
}
