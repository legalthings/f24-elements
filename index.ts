import Vue, { VueConstructor } from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import {
    UiIcon,
    UiInputAddress,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox,
    UiInputText
} from './src/components';
import './src/assets/scss/styles.scss';
import Validators from './src/dependencies/validators';
import messages from './src/dependencies/i18n.messages';

export {
    UiInputText,
    UiInputAddress,
    UiInputCheckbox,
    UiInputDatepicker,
    UiInputRadio,
    UiInputSelectbox
};

export type F24Elements = {
    install(Vue: VueConstructor<Vue>, options: any): void;
};

const f24Elements: F24Elements = {
    install(_Vue: any, options) {
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
