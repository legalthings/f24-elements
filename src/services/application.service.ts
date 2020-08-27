import authService from '@/services/auth.service';
import store from '@/store';
import { deleteCookie, setCookie } from '@/helpers/cookie.helper';
import { $f24 } from '@/dependencies/dependencies';
import tickerService from '@/services/ticker.service';
import { SnackbarProgrammatic } from 'buefy';
import router from '@/router';

const cssOne = 'padding: 2px; font-size: 12px; background: #d64738; color:white';
const cssTwo = 'padding: 2px; font-size: 12px; background: #128cf4; color:white';

const applicationService = {
    init() {
        // Print webapp version
        console.log(`%c version %c${process.env.VUE_APP_BUILD_VERSION}`, cssTwo, cssOne);

        // Start Application global ticker
        tickerService.start();

        // Check latest application version
        if (process.env.NODE_ENV === 'production') {
            $f24.eventService.$on('tickUpdate', this.checkVersion);
        }
    },

    async unregisterAndClearCaches() {
        const registrations = await navigator.serviceWorker.getRegistrations();
        const unregisterPromises = registrations.map(registration => registration.unregister());
        const allCaches = await caches.keys();
        const cacheDeletionPromises = allCaches.map(cache => caches.delete(cache));
        await Promise.all([...unregisterPromises, ...cacheDeletionPromises]);
        window.location.reload();
    },

    async checkVersion() {
        try {
            const { data } = await authService.getInfo();
            if (data.frontend_version.toString().trim() !== process.env.VUE_APP_BUILD_VERSION.toString()) {
                SnackbarProgrammatic.open({
                    message: 'A new version of this application is available, please update',
                    type: 'is-warning',
                    position: 'is-top',
                    actionText: 'UPDATE',
                    indefinite: true,
                    onAction: () => {
                        applicationService.unregisterAndClearCaches();
                    }
                });
            }
        } catch (e) {
            console.log('Health check has failed', e);
        }
    },

    getUrlSessionId() {
        const regex = /session=(.*?.+(?=&)|.+)/;
        const result = window.location.href.match(regex) || false;
        return result[1];
    },

    async startSession() {
        const hasUrlSession = this.getUrlSessionId();
        if (hasUrlSession) await setCookie('session_id', hasUrlSession);

        if (!await authService.isAuthenticated()) {
            if (router.currentRoute.meta.private) {
                await authService.logout();
            }
            store.commit('userStore/cleanSession');
            deleteCookie('session');
        }
        return Promise.resolve();
    }
};

export default applicationService;
