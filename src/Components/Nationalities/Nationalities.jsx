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
      <section
        className="py-24 gap-36 flex justify-center flex-col"
        id="nationalities"
      >
        <div className="nine">
          <h1>
            {t("NATIONS.title")}
            <span>{t("NATIONS.tagline")}</span>
          </h1>
        </div>

        <div className="">
          <Swiper
            modules={[Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={3} // Show one slide per view on small and extra small devices
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
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
