import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18next/index.js";
import "./LanguageSelector.css";

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
      className="lang__input"
    >
      <option value="en">{t("LANGUAGE_INPUT.english")}</option>
      <option value="es">{t("LANGUAGE_INPUT.persian")}</option>
    </select>
  );
};

export default LanguageSelector;
