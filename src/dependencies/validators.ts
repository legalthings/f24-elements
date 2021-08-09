import { extend } from 'vee-validate';
import { confirmed, email, min, min_value, max_value, numeric, required } from 'vee-validate/dist/rules';

const kvk = {
    validate(value: string) {
        const regex = /^[0-9]{8}$/;
        return !!value.match(regex);
    }
};

const zipcode = {
    validate(value: string) {
        const regex = /^[1-9][0-9]{3}[ -\\.]?[A-Za-z]{2}$/;
        return !!value.match(regex);
    }
};

const isTrue = {
    validate(value: boolean) {
        return value === true;
    }
};

const isHighRiskCountry = {
    validate(value: any) {
        return value.category <= 3;
    }
};

const currency = {
    validate(value: string) {
        const regex = /^(\d+(?:[.,]\d{1,2})?|)$/;
        return regex.test(value);
    }
};

const noBvOnName = {
    validate(value: string) {
        const regex = /\bb\.?v\.?\b/gi;
        return value.toLocaleLowerCase().search(regex) === -1;
    }
};

const atLeastOneDirector = {
    validate(value: any, param: any) {
        return param[0] === 'false';
    }
};

const emptyArray = {
    validate(value: any, param: any) {
        return value.length > 0;
    }
};

const correctAge = {
    validate(value: Date) {
        const today = new Date();
        const min = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
        const max = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        return value < max && value > min;
    }
};

class Validators {
    atLeastOneDirector = {
        validate(value: any, param: any) {
            return param[0] === 'false';
        }
    };

    getErrorMessage: any;

    constructor(i18n: any) {
        this.getErrorMessage = (errors: any) => {
            if (errors.length < 1) return;
            const c = errors[0];
            if (typeof c === 'object') {
                return i18n.t('VALIDATION.' + c.m, { [Object.keys(c)[1]]: c[Object.keys(c)[1]] });
            } else {
                return i18n.t('VALIDATION.' + c);
            }
        };

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
            ...currency,
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
        extend('max', {
            ...max_value,
            message: (_, { max }) => ({ m: 'MAX_LENGTH_AMOUNT', length: max.toString() }) as any
        });
        extend('min', {
            ...min,
            message: (_, { length }) => ({ m: 'MIN_LENGTH_AMOUNT', length: length.toString() }) as any
        });

        // Custom f24 validators
        extend('kvk', {
            ...kvk,
            message: () => ('VALID_KVK_NUMBER')
        });

        extend('isTrue', {
            ...isTrue,
            message: () => ('NOT_POSSIBLE')
        });

        extend('atLeastOneDirector', {
            ...atLeastOneDirector,
            message: () => ('SELECT_DIRECTORS')
        });

        extend('zipcode', {
            ...zipcode,
            message: () => ('VALID_ZIPCODE')
        });

        extend('noBvOnName', {
            ...noBvOnName,
            message: () => ('NAME_CONTAINS_BV')
        });

        extend('emptyArray', {
            ...emptyArray,
            message: () => ('THIS_FIELD_IS_REQUIRED')
        });

        extend('correctAge', {
            ...correctAge,
            message: () => ('VALIDATION.CORRECT_AGE')
        });

        extend('highRiskCountry', {
            ...isHighRiskCountry,
            message: () => ('VALIDATION.NOT_POSSIBLE')
        });
    }
}

export { Validators as default, zipcode };
