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
import './src/dependencies/i18n';
import Validators from './src/helpers/validators';

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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const val = new Validators(options);
    }
};

export default f24Elements;
