import axios from './axios.service';
import { ApiTypes, RequestParams } from '@/types/apiTypes';
import { AxiosRequestConfig } from 'axios';

const apiService: ApiTypes = {

    API_URL: process.env.NODE_ENV === 'production' ? '/api/' : process.env.VUE_APP_API_URL,

    get(service: string, params?: Array<any>, options?: Object): Promise<any> {
        return axios.get(this.makeApiEndpoint(service, params), options);
    },

    post(service: string, data?: any, params?: Array<RequestParams>, config?: AxiosRequestConfig) {
        return axios.post(this.makeApiEndpoint(service, params), data, config);
    },

    delete(service: string, data: any, params?: Array<RequestParams>) {
        return axios.delete(this.makeApiEndpoint(service, params), data);
    },

    makeApiEndpoint(service: string, params?: Array<RequestParams>): string {
        const baseUrl = this.getApiUrl() + service + '/';
        const apiUrl = new URL(baseUrl);
        if (params) {
            params.forEach(p => apiUrl.searchParams.append(p.key, p.value.toString()));
        }
        return process.env.NODE_ENV === 'production' ? apiUrl.pathname + apiUrl.search : apiUrl.href;
    },

    getApiUrl() {
        // You can find API URL definition on the .env and .env.development files
        return process.env.VUE_APP_API_URL;
    },

    getFileFromURL(url: string) {
        return axios.get(url, {
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/pdf'
            }
        });
    }
};

export default apiService;
