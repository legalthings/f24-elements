import ColorHash from 'color-hash';
import i18n from '@/dependencies/i18n';

export function formatDate(date: string, fullDate?: boolean) {
    if (!date) return;
    const dateObject = new Date(date);

    const defaultOptions = fullDate ? {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        dayPeriod: 'short',
        timeZone: 'Europe/Amsterdam',
        literal: ', '
    } : {};

    const format = i18n.locale === 'nl' ? 'nl-NL' : 'en-GB';
    return new Intl.DateTimeFormat(format, defaultOptions).format(dateObject);
}

class ColorGenerator {
    _colorHelper: any;

    constructor() {
        this._colorHelper = new ColorHash({
            saturation: [0.3, 0.5],
            lightness: [0.4, 0.6]
        });
    }

    getHex(value: string) {
        if (!value) return;
        return this._colorHelper.hex(value.split('').reverse().join(''));
    }
}

export const ColorHelper = new ColorGenerator();

export function downloadFile(data: Blob, name: string, ext: string) {
    const url = window.URL.createObjectURL(data);
    const a = window.document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${name}.${ext}`;
    window.document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        window.document.body.removeChild(a);
    }, 0);
}

export function convertToLocaleString(amount: number | string, currency = true) {
    if (typeof amount !== 'number') return amount;
    const locale = i18n.locale === 'nl' ? 'nl-NL' : 'en-GB';
    const convertedAmount = amount.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return currency ? `€ ${convertedAmount}` : convertedAmount;
}

export function isFalseAndNotUndefined(value) {
    return value === false && value !== undefined;
}
