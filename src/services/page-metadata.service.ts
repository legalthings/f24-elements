import i18n from '@/dependencies/i18n';
import { Route } from 'vue-router';
import { RouteRecord } from 'vue-router/types/router';

const pageMetadataService = {

    getMatch(matched: any) {
        return matched.slice().reverse().find((r: { meta: { title: any; }; }) => r.meta && r.meta.title);
    },

    getTitle(matched: RouteRecord[], addition?: string | undefined): string {
        const closestTitle = this.getMatch(matched);
        let title;
        if (closestTitle) {
            title = `${i18n.t('PAGE_TITLES.' + closestTitle.meta.title)} | Firm24`;
        } else {
            title = 'Firm24';
        }
        return addition ? `${addition} - ${title}` : title;
    },

    setDefaultPageTitle(to: Route): void {
        const closestTitle = this.getMatch(to.matched);
        if (closestTitle) document.title = this.getTitle(to.matched);
    },

    setPageTitle(to: Route, addition?: string): void {
        document.title = this.getTitle(to.matched, addition);
    }
};

export default pageMetadataService;
