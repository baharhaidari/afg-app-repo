import "./Home.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col px-7 sm:px-3 md:px-12 lg:px-28 gap-8 home__section"
      id="home"
    >
      <h1 className="text-5xl home__title sm:text-5xl md:text-6xl lg:text-7xl px-10">
        {t("HOME.title")}
      </h1>
      <p className="text-justify px-3 sm:px-7 md:px-10 lg:px-32 home__paragraph font-medium ">
        {t("HOME.desc")}
      </p>
      <button className="px-10 py-3 border-2 border-solid border-slate-300 rounded-sm text-2xl glass-btn hover:scale-105">
        <a href="#places">EXPLORE NOW</a>
      </button>
    </section>
  );
}
