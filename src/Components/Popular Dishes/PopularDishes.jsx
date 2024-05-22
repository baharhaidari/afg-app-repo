import "./PopularDishes.css";
import img1 from "../../assets/kichiri.jpg";

import kichiri from "../../assets/kichiri.jpg";
import qaboli from "../../assets/غذاهای-مشهور-و-مزه-دار-افغانستان-را-بشن-100032.jpg";
import ashak from "../../assets/maxresdefault.jpg";
import manto from "../../assets/غذاهای-مشهور-و-مزه-دار-افغانستان-را-بشن-100039-1.jpg";
import boolani from "../../assets/غذاهای-مشهور-و-مزه-دار-افغانستان-را-بشن-100033.jpg";
// import qolorT from "../../assets/";
// import qolorS from "../../assets/";

// import img2 from "../../assets/maxresdefault.jpg";

export default function PopularDishes() {
  const FOODS = [
    {
      name: "Kichiri",
      img: kichiri,
    },

    {
      name: "Qaboli",
      img: qaboli,
    },

    {
      name: "Ashak",
      img: ashak,
    },

    {
      name: "Manto",
      img: manto,
    },

    {
      name: "Boolani",
      img: boolani,
    },

    {
      name: "Qolor Tursh",
      img: qaboli,
    },

    {
      name: "Qolor Shir",
      img: ashak,
    },

    {
      name: "Kichiri",
      img: kichiri,
    },

    {
      name: "Manto",
      img: manto,
    },

    {
      name: "Boolani",
      img: boolani,
    },
  ];
  return (
    <>
      <section
        className="flex flex-col justify-center items-center min-h-screen px-28 py-24 gap-24"
        id="dishes"
      >
        <div className="two alt-two dishes__section__title">
          <h1 className="text-5xl">
            POPULAR DISHES
            <span className="text-2xl">
              Unveiling the Popularity of Afghan Cuisine
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {FOODS.map((food, index) => {
            return (
              <div key={index} className="relative shadow-2xl bg-slate-200 ">
                <img src={food.img} alt="" className="food__img rounded-sm" />
                <h2 className="text-xl p-3 absolute top-4 -left-2 font-semibold tracking-wide food__title">
                  {food.name}
                </h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
