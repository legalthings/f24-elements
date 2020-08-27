import i18n from '@/dependencies/i18n';
import countriesList from '@/helpers/countriesList';

class FormOptionsService {
    get genders() {
        return [
            {
                name: i18n.t('GLOBAL.MALE'),
                id: 'male'
            },
            {
                name: i18n.t('GLOBAL.FEMALE'),
                id: 'female'
            }
        ];
    }

    get countries() {
        return Object.keys(countriesList[i18n.locale]).map(k => {
            return {
                name: countriesList[i18n.locale][k],
                id: k
            };
        });
    }

    get maritalStatus() {
        return [
            {
                name: i18n.t('FUNNEL.GLOBAL.UNMARRIED_AND_NOT_LIVING_TOGETHER'),
                id: 'UNMARRIED_AND_NOT_LIVING_TOGETHER'
            },
            {
                name: i18n.t('FUNNEL.GLOBAL.UNMARRIED_AND_LIVING_TOGETHER'),
                id: 'UNMARRIED_AND_LIVING_TOGETHER'
            },
            {
                name: i18n.t('FUNNEL.GLOBAL.REGISTERED_PARTNERSHIP'),
                id: 'REGISTERED_PARTNERSHIP'
            },
            {
                name: i18n.t('FUNNEL.GLOBAL.MARRIED'),
                id: 'MARRIED'
            }
        ];
    }

    getCountryNameById(id: string) {
        return countriesList[i18n.locale][id];
    }

    getHighRiskCountryById(id: string | undefined) {
        if (!id) return;
        return this.riskCountries.includes(id);
    }

    get riskCountries() {
        return [
            'AFGHANISTAN',
            'THE_BAHAMAS',
            'BARBADOS',
            'BOTSWANA',
            'CAMBODIA',
            'GHANA',
            'IRAQ',
            'JAMAICA',
            'MAURITIUS',
            'MONGOLIA',
            'MYANMAR_BURMA',
            'NICARAGUA',
            'PAKISTAN',
            'PANAMA',
            'SYRIA',
            'TRINIDAD_AND_TOBAGO',
            'UGANDA',
            'VANUATU',
            'YEMEN',
            'ZIMBABWE'
        ];
    }

    scrollToError() {
        const list = document.getElementsByClassName('has-error');
        const arr = Array.prototype.slice.call(list);
        if (arr.length === 0) return;
        const min = Math.min.apply(null, arr.map(l => l.offsetTop));
        this.scrollToPosition(min + 80);
    }

    scrollToPosition(position: number) {
        window.scroll({
            top: position,
            behavior: 'smooth'
        });
    }
}

const formOptionsService = new FormOptionsService();

export default formOptionsService;
