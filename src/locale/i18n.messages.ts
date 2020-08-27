const files = require.context('../', true, /\.i18n.ts$/);

type TranslationFile = {
    [key: string]: any;
}

let messages: TranslationFile = {};

messages = {
    nl: {},
    en: {}
};

files.keys().map(file => {
    Object.keys(files(file).TRANSLATIONS).map(f => {
        const key = f.toLowerCase();
        Object.keys(files(file).TRANSLATIONS[f]).map(ff => {
            messages[key][ff] = files(file).TRANSLATIONS[f][ff];
        });
    });
});
export default messages;
