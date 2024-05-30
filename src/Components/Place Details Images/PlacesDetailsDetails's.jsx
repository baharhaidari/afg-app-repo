import React from "react";
import img1 from "../../assets/band-e-amir-national.jpg";
import img2 from "../../assets/pangshir.jpg";
import "./PlacesDetailsDetails's.css";
import { useNavigate } from "react-router-dom";

export default function PlaceDeatilsDetails() {
  const naviagte = useNavigate();

  const images = [img1, img2, img1, img2, img1, img2, img1, img2];

  const clickHandler = () => {
    naviagte(-1); // Navigates back to the previous route
  };
  return (
    <section className="flex flex-col justify-center min-h-screen px-4 sm:px-7 lg:px-28 py-24 gap-12">
      <div className="two alt-two flex justify-start items-center flex-col">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl places__section__title">
          City Details
          <span className="text-xs sm:text-sm lg:text-2xl">Explore it</span>
        </h1>
      </div>

      <a
        onClick={clickHandler}
        className="text-xl cursor-pointer text-gray-600"
      >
        <i class="fa-solid fa-arrow-left mr-2"></i> Back
      </a>

      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        dolorum odio esse beatae laboriosam culpa repudiandae odit. Dignissimos
        explicabo tempore maiores sint. Voluptatibus dolor eius cumque sint
        nesciunt similique optio? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ab temporibus maxime dolores. Nobis veniam cum
        temporibus deleniti iusto reiciendis, aspernatur dolorum, nostrum rerum
        autem explicabo maxime laboriosam doloremque, dolores a.
      </p>

      <div className="grid grid-cols-3 gap-10">
        {images.map((img, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={img}
                className="object-cover w-full h-64 detail__img"
                alt={`Image ${index}`}
              />
              <i className="fas fa-search detail__icon"></i>
            </div>
          );
        })}
      </div>
    </section>
  );
}
