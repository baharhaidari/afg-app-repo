import React from "react";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Nationalities.css";

export default function Nationalities() {
  const AFGHANSITAN_NATIONALITY = [
    {
      name: "Pashtun",
      desc: "The Pashtuns are the largest ethnic group in Afghanistan and are primarily concentrated in the southern, eastern, and southeastern regions of the country, including provinces such as Kandahar, Nangarhar, and Paktia.",
      population: "42-45%",
    },
    {
      name: "Tajik",
      desc: "Tajiks are predominantly located in the northern, central, and western parts of Afghanistan, including provinces such as Kabul, Balkh, and Herat.",
      population: "27-30%",
    },
    {
      name: "Hazara",
      desc: "The Hazara community is mainly found in central Afghanistan, particularly in provinces such as Bamyan, Daykundi, and Ghazni.",
      population: "9-12%",
    },
    {
      name: "Uzbek",
      desc: "Uzbeks are primarily concentrated in northern Afghanistan, including provinces such as Kunduz, Balkh, and Jowzjan.",
      population: "5-9%",
    },
    {
      name: "Aimaq",
      desc: "Aimaqs are mostly found in western Afghanistan, particularly in provinces such as Ghor, Herat, and Badghis.",
      population: "2-4%",
    },
    {
      name: "Turkmen",
      desc: "The Turkmen community is mainly located in the northern parts of Afghanistan, including provinces such as Faryab, Jawzjan, and Sar-e Pol.",
      population: "1-3%",
    },
    {
      name: "Baloch",
      desc: "Baloch people are scattered across several provinces in southern and western Afghanistan, including areas such as Nimruz, Helmand, and Kandahar.",
      population: "1-2%",
    },
    {
      name: "Nuristani",
      desc: "The Nuristani community resides primarily in the eastern parts of Afghanistan, particularly in provinces such as Nuristan and Kunar.",
      population: "less than 1%",
    },
  ];

  return (
    <>
      <section className="min-h-screen px-28 py-24 gap-36" id="nationalities">
        <div className="two alt-two dishes__section__title flex flex-col justify-center items-center ">
          <h1 className="text-5xl">
            AFGHANISTAN NATIONALITIES
            <span className="text-2xl">
              Discover the Diverse Tapestry of Afghanistan's Nationalities
            </span>
          </h1>
        </div>

        <div className="slider__container px-5 pt-24">
          <Swiper
            modules={[Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
          >
            {AFGHANSITAN_NATIONALITY.map((nation, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="py-10 px-7 rounded-md slide__box shadow-xl">
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
