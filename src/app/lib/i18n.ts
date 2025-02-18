import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TranslationSchema } from '../types/translations';
import enTranslation from '../locales/en/translation.json';
import zhTranslation from '../locales/zh/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationSchema;
    };
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      zh: {
        translation: zhTranslation,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
      checkWhitelist: true,
    },
  });

export default i18n; 