import languageService from '@/services/language-service';
import i18n from '@/dependencies/i18n';

jest.mock('@/store', () => ({
    state: {
        userStore: {
            session: {
                user: {
                    locale: 'nl'
                }

            }
        }
    }
}));

describe('Tests language service', () => {
    it('Should return default locale from the store', () => {
        const locale = languageService.getUserLanguage();
        expect(locale).toBe('nl');
    });

    it('Should return default locale', () => {
        languageService.setUserLanguage();
        expect(i18n.locale).toBe('nl');
    });
});
