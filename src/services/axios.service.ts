import axios from 'axios';
import alertService from '@/services/alert.service';
import authService from '@/services/auth.service';
import { getCookie } from '@/helpers/cookie.helper';
import { cacheAdapterEnhancer } from 'axios-extensions';

const cacheConfig = {
    enabledByDefault: false,
    cacheFlag: 'cache'
};

// Add cache control
// @ts-ignore
axios.defaults.adapter = cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig);

// Set X-session header
const session = getCookie('session_id');
if (session) axios.defaults.headers.common['X-session'] = session;

// Errors handler
const handledErrors = [400, 401, 403, 404, 500];

export function errorHandler(error?: any) {
    if (!error.response) {
        if (!window.navigator.onLine) {
            alertService.dangerMessage('Seems that you have no internet connection at this moment', 10000);
        }
        return;
    }

    if (handledErrors.includes(error.response.status)) {
        const message = error.response.data.message ? error.response.data.message : error.response.data;

        // If API returns 401 this will clean user session ID and redirect to Login
        if (error.response.status === 401 && error.response.data.message !== 'invalid credentials') {
            authService.logout();
        }

        alertService.dangerMessage(message.toString());
        return { status: error.response.status, data: message.toString() };
    }
    return error;
}

// Register interceptors
axios.interceptors.response.use(response => {
    return response;
}, error => {
    return errorHandler(error);
});

export default axios;
