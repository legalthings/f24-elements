import Vue, { VueConstructor } from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../assets/scss/styles.scss';
import Validators from '../dependencies/validators';
import messages from '../dependencies/i18n.messages';
import { UiIcon } from '../components';
import Buefy from 'buefy';

export {
    UiIcon,
    UiInputAddress,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputText,
    UiLanguageSelector,
    UiHeader
} from '../components';

export type F24Elements = {
    install(Vue: VueConstructor<Vue>, options: any): void;
};

const f24Elements: F24Elements = {
    install(_Vue: any, options: any) {
        Vue.use(Buefy, { defaultIconPack: 'fa' });

        // TODO use only one instance of Buefy;
        Vue.prototype.$buefy.config.setOptions({ defaultIconPack: 'fa' });

        _Vue.component('ValidationObserver', ValidationObserver);
        _Vue.component('ValidationProvider', ValidationProvider);
        _Vue.component('UiIcon', UiIcon);

        // Add validation messages to main Vue i18n instance
        options.mergeLocaleMessage('nl', messages.nl);
        options.mergeLocaleMessage('en', messages.en);

        const validators = new Validators(options);

        // Set global method get validation error
        _Vue.prototype.$getValidationErrors = validators.getErrorMessage;
    }
};

export default f24Elements;
