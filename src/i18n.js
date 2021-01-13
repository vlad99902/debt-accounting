import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import settings from "./store/Settings";

import translationRU from "./locales/ru/translationRU.json";
import translationEN from "./locales/en/translationEN.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: settings.language,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
