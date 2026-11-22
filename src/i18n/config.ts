import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import bg from './locales/bg.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import it from './locales/it.json';
import pl from './locales/pl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bg: { translation: bg },
      ru: { translation: ru },
      de: { translation: de },
      it: { translation: it },
      pl: { translation: pl },
    },
    supportedLngs: ['en', 'bg', 'ru', 'de', 'it', 'pl'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    fallbackLng: 'en',
    detection: {
      // A language in the link (?lng=de) always wins, so a link sent to a
      // partner opens in the intended language and is remembered afterwards.
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

const syncHtmlLang = (lng?: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = (lng || 'en').split('-')[0];
  }
};
syncHtmlLang(i18n.resolvedLanguage || i18n.language);
i18n.on('languageChanged', syncHtmlLang);

export default i18n;
