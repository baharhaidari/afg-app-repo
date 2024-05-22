import { useEffect, useState } from "react";
import ThemeSwitch from "../Theme/ToggleSwitch";
import LanguageSelector from "./Language Selector/LanguageSelector";
import "./Navbar.css";
import ThemeToggle from "../Theme/ToggleSwitch";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

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
            Home
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#about"
            onClick={() => handleLinkClick("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            About
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#places"
            onClick={() => handleLinkClick("places")}
            className={activeLink === "places" ? "active" : ""}
          >
            Places
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#dishes"
            onClick={() => handleLinkClick("dishes")}
            className={activeLink === "dishes" ? "active" : ""}
          >
            Dishes
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#nationalities"
            onClick={() => handleLinkClick("nationalities")}
            className={activeLink === "nationalities" ? "active" : ""}
          >
            Nationalities
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#faq"
            onClick={() => handleLinkClick("faq")}
            className={activeLink === "faq" ? "active" : ""}
          >
            FAQs
          </a>
        </li>

        <li className="text-xl p-2">
          <a
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className={activeLink === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="flex gap-2 text-center items-center justify-center">
        <p className="text-xl">
          {/* <ThemeSwitch /> */}
          {/* <i class="fa-solid fa-sun"></i> */}
          <ThemeToggle />
        </p>

        <LanguageSelector />
        {/* <select name="" id="" className="text-xl">
          <option value="">English</option>
          <option value="">Persian</option>
        </select> */}
      </div>
    </nav>
  );
}
