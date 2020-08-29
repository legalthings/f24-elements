import { extend } from 'vee-validate';
import { confirmed, email, min, min_value, numeric, required } from 'vee-validate/dist/rules';
import i18n from '../dependencies/i18n';

class Validators {
    atLeastOneDirector = {
        validate(value, param) {
            return param[0] === 'false';
        }
    };

    zipcode = {
        validate(value) {
            const regex = /^[1-9][0-9]{3}[ -\\.]?[A-Za-z]{2}$/;
            return value.match(regex);
        }
    };

    isTrue = {
        validate(value) {
            return value === true;
        }
    };

    currency = {
        validate(value) {
            const regex = /^(\d+(?:[.,]\d{1,2})?|)$/;
            return regex.test(value);
        }
    };

    noBvOnName = {
        validate(value) {
            const regex = /\bb\.?v\.?\b/gi;
            return value.toLocaleLowerCase().search(regex) === -1;
        }
    };

    kvk = {
        validate(value) {
            const regex = /^[0-9]{7,8}$/;
            return value.match(regex);
        }
    };

    getErrorMessage(errors: any) {
        if (errors.length < 1) return;
        const c = errors[0];
        if (typeof c === 'object') {
            return i18n.t('VALIDATION.' + c.m, { [Object.keys(c)[1]]: c[Object.keys(c)[1]] });
        } else {
            return i18n.t('VALIDATION.' + c);
        }
    }

    constructor() {
        /* This is an example to how to get the input value and pass it to the validator as error messgage

        extend('kvk', {
            ...this.kvk,
            message: (_, { _value_ }) => ({ m: 'VALIDATION.VALID_KVK_NUMBER', v: _value_ }) as any
        });

        */

        // Default validators
        extend('required', {
            ...required,
            message: () => ('THIS_FIELD_IS_REQUIRED')
        });
        extend('email', {
            ...email,
            message: () => ('THIS_FIELD_MUST_BE_A_VALID_EMAIL')
        });
        extend('currency', {
            ...this.currency,
            message: () => ('VALID_CURRENCY')
        });
        extend('confirmed', {
            ...confirmed,
            message: () => ('THIS_FIELD_CONFIRMATION_DOES_NOT_MATCH')
        });
        extend('numeric', {
            ...numeric,
            message: () => ('ONLY_NUMBERS')
        });
        extend('min_value', {
            ...min_value,
            message: () => ('NO_ZERO')
        });
        extend('min', {
            ...min,
            message: (_, { length }) => ({ m: 'MIN_LENGTH_AMOUNT', length: length.toString() }) as any
        });

        // Custom f24 validators
        extend('kvk', {
            ...this.kvk,
            message: () => ('VALID_KVK_NUMBER')
        });

        extend('isTrue', {
            ...this.isTrue,
            message: () => ('NOT_POSSIBLE')
        });

        extend('atLeastOneDirector', {
            ...this.atLeastOneDirector,
            message: () => ('SELECT_DIRECTORS')
        });

        extend('zipcode', {
            ...this.zipcode,
            message: () => ('VALID_ZIPCODE')
        });

        extend('noBvOnName', {
            ...this.noBvOnName,
            message: () => ('NAME_CONTAINS_BV')
        });
    }
}

const validators = new Validators();
export default validators;
