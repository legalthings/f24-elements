import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './i18n.messages';

Vue.use(VueI18n);

const i18n = new VueI18n({
    messages,
    silentTranslationWarn: true,
    fallbackLocale: 'nl'
});

export default i18n;
