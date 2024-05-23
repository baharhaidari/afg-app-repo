// import React, { useState, useEffect } from "react";
// import i18n from "../i18next/index.js";

// const LanguageSelector = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState(() => {
//     const storedLanguage = localStorage.getItem("lang");
//     return storedLanguage || i18n.language;
//   });

//   useEffect(() => {
//     i18n.changeLanguage(selectedLanguage);
//     localStorage.setItem("lang", selectedLanguage);
//   }, [selectedLanguage]);

//   const chooseLanguage = (e) => {
//     const language = e.target.value;
//     setSelectedLanguage(language);
//   };

//   return (
//     <select
//       value={selectedLanguage}
//       onChange={chooseLanguage}
//       className="lang-input"
//     >
//       <option value="en">English</option>
//       <option value="es">Persian</option>
//     </select>
//   );
// };
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18next/index.js";

const LanguageSelector = () => {
  const { t } = useTranslation();

  const storedLanguage = localStorage.getItem("lang");
  const [selectedLanguage, setSelectedLanguage] = useState(
    storedLanguage || i18n.language
  );

  useEffect(() => {
    localStorage.setItem("lang", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const chooseLanguage = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
  };

  return (
    <select
      value={selectedLanguage}
      onChange={chooseLanguage}
      className="lang-input"
    >
      <option value="en">{t("LANGUAGE_INPUT.english")}</option>
      <option value="es">{t("LANGUAGE_INPUT.persian")}</option>
    </select>
  );
};

export default LanguageSelector;
