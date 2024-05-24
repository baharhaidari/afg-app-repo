import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      updateTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    updateTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const updateTheme = (selectedTheme) => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme", selectedTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-btn text-2xl">
      {theme === "light" ? (
        <i className="bx bxs-sun"></i>
      ) : (
        <i className="bx bxs-moon"></i>
      )}
    </button>
  );
}
