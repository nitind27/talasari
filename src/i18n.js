import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import mrTranslation from './locales/mr/translation.json';
import hiTranslation from './locales/hi/translation.json';


i18n
    .use(LanguageDetector) // optional for detecting user language
    .use(initReactI18next) // passing i18n instance to react-i18next
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            mr: {
                translation: mrTranslation,
            },
            hi: {
                translation: hiTranslation,
            },
        },
        fallbackLng: 'mr', // default language
        interpolation: {
            escapeValue: false, // react already escapes XSS
        },
    });

export default i18n;
