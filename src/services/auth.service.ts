import store from '@/store';
import apiService from '@/services/api.service';
import { cookieHelper, deleteCookie, getCookie, setCookie } from '@/helpers/cookie.helper';
import { ForgotPasswordInterface, LoginInterface, ResetPasswordInterface } from '@/types/apiTypes';
import { SessionTypes, UserTypes } from '@/types/user.types';
import languageService from '@/services/language-service';
import axios from '@/services/axios.service';
import router from '@/router';

const authService = {

    // TODO You may want to perform only one action inside this method
    async isAuthenticated(): Promise<boolean> {
        const id = cookieHelper.get('session_id');
        if (!id) return Promise.resolve(false);
        try {
            const { status, data } = await apiService.get('sessions/' + id);
            if (status === 200) {
                await this.setSessionAndUser(data);
            } else {
                cookieHelper.delete('session_id');
            }
            return Promise.resolve(status === 200);
        } catch (e) {
            // TODO logger interface for errors/exceptions
            console.log('Error trying to login with current ID: ', id);
            return Promise.reject(e);
        }
    },

    async getInfo(): Promise<any> {
        try {
            return await apiService.get('info');
        } catch (e) {
            return Promise.reject(e);
        }
    },

    hasLocalSession() {
        return getCookie('session_id');
    },

    setSessionAndUser(d: SessionTypes) {
        axios.defaults.headers.common['X-session'] = d.id;
        setCookie('session_id', d.id);
        store.commit('userStore/updateSession', d);
        languageService.setUserLanguage();
    },

    async logout(redirect = false): Promise<any> {
        const id = getCookie('session_id');
        try {
            await apiService.delete('sessions/' + id);
            deleteCookie('session_id');
            return;
        } catch (e) {
            console.log('Error logging out', e);
        } finally {
            if (redirect) {
                window.location.href = 'https://www.firm24.com/uitlog/';
            } else if (router.currentRoute.name !== 'login') {
                await router.push({ name: 'login' });
                store.commit('userStore/cleanSession');
            }
        }
    },

    async login(d: LoginInterface): Promise<any> {
        try {
            const { status, data } = await apiService.post('sessions', d);
            if (status === 201) {
                this.setSessionAndUser(data);
            }
            return { status, data };
        } catch (e) {
            console.log('error', e);
        }
    },

    async resetPassword(d: ResetPasswordInterface): Promise<any> {
        try {
            const { status, data } = await apiService.post('actions/set-password', d);
            if (status === 201) {
                this.setSessionAndUser(data);
            }
            return { status, data };
        } catch (e) {
            console.log('error', e);
        }
    },

    async forgotPassword(d: ForgotPasswordInterface): Promise<any> {
        try {
            const { status, data } = await apiService.post('actions/forgot-password', d);
            return { status, data };
        } catch (e) {
            console.log('error', e);
        }
    },

    async addUser(d: UserTypes): Promise<any> {
        try {
            const { status, data } = await apiService.post('users', d);
            if (status === 201) {
                this.setSessionAndUser(data);
            }
            return { status, data };
        } catch (e) {
            console.log('error', e);
        }
    }
};

export default authService;
