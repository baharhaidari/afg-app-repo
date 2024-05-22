import { useEffect, useState } from "react";
import "./Navbar.css";
import ThemeToggle from "../Theme/ToggleSwitch";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../Language Selector/LanguageSelector";
// import LanguageSelector from "../Language Selector/LanguageSelector";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const { t } = useTranslation();

  // scrolling to the specific sections while clicking on nav libks
  const handleLinkClick = (linkName) => {
    setMenuOpen(false);
    scrollTo(linkName);
  };

  // scrolling to the section by getting its id with a skooth behavior
  const scrollTo = (linkName) => {
    const element = document.getElementById(linkName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // updating active link while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full flex justify-between px-14 py-4 items-center navbar sticky top-0 ">
      <div>
        <a href="#home" className="text-4xl font-medium logo">
          AfghanWander
        </a>
      </div>

      <ul className="flex justify-between gap-6 items-center navlinks__container">
        <li className="text-xl p-2">
          <a
            href="#home"
            onClick={() => handleLinkClick("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            {t("NAVBAR.home")}
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#about"
            onClick={() => handleLinkClick("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            {t("NAVBAR.about")}
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#places"
            onClick={() => handleLinkClick("places")}
            className={activeLink === "places" ? "active" : ""}
          >
            {t("NAVBAR.places")}
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#dishes"
            onClick={() => handleLinkClick("dishes")}
            className={activeLink === "dishes" ? "active" : ""}
          >
            {t("NAVBAR.dishes")}
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#nationalities"
            onClick={() => handleLinkClick("nationalities")}
            className={activeLink === "nationalities" ? "active" : ""}
          >
            {t("NAVBAR.nations")}
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#faq"
            onClick={() => handleLinkClick("faq")}
            className={activeLink === "faq" ? "active" : ""}
          >
            {t("NAVBAR.faqs")}
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className={activeLink === "contact" ? "active" : ""}
          >
            {t("NAVBAR.contact")}
          </a>
        </li>
      </ul>

      <div className="flex gap-2 text-center items-center justify-center">
        <p className="text-xl">
          <ThemeToggle />
        </p>

        <LanguageSelector />
      </div>
    </nav>
  );
}
