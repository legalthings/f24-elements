import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

interface TranslationFile {
    [key: string]: any;
}

const messages: TranslationFile = {
    en: {
        message: {}
    },
    nl: {
        message: {}
    }
};

const i18n = new VueI18n({
    messages,
    silentTranslationWarn: true
});

export default i18n;
