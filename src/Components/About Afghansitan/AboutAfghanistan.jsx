import "./AboutAfghanistan.css";
import { useTranslation } from "react-i18next";
import Carousel from "./Slider/Slider";

export default function AboutAfghanistan() {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-7 lg:px-28 py-24 gap-16 about__section"
      id="about"
    >
      <div className="two alt-two">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl">
          {t("ABOUT.title")}
          <span className="text-xs sm:text-sm lg:text-2xl">
            {t("ABOUT.tagline")}
          </span>
        </h1>
      </div>

      <div className="text-justify about__paragraph lg:text-xl text-base">
        <p className="mb-3">{t("ABOUT.desc1")}</p>
        <p className="mb-3">{t("ABOUT.desc2")}</p>
        <p className="mb-3">{t("ABOUT.desc3")}</p>

        <div className="mt-6">
          <p className="tracking-wide font-semibold">
            <span className="text-cyan-700">Population:</span> 33,000,000
          </p>

          <p className="tracking-wide font-semibold">
            <span className="text-cyan-700">َArea:</span> 612,000,000
          </p>

          <p className="tracking-wide font-semibold">
            <span className="text-cyan-700">Capital City:</span> Kabul
          </p>

          <p className="tracking-wide font-semibold">
            <span className="text-cyan-700">Official Language:</span> Pashto
          </p>

          <p className="tracking-wide font-semibold">
            <span className="text-cyan-700">Currency:</span> AFN
          </p>
        </div>
      </div>

      <Carousel />
    </section>
  );
}
