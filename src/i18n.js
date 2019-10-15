import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = ['en', 'ru'];

i18n
    .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step
    .use(LanguageDetector) // load translation using xhr -> see /public/locales
    .use(initReactI18next)
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: availableLanguages[0],
        debug: true,
        whitelist: availableLanguages,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;
