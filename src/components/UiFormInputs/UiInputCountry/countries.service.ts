import i18n from '@/locale/i18n';

import {
    Country,
    Countries,
    CountryList,
    CountryOption
} from './country.types';

const countries: Countries = require('./countries.json');

export default {
    countries: [] as Country[],

    async getCountries() {
        // @ts-ignore
        this.countries = countries;
    },

    get countryList(): CountryList {
        return this.countries.reduce((acc: any, c: Country) => {
            const country: CountryOption = {
                name: `${c.icon}  ${c.native} -  ${c.name}`,
                id: c
            };
            if (!acc.preferred) {
                acc.preferred = [];
            }
            if (!acc.others) {
                acc.others = [];
            }
            if (c.order <= 1) {
                acc.preferred.push(country);
            } else {
                acc.others.push(country);
            }
            return acc;
        }, {});
    },

    get residencyCountries(): Countries[] {
        console.log(i18n.t('GLOBAL.POPULAR_COUNTRIES'));
        return [
            {
                label: i18n.t('GLOBAL.POPULAR_COUNTRIES') as string,
                items: this.countryList.preferred?.filter((c: any) => c.id.id !== 'NL')
            },
            {
                label: i18n.t('GLOBAL.OTHER_COUNTRIES') as string,
                items: this.countryList.others
            }
        ];
    },

    get preferredCountries(): Countries[] {
        return [
            {
                label: i18n.t('GLOBAL.POPULAR_COUNTRIES') as string,
                items: this.countryList.preferred
            },
            {
                label: i18n.t('GLOBAL.OTHER_COUNTRIES') as string,
                items: this.countryList.others
            }
        ];
    }
};
