import "./AboutAfghanistan.css";
import { useTranslation } from "react-i18next";
import map1 from "../../assets/Afghanistan_on_the_globe_(Afro-Eurasia_centered).svg.png";
import map2 from "../../assets/istockphoto-165734957-612x612.jpg";
import img3 from "../../assets/photo-1642917457648-de25f59aeaa7.avif";
import { useState } from "react";

export default function AboutAfghanistan() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("map");

  const handleClick = (tab) => {
    setActiveTab(tab);
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

      <div className="flex flex-col gap-16 justify-center">
        <ul className="flex justify-center items-center gap-40 bg-slate-200 p-3">
          <li
            onClick={() => handleClick("map")}
            className={`${
              activeTab === "map" ? "activeTab" : ""
            } text-2xl py-1 tab`}
          >
            Afghanistan Map
          </li>

          <li
            onClick={() => handleClick("world")}
            className={`${
              activeTab === "world" ? "activeTab" : ""
            } text-2xl py-1 tab`}
          >
            Location on the World
          </li>

          <li
            onClick={() => handleClick("flag")}
            className={`${
              activeTab === "flag" ? "activeTab" : ""
            } text-2xl py-1 tab`}
          >
            Afghanistan Flag
          </li>
        </ul>

        <div className="px-20 flex justify-center items-center gap-20 mb-10">
          {activeTab === "map" && (
            <div className="flex gap-20 ">
              <div>
                <h2 className="text-4xl font-semibold mb-8 heading">
                  Aghanistan Map
                </h2>
                <p className="about__paragraph ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ea magni quaerat? Unde iure beatae maiores earum vel,
                  ratione excepturi expedita velit tempora quisquam, blanditiis
                  eaque, repellat illum sunt temporibus? Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Rem totam, reprehenderit,
                  animi ducimus sunt voluptate dolore, voluptates ut atque sed
                  corrupti dignissimos quos. Provident doloribus earum vero
                  facere, temporibus ab!
                </p>
              </div>

              <img src={map2} alt="" className="map__afg shadow-2xl" />
            </div>
          )}
          {activeTab === "world" && (
            <div className="flex gap-20">
              <div>
                <h2 className="text-4xl font-semibold mb-8 heading">
                  Location on the World
                </h2>
                <p className="about__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ea magni quaerat? Unde iure beatae maiores earum vel,
                  ratione excepturi expedita velit tempora quisquam, blanditiis
                  eaque, repellat illum sunt temporibus? Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Rem totam, reprehenderit,
                  animi ducimus sunt voluptate dolore, voluptates ut atque sed
                  corrupti dignissimos quos. Provident doloribus earum vero
                  facere, temporibus ab!
                </p>
              </div>

              <img
                src={map1}
                alt=""
                className="map__world rounded-full shadow-2xl"
              />
            </div>
          )}

          {activeTab === "flag" && (
            <div className="flex gap-20">
              <div>
                <h2 className="text-4xl font-semibold mb-8 heading">
                  Afghanistan Flag
                </h2>
                <p className="about__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ea magni quaerat? Unde iure beatae maiores earum vel,
                  ratione excepturi expedita velit tempora quisquam, blanditiis
                  eaque, repellat illum sunt temporibus? Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Rem totam, reprehenderit,
                  animi ducimus sunt voluptate dolore, voluptates ut atque sed
                  corrupti dignissimos quos. Provident doloribus earum vero
                  facere, temporibus ab!
                </p>
              </div>

              <img src={img3} alt="" className="afg__flag shadow-2xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
