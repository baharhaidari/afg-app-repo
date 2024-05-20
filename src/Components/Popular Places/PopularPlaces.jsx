// import "./PopularPlaces.css";
// import img1 from "../../assets/pangshir.jpg";
// import img2 from "../../assets/band-e-amir-national.jpg";
// import PlacesSearch from "../Places Search/PlacesSearch";
// import Cards from "../Cards/Cards";

// export default function PopularPlaces() {
//   const POPULAR_PLACES = [
//     {
//       title: "Herat",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
//       img: img1,
//     },

//     {
//       title: "Bamian",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
//       img: img2,
//     },

//     {
//       title: "Pangshir",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
//       img: img1,
//     },

//     {
//       title: "Paqman",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
//       img: img2,
//     },

//     {
//       title: "Mazar-e-sharif",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
//       img: img2,
//     },
//   ];

//   return (
//     <section className="places__section flex flex-col justify-center min-h-screen px-28 py-24 gap-12">
//       <div class="two alt-two flex justify-start items-center flex-col">
//         <h1 className="text-5xl places__section__title">
//           POPULAR PLACES
//           <span className="text-2xl">
//             Unveiling the Splendors of Iconic Destinations
//           </span>
//         </h1>
//       </div>

//       <div className="test">
//         <PlacesSearch />
//       </div>

//       <div className="cards__wrapper grid grid-cols-3 gap-16">
//         {POPULAR_PLACES.map((place, index) => {
//           return (
//             <Cards img={place.img} title={place.title} desc={place.desc} />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import "./PopularPlaces.css";
import img1 from "../../assets/pangshir.jpg";
import img2 from "../../assets/band-e-amir-national.jpg";
import PlacesSearch from "../Places Search/PlacesSearch";
import Cards from "../Cards/Cards";

export default function PopularPlaces() {
  const POPULAR_PLACES = [
    {
      title: "Herat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
      img: img1,
    },
    {
      title: "Bamian",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
      img: img2,
    },
    {
      title: "Pangshir",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
      img: img1,
    },
    {
      title: "Paqman",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
      img: img2,
    },
    {
      title: "Mazar-e-sharif",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
      img: img2,
    },

    {
      title: "Pangshir",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
      img: img1,
    },
    {
      title: "Paqman",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
      img: img2,
    },
    {
      title: "Mazar-e-sharif",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis sapiente distinctio obcaecati labore reiciendis sequi totam? Pariatur.",
      img: img2,
    },
  ];

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
          POPULAR PLACES
          <span className="text-2xl">
            Unveiling the Splendors of Iconic Destinations
          </span>
        </h1>
      </div>

      <div className="test">
        <PlacesSearch />
      </div>

      <div className="cards__wrapper grid grid-cols-3 gap-16">
        {POPULAR_PLACES.slice(0, visiblePlaces).map((place, index) => (
          <Cards
            key={index}
            img={place.img}
            title={place.title}
            desc={place.desc}
          />
        ))}
      </div>

      <div className="flex justify-center">
        {visiblePlaces < POPULAR_PLACES.length && (
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
