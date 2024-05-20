import ThemeSwitch from "../Theme/ToggleSwitch";
import LanguageSelector from "./Language Selector/LanguageSelector";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between px-14 py-4 items-center navbar sticky top-0 ">
      <div>
        <a href="" className="text-4xl font-medium logo">
          AfghanWander
        </a>
      </div>

      <ul className="flex justify-between gap-8 items-center navlinks__container">
        <li className="text-xl p-2">Home</li>
        <li className="text-xl p-2">About</li>
        <li className="text-xl p-2">Popular Places</li>
        <li className="text-xl p-2">FAQ</li>
        <li className="text-xl p-2">Contact</li>
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
