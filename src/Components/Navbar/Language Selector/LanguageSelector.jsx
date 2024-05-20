import React from "react";
import "./LanguageSelector.css";

export default function LanguageSelector() {
  return (
    <div className="dropdown" tabIndex="0">
      <button className="dropdown-button" id="dropdown-btn">
        Language
      </button>
      <ul className="dropdown-content" id="dropdown-content">
        <li>English</li>
        <li>فارسی</li>
        <li>English</li>
        <li>فارسی</li>
        <li>English</li>
        <li>فارسی</li>
      </ul>
    </div>
  );
}
