import React, { useState } from "react";
import "./PopularPlaces.css";
import PlacesSearch from "../Places Search/PlacesSearch";
import Cards from "../Cards/Cards";
import { useTranslation } from "react-i18next";

export default function PopularPlaces() {
  const { t } = useTranslation();
  let data = t("PLACES.POPULAR_PLACES", { returnObjects: true });

  const [visiblePlaces, setVisiblePlaces] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter places based on search query
  const filteredPlaces = data.filter((place) =>
    place.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showMorePlaces = () => {
    setVisiblePlaces((prevVisiblePlaces) => prevVisiblePlaces + 6);
  };

  return (
    <section
      className="places__section flex flex-col justify-center py-24 gap-12"
      id="places"
    >
      <div class="nine">
        <h1>
          {t("PLACES.title")}
          <span>{t("PLACES.tagline")}</span>
        </h1>
      </div>

      <div className="test">
        <PlacesSearch
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </div>

      <div className="cards__wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredPlaces.slice(0, visiblePlaces).map((place, index) => (
          <Cards
            key={index}
            id={place.id}
            img={place.img}
            title={place.title}
            desc={place.desc}
            to={`/place/${place.id}`}
          />
        ))}
      </div>

      <div className="flex justify-center">
        {visiblePlaces < data.length && (
          <button
            className="show__more px-8 py-2 border-2 border-solid border-cyan-500 rounded-sm text-2xl bg-cyan-500 text-white shadow-md hover:shadow-lg"
            onClick={showMorePlaces}
          >
            More Places
          </button>
        )}
      </div>
    </section>
  );
}
