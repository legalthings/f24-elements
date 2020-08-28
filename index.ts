import Vue, { VueConstructor } from 'vue';
import Buefy from 'buefy';
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
import Validators from './src/helpers/validators';
import './src/dependencies/i18n';

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
    install(Vue: any, options) {
        Vue.use(Buefy, { defaultIconPack: 'fa' });
        Vue.component('ValidationObserver', ValidationObserver);
        Vue.component('ValidationProvider', ValidationProvider);
        Vue.component('UiIcon', UiIcon);

        Object.assign(options.messages.en, messages.en);
        Object.assign(options.messages.nl, messages.nl);
        console.log(options);
        // class F24Elements {
        //     constructor() {
        //         console.log('loaded');
        //     }
        // }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const validators = new Validators(options);
    }
};

export default f24Elements;
