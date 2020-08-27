import store from '@/store';
import i18n from '@/dependencies/i18n';
import { storageHelper } from '@/helpers/storage.helper';

class LanguageService {
    private constants = {
        DEFAULT: 'nl'
    };

    getBrowserLanguage() {
        return window.navigator.language.indexOf('en') > -1 ? 'en' : 'nl';
    }

    getLocalStorageLanguage() {
        return storageHelper.get('F24_LANGUAGE');
    }

    // This rule will follow: API user settings, localStorage, Browser default language and last default Dutch language
    getUserLanguage(): string {
        return store.state.userStore.session.user?.locale ?? this.getLocalStorageLanguage() ?? this.getBrowserLanguage() ?? this.constants.DEFAULT;
    }

    setLocaleLanguage(value: string) {
        storageHelper.set('F24_LANGUAGE', value);
    }

    setUserLanguage(): void {
        i18n.locale = this.getUserLanguage();
    }
}

const languageService = new LanguageService();

export default languageService;
