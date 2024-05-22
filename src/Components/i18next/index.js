import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import translationsInEng from "../locales/en/translation.json";
// import translationsInSpanish from "../locales/persian/";
// import translationsInGerman from "../locales/german/translation.json";

const resources = {
  en: {
    translation: translationsInEng,
  },
  es: {
    translation: translationsInSpanish,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
