import { extend } from 'vee-validate';
import { confirmed, email, min, min_value, numeric, required } from 'vee-validate/dist/rules';
import i18n from '@/dependencies/i18n';
import formOptionsService from '@/services/form-options-service';

const kvk = {
    validate(value) {
        const regex = /^[0-9]{7,8}$/;
        return value.match(regex);
    }
};
const zipcode = {
    validate(value) {
        const regex = /^[1-9][0-9]{3}[ -\\.]?[A-Za-z]{2}$/;
        return value.match(regex);
    }
};

const isTrue = {
    validate(value) {
        return value === true;
    }
};

const isHighRiskCountry = {
    validate(value) {
        return !formOptionsService.getHighRiskCountryById(value);
    }
};

const currency = {
    validate(value) {
        const regex = /^(\d+(?:[.,]\d{1,2})?|)$/;
        return regex.test(value);
    }
};

const noBvOnName = {
    validate(value) {
        const regex = /\bb\.?v\.?\b/gi;
        return value.toLocaleLowerCase().search(regex) === -1;
    }
};

extend('required', {
    ...required,
    message: (_, values) => (i18n.t('VALIDATION.THIS_FIELD_IS_REQUIRED', values)) as string
});

extend('email', {
    ...email,
    message: (_, values) => (i18n.t('VALIDATION.THIS_FIELD_MUST_BE_A_VALID_EMAIL', values)) as string
});

extend('confirmed', {
    ...confirmed,
    message: (_, values) => (i18n.t('VALIDATION.THIS_FIELD_CONFIRMATION_DOES_NOT_MATCH', values)) as string
});

extend('kvk', {
    ...kvk,
    message: (_, values) => (i18n.t('VALIDATION.VALID_KVK_NUMBER', values)) as string
});

extend('numeric', {
    ...numeric,
    message: (_) => ('Only number')
});

extend('isTrue', {
    ...isTrue,
    message: (_) => (i18n.t('FUNNEL.GLOBAL.NOT_POSSIBLE')) as string
});

extend('highRickCountry', {
    ...isHighRiskCountry,
    message: (_) => ('Unfortunately you can proceed if you live in this country')
});

extend('currency', {
    ...currency,
    message: (_) => ('Use valid currency format')
});

extend('min_value', {
    ...min_value,
    message: (_) => ('Cannot be zero')
});

const atLeastOneDirector = {
    validate(value, param) {
        return param[0] === 'false';
    }
};

extend('atLeastOneDirector', {
    ...atLeastOneDirector,
    message: (_) => ('Please select the directors')
});

extend('zipcode', {
    ...zipcode,
    message: (_) => ('Please use valid zipcode')
});

extend('min', {
    ...min,
    message: (_, { length }) => (i18n.t('VALIDATION.MIN_LENGTH_AMOUNT', { length: length.toString() })) as string
});

extend('noBvOnName', {
    ...noBvOnName,
    message: (_) => (i18n.t('FUNNEL.GLOBAL.NAME_CONTAINS_BV')) as string
});
