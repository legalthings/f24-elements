import { AddressTypes } from '@/types/address.types';

export interface UserStoreTypes {
    session: any;
}

export interface SessionTypes {
    user: UserTypes;
    id: string;
    created: string;
    last_modified: string;
    expires: string;
    keepalive: string;
}

export interface UserTypes {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    captcha_response?: string;
    birth_country: string;
    birth_date: string;
    locale: string;
    address?: AddressTypes;
}
