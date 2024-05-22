import "./Home.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col px-28 gap-8 home__section"
      id="home"
    >
      <h1 className="text-7xl home__title">{t("HOME.title")}</h1>
      <p className="text-justify px-32 home__paragraph font-medium">
        {t("HOME.desc")}
      </p>
      <button className="px-10 py-3 border-2 border-solid border-slate-300 rounded-sm text-2xl glass-btn">
        EXPLORE NOW
      </button>
    </section>
  );
}
