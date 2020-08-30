import Vue, { VueConstructor } from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../assets/scss/styles.scss';
import Validators from '../dependencies/validators';
import messages from '../dependencies/i18n.messages';
import { UiIcon } from '../components';
import Buefy from 'buefy';

import ConfigComponent from 'buefy/src/utils/ConfigComponent';

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
        window.Vue.use(Buefy, { defaultIconPack: 'fa' });
        _Vue.use(Buefy, { defaultIconPack: 'fa' });
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

// export all components as vue plugin
export * from 'buefy/src/components';
// export programmatic component
export { DialogProgrammatic } from 'buefy/src/components/dialog';
export { LoadingProgrammatic } from 'buefy/src/components/loading';
export { ModalProgrammatic } from 'buefy/src/components/modal';
export { NotificationProgrammatic } from 'buefy/src/components/notification';
export { SnackbarProgrammatic } from 'buefy/src/components/snackbar';
export { ToastProgrammatic } from 'buefy/src/components/toast';
export { ConfigComponent as ConfigProgrammatic };
// export helpers
export * from 'buefy/src/utils/helpers';
