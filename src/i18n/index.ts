import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enApp from './locales/en/app.json';

import ukCommon from './locales/uk/common.json';
import ukHome from './locales/uk/home.json';
import ukApp from './locales/uk/app.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    app: enApp,
  },
  uk: {
    common: ukCommon,
    home: ukHome,
    app: ukApp,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Namespace configuration
    defaultNS: 'common',
    ns: ['common', 'home', 'app'],

    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    // React i18next options
    react: {
      useSuspense: false,
    },
  });

export default i18n;
