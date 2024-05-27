import React, { useState } from "react";
import "./Slider.css";
import img1 from "../../../assets/137268545_15295031738851n.jpg";
import img2 from "../../../assets/band.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  const slides = [
    {
      id: 1,
      imgUrl: img1,
    },
    {
      id: 2,
      imgUrl: img2,
    },
    {
      id: 3,
      imgUrl: img1,
    },
    {
      id: 4,
      imgUrl: img2,
    },
  ];

  return (
    <div id="carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${currentSlide === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.imgUrl})` }}
        >
          {/* <h1 className="text-5xl bg-slate-200 w-fit mt-4 ml-4 py-3 px-6 rounded-xl text-slate-600">
            Map
          </h1> */}
        </div>
      ))}
      <div className="arrows">
        <i
          className="fa-solid fa-arrow-left icon__left"
          onClick={() =>
            changeSlide((currentSlide + slides.length - 1) % slides.length)
          }
        ></i>
        <i
          className="fa-solid fa-arrow-right icon__right"
          onClick={() => changeSlide((currentSlide + 1) % slides.length)}
        ></i>
      </div>
      <div className="slider-position">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`slider-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => changeSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
