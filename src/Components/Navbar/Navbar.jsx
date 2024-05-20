import ThemeSwitch from "../Theme/ToggleSwitch";
import LanguageSelector from "./Language Selector/LanguageSelector";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between px-14 py-4 items-center navbar sticky top-0 ">
      <div>
        <a href="#home" className="text-4xl font-medium logo">
          AfghanWander
        </a>
      </div>

      <ul className="flex justify-between gap-6 items-center navlinks__container">
        <li className="text-xl p-2">
          <a href="#home">Home</a>
        </li>

        <li className="text-xl p-2">
          <a href="#about">About</a>
        </li>

        <li className="text-xl p-2">
          <a href="#places">Places</a>
        </li>

        <li className="text-xl p-2">
          <a href="#dishes">Dishes</a>
        </li>

        <li className="text-xl p-2">
          <a href="#nationalities">Nationalities</a>
        </li>

        <li className="text-xl p-2">
          <a href="#faq">FAQs</a>
        </li>

        <li className="text-xl p-2">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex gap-8 text-center items-center">
        <p className="text-xl">
          {/* <ThemeSwitch /> */}
          <i class="fa-solid fa-sun"></i>
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
