'use client'

import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'pt',
      supportedLngs: ['pt', 'en', 'es', 'ar'],
      ns: ['header', 'footer', 'common', 'numberSectionHome'],
      defaultNS: 'common',
      backend: {
        // configure via env; TMS CDN recommended (Locize example)
        // e.g. NEXT_PUBLIC_I18N_LOAD_PATH = "https://cdn.locize.app/{{projectId}}/{{version}}/{{lng}}/{{ns}}.json"
        loadPath: process.env.NEXT_PUBLIC_I18N_LOAD_PATH || '/locales/{{lng}}/{{ns}}.json',
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      react: { useSuspense: false },
      interpolation: { escapeValue: false },
    })
}

export default i18n
