import React, { useState, useEffect } from "react";
import i18n from "../i18next/index.js";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("lang") || i18n.language
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("lang", selectedLanguage);
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
      <option value="en">English</option>
      <option value="es">Persian</option>
      {/* <option value="german">{t("LANGUAGE_INPUT.german")}</option> */}
    </select>
  );
};

export default LanguageSelector;
