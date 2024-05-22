import React, { useState } from "react";
import "./PopularPlaces.css";
import img1 from "../../assets/pangshir.jpg";
import img2 from "../../assets/band-e-amir-national.jpg";
import PlacesSearch from "../Places Search/PlacesSearch";
import Cards from "../Cards/Cards";
import { useTranslation } from "react-i18next";

export default function PopularPlaces() {
  const { t } = useTranslation();

  let data = t("PLACES.POPULAR_PLACES", { returnObjects: true });

  const [visiblePlaces, setVisiblePlaces] = useState(6);

  const showMorePlaces = () => {
    setVisiblePlaces((prevVisiblePlaces) => prevVisiblePlaces + 6);
  };

  return (
    <section
      className="places__section flex flex-col justify-center min-h-screen px-28 py-24 gap-12"
      id="places"
    >
      <div className="two alt-two flex justify-start items-center flex-col">
        <h1 className="text-5xl places__section__title">
          {t("PLACES.title")}
          <span className="text-2xl">{t("PLACES.tagline")}</span>
        </h1>
      </div>

      <div className="test">
        <PlacesSearch />
      </div>

      <div className="cards__wrapper grid grid-cols-3 gap-16">
        {data.slice(0, visiblePlaces).map((place, index) => (
          <Cards
            key={index}
            img={place.img}
            title={place.title}
            desc={place.desc}
          />
        ))}
      </div>

      <div className="flex justify-center">
        {visiblePlaces < data.length && (
          <button
            className="px-8 py-2 border-2 border-solid border-cyan-500 rounded-sm text-2xl bg-cyan-500 text-white"
            onClick={showMorePlaces}
          >
            More Places
          </button>
        )}
      </div>
    </section>
  );
}
