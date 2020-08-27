import { TranslateResult } from 'vue-i18n';

export interface NavigationItem {
    label: string | TranslateResult;
    url: any;
    isRouter?: boolean;
}
