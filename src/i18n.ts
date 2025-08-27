import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import arTranslation from './locales/ar.json';
import heTranslation from './locales/he.json';

const resources = {
  ar: { translation: arTranslation },
  he: { translation: heTranslation }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',          
    fallbackLng: 'ar',
    interpolation: { escapeValue: false }
  });

export default i18n;
