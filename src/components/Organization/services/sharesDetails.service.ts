import i18n from '@/dependencies/i18n';
import { convertToLocaleString, formatDate } from '@/helpers/utility.helper';

class SharesDetailsService {
    getShares(data: any) {
        return [
            {
                label: i18n.t('EVENTS_DETAILS.LEGAL_FACT'),
                value: data.meta ? i18n.t('EVENTS_DETAILS.' + data.meta.legal_fact.toUpperCase()) : '-'
            },
            {
                label: i18n.t('EVENTS_DETAILS.BY_DEED_OF_CIVIL_LAW_NOTARY'),
                value: data.context.organization.name
            },
            {
                label: i18n.t('EVENTS_DETAILS.AMOUNT_OF_SHARES'),
                value: data.share.amount
            },
            {
                label: i18n.t('EVENTS_DETAILS.TYPE_OF_SHARE'),
                value: i18n.t('ORGANIZATIONS_SHAREHOLDERS.' + data.share.asset.toUpperCase())
            },
            {
                label: i18n.t('EVENTS_DETAILS.NOMINAL_AMOUNT_PER_SHARE'),
                value: convertToLocaleString(this.getNominalValue(data))
            },
            {
                label: i18n.t('EVENTS_DETAILS.NUMBERS_SHARES'),
                value: this.getNumberShares(data)
            },
            {
                label: i18n.t('EVENTS_DETAILS.DATE_OF_LEGAL_FACT'),
                value: formatDate(data.created)
            },
            {
                label: i18n.t('EVENTS_DETAILS.DATE_OF_ACKNOWLEDGEMENT'),
                value: formatDate(data.created)
            }
        ];
    }

    getOrganizationNameChange(data: any) {
        return [
            {
                label: i18n.t('GLOBAL.TYPE'),
                value: i18n.t('EVENTS_DETAILS.ORGANIZATION_NAME_CHANGED')
            },
            {
                label: i18n.t('EVENTS_DETAILS.BY_DEED_OF_CIVIL_LAW_NOTARY'),
                value: data.context.organization.name
            },
            {
                label: i18n.t('EVENTS_DETAILS.DATE_OF_CHANGE'),
                value: formatDate(data.created)
            },
            {
                label: i18n.t('EVENTS_DETAILS.NEW_NAME'),
                value: data.data.name
            }
        ];
    }

    getOrganizationRegistrationCityChange(data: any) {
        return [
            {
                label: i18n.t('GLOBAL.TYPE'),
                value: i18n.t('EVENTS_DETAILS.ORGANIZATION_REGISTERED_CITY_CHANGED')
            },
            {
                label: i18n.t('EVENTS_DETAILS.BY_DEED_OF_CIVIL_LAW_NOTARY'),
                value: data.context.organization.name
            },
            {
                label: i18n.t('EVENTS_DETAILS.DATE_OF_CHANGE'),
                value: formatDate(data.created)
            },
            {
                label: i18n.t('EVENTS_DETAILS.NEW_REGISTERED_OFFICE'),
                value: data.data.registered_city || i18n.t('GLOBAL.NOT_YET_AVAILABLE')
            }
        ];
    }

    getOrganizationCreated(data: any) {
        return [
            {
                label: i18n.t('GLOBAL.TYPE'),
                value: i18n.t('EVENTS_DETAILS.ORGANIZATION_CREATED')
            },
            {
                label: i18n.t('EVENTS_DETAILS.BY_DEED_OF_CIVIL_LAW_NOTARY'),
                value: data.context.organization.name
            },
            {
                label: i18n.t('EVENTS_DETAILS.DATE_OF_CHANGE'),
                value: formatDate(data.created)
            },
            {
                label: i18n.t('EVENTS_DETAILS.NEW_REGISTERED_OFFICE'),
                value: data.data.registered_city || i18n.t('GLOBAL.NOT_YET_AVAILABLE')
            }
        ];
    }

    getOrganizationIncorporated(data: any) {
        return [
            {
                label: i18n.t('GLOBAL.TYPE'),
                value: i18n.t('EVENTS_DETAILS.ORGANIZATION_INCORPORATED')
            },
            {
                label: i18n.t('EVENTS_DETAILS.BY_DEED_OF_CIVIL_LAW_NOTARY'),
                value: data.context.organization.name
            },
            {
                label: i18n.t('EVENTS_DETAILS.DATE_OF_CHANGE'),
                value: formatDate(data.created)
            }
        ];
    }

    getNominalValue(data: any) {
        const value = data.organization.share_values_summary.find((s: any) => s.asset === data.share.asset) || { value: '-' };
        return value.value;
    }

    getNumberShares(data: any) {
        return `${data.share.number[0].from} to ${data.share.number[0].to}`;
    }
}

export default SharesDetailsService;
