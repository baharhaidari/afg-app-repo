// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import translationsInEng from "../locales/en/translation.json";
// import translationsInSpanish from "../locales/ps/translation.json";

// const storedLanguage = localStorage.getItem("lang");

// const resources = {
//   en: {
//     translation: translationsInEng,
//   },
//   es: {
//     translation: translationsInSpanish,
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: storedLanguage || "en", // Use storedLanguage if available, otherwise fallback to "en"
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from "../locales/en/translation.json";
import translationsInSpanish from "../locales/ps/translation.json";

const storedLanguage = localStorage.getItem("lang");

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
  lng: storedLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
