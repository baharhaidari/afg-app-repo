// import React from "react";
// import { useParams, useNavigate, Outlet } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import "./PlacesDetailsDetails's.css";

// export default function PlaceDeatilsDetails() {
//   const { placeId, detailId } = useParams();
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const data = t("PLACES.POPULAR_PLACES", { returnObjects: true });
//   const place = data.find((p) => p.id === parseInt(placeId));

//   const extractedData = place.details.PLACE;
//   const desiredPlace = extractedData.find((d) => d.id === parseInt(detailId));

//   if (!desiredPlace) {
//     return <div>Detail not found</div>;
//   }

//   const { title, images } = desiredPlace;

//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <section className="flex flex-col justify-center min-h-screen px-4 sm:px-7 lg:px-28 py-24 gap-12">
//       <div className="two alt-two flex justify-start items-center flex-col">
//         <h1 className="text-4xl sm:text-4xl lg:text-5xl places__section__title uppercase">
//           {title}
//           <span className="text-xs sm:text-sm lg:text-2xl capitalize">
//             Explore it
//           </span>
//         </h1>
//       </div>

//       <a onClick={goBack} className="text-xl cursor-pointer text-gray-600">
//         <i className="fa-solid fa-arrow-left mr-2"></i> Back
//       </a>

//       <p className="text-lg">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa rerum
//         optio perferendis magnam in officiis quidem tempore officia autem! Ab
//         cum iste quis rerum fuga debitis voluptate atque distinctio. Lorem ipsum
//         dolor sit amet consectetur adipisicing elit. Esse laboriosam, pariatur
//         assumenda tempora nobis odit quis quisquam, sint, delectus deserunt
//         dolor quas perferendis? Id recusandae possimus fugiat laboriosam
//         sapiente sed.
//       </p>

//       <div className="grid grid-cols-3 gap-10">
//         {images.map((img, index) => (
//           <div key={index} className="relative">
//             <img
//               src={img}
//               className="object-cover w-full h-64 detail__img"
//               alt={`Image ${index}`}
//             />
//             <i className="fas fa-search detail__icon"></i>
//           </div>
//         ))}
//       </div>

//       <Outlet />
//     </section>
//   );
// }

import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./PlacesDetailsDetails's.css"

export default function PlaceDeatilsDetails() {
  // const { placeId, detailId } = useParams();
  // const navigate = useNavigate();
  // const { t } = useTranslation();

  // const data = t("PLACES.POPULAR_PLACES", { returnObjects: true });
  // const place = data.find((p) => p.id === parseInt(placeId));

  // if (!place) {
  //   return <p>Place not found</p>;
  // }

  // const desiredPlace = place.details.PLACE.find(
  //   (d) => d.id === parseInt(detailId)
  // );

  // if (!desiredPlace) {
  //   return <p>Detail not found</p>;
  // }

  // const { title, images } = desiredPlace;

  // const goBack = () => {
  //   navigate(-1);
  // };

  // // Example for PlaceDeatils
  // useEffect(() => {
  //   console.log("PlaceDeatils mounted");
  // }, []);
  console.log("i am getting logged")
  return (
    <section className="flex flex-col justify-center min-h-screen px-4 sm:px-7 lg:px-28 py-24 gap-12">
      <div className="two alt-two flex justify-start items-center flex-col">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl places__section__title uppercase">
          X
          <span className="text-xs sm:text-sm lg:text-2xl capitalize">
            Explore it
          </span>
        </h1>
      </div>

      <a className="text-xl cursor-pointer text-gray-600">
        <i className="fa-solid fa-arrow-left mr-2"></i> Back
      </a>

      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa rerum
        optio perferendis magnam in officiis quidem tempore officia autem! Ab
        cum iste quis rerum fuga debitis voluptate atque distinctio. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Esse laboriosam, pariatur
        assumenda tempora nobis odit quis quisquam, sint, delectus deserunt
        dolor quas perferendis? Id recusandae possimus fugiat laboriosam
        sapiente sed.
      </p>

      <div className="grid grid-cols-3 gap-10">
        {/* {images.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              className="object-cover w-full h-64 detail__img"
              alt={`Image ${index}`}
            />
            <i className="fas fa-search detail__icon"></i>
          </div>
        ))} */}
      </div>
    </section>
  )
}
