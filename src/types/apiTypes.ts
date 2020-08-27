import { AxiosRequestConfig } from 'axios';

export interface ApiTypes {

    API_URL(): string;

    get(service: string, params?: Array<RequestParams>, options?: Object): Promise<any>;

    delete(service: string, data?: any, params?: Array<RequestParams>): Promise<any>;

    post(service: string, data?: any, params?: Array<RequestParams>, config?: AxiosRequestConfig): Promise<any>;

    makeApiEndpoint(service: string, params?: Array<RequestParams>): string;

    getApiUrl(): string;

    getFileFromURL(url: string): Promise<any>;
}

export interface RequestParams {
    key: string;
    value: string | number;
}

export interface LoginInterface {
    email: string;
    password: string;
    captcha_response: string;
}

export interface ResetPasswordInterface {
    password: string;
    token: string;
}

export interface ForgotPasswordInterface {
    email: string;
}
