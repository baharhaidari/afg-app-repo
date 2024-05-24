import React from "react";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Nationalities.css";

export default function Nationalities() {
  const { t } = useTranslation();

  let nationalities = t("NATIONS.AFGHANISTAN_NATIONALITIES", {
    returnObjects: true,
  });

  return (
    <>
      <section className="min-h-screen px-28 py-24 gap-36" id="nationalities">
        <div className="two alt-two dishes__section__title flex flex-col justify-center items-center ">
          <h1 className="text-5xl">
            {t("NATIONS.title")}
            <span className="text-2xl">{t("NATIONS.tagline")}</span>
          </h1>
        </div>

        <div className="slider__container px-5 pt-24">
          <Swiper
            modules={[Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
          >
            {nationalities.map((nation, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="py-10 px-7 rounded-md slide__box shadow-xl hover:shadow-2xl ">
                    <h1 className="text-4xl name mb-5">{nation.name}</h1>
                    <p className="nation__desc">{nation.desc}</p>
                    <p className="font-semibold population">
                      Population: {nation.population}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
