import "./AboutAfghanistan.css";
import { useTranslation } from "react-i18next";
import map1 from "../../assets/Afghanistan_on_the_globe_(Afro-Eurasia_centered).svg.png";
import map2 from "../../assets/istockphoto-165734957-612x612.jpg";
import { useState } from "react";

export default function AboutAfghanistan() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("map");

  const handleClick = () => {
    setActiveTab(activeTab === "map" ? "world" : "map");
  };

  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen px-28 py-24 gap-16 about__section"
      id="about"
    >
      <div className="two alt-two">
        <h1 className="text-5xl">
          {t("ABOUT.title")}
          <span className="text-2xl">{t("ABOUT.tagline")}</span>
        </h1>
      </div>

      <div className="text-justify about__paragraph">
        <p className="mb-3">{t("ABOUT.desc1")}</p>
        <p className="mb-3">{t("ABOUT.desc2")}</p>
        <p className="mb-3">{t("ABOUT.desc3")}</p>
      </div>

      <div className="flex flex-col gap-10 justify-center">
        <ul className="flex justify-center items-center gap-20">
          <li
            onClick={handleClick}
            className={`${
              activeTab === "map" ? "activeTab" : ""
            } text-2xl py-3 tab`}
          >
            Afghanistan Map
          </li>
          <li
            onClick={handleClick}
            className={`${
              activeTab === "world" ? "activeTab" : ""
            } text-2xl py-3 tab`}
          >
            Location Among the World
          </li>
        </ul>

        {activeTab === "map" && (
          <div className="flex justify-center items-center gap-20 mb-10">
            <img src={map2} alt="" className="map__afg shadow-2xl" />

            <div>
              <h2 className="text-4xl font-semibold mb-8">Aghanistan Map</h2>
              <p className="about__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                ea magni quaerat? Unde iure beatae maiores earum vel, ratione
                excepturi expedita velit tempora quisquam, blanditiis eaque,
                repellat illum sunt temporibus? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Rem totam, reprehenderit, animi
                ducimus sunt voluptate dolore, voluptates ut atque sed corrupti
                dignissimos quos. Provident doloribus earum vero facere,
                temporibus ab!
              </p>
            </div>
          </div>
        )}

        {activeTab === "world" && (
          <div className="flex justify-center items-center gap-20">
            <div>
              <h2 className="text-4xl font-semibold mb-8">
                Location Among the World
              </h2>
              <p className="about__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                ea magni quaerat? Unde iure beatae maiores earum vel, ratione
                excepturi expedita velit tempora quisquam, blanditiis eaque,
                repellat illum sunt temporibus? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Rem totam, reprehenderit, animi
                ducimus sunt voluptate dolore, voluptates ut atque sed corrupti
                dignissimos quos. Provident doloribus earum vero facere,
                temporibus ab!
              </p>
            </div>

            <img
              src={map1}
              alt=""
              className="map__world rounded-full shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
