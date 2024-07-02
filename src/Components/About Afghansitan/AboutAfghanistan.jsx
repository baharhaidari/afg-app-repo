import "./AboutAfghanistan.css";
import { useTranslation } from "react-i18next";
import Carousel from "./Slider/Slider";

export default function AboutAfghanistan() {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col justify-center items-center py-24 gap-16 about__section"
      id="about"
    >
      <div className="nine">
        <h1>
          {t("ABOUT.title")}
          <span>{t("ABOUT.tagline")}</span>
        </h1>
      </div>

      <div className="text-justify about__paragraph lg:text-lg text-base">
        <p className="mb-3">{t("ABOUT.desc1")}</p>
        <p className="mb-3">{t("ABOUT.desc2")}</p>
        <p className="mb-3">{t("ABOUT.desc3")}</p>

        <div className="mt-14 flex justify-around flex-wrap gap-3">
          <p className="tracking-wide font-semibold py-3 px-5 rounded-lg bg-cyan-200 text-slate-600">
            <span className="text-cyan-700">Population:</span> 33,000,000 M
          </p>

          <p className="tracking-wide font-semibold border-slate-600 py-3 px-5 rounded-lg bg-red-300 text-slate-600">
            <span className="text-cyan-700">Area:</span> 612,000,000 km²
          </p>

          <p className="tracking-wide font-semibold border-slate-600 py-3 px-5 rounded-lg bg-amber-200 text-slate-600">
            <span className="text-cyan-700">Capital City:</span> Kabul
          </p>

          <p className="tracking-wide font-semibold border-slate-600 py-3 px-5 rounded-lg bg-emerald-300 text-slate-600">
            <span className="text-cyan-700">Official Language:</span> Pashto
          </p>

          <p
            className="tracking-wide font-semibold border-slate-600 py-3 px-5 bg-violet-300 rounded-lg text-slate-600"
            rounded-lg
          >
            <span className="text-cyan-700">Currency:</span> AFN
          </p>
        </div>
      </div>

      <Carousel />
    </section>
  );
}
