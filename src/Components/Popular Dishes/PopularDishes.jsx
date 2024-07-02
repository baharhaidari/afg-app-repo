import "./PopularDishes.css";
import img1 from "../../assets/kichiri.jpg";

import kichiri from "../../assets/kichiri.jpg";
import qaboli from "../../assets/غذاهای-مشهور-و-مزه-دار-افغانستان-را-بشن-100032.jpg";
import ashak from "../../assets/maxresdefault.jpg";
import manto from "../../assets/غذاهای-مشهور-و-مزه-دار-افغانستان-را-بشن-100039-1.jpg";
// import boolani from "../../assets/غذاهای-مشهور-و-مزه-دار-افغانستان-را-بشن-100033.jpg";

import { useTranslation } from "react-i18next";

export default function PopularDishes() {
  const { t } = useTranslation();

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
      img: manto,
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
      img: ashak,
    },
  ];
  return (
    <>
      <section
        className="flex flex-col justify-center items-center py-24 gap-24"
        id="dishes"
      >
        <div class="nine">
          <h1>
            {t("DISHES.title")}
            <span>{t("DISHES.tagline")}</span>
          </h1>
        </div>

        <div className="flex justify-center items-center gap-5 flex-wrap">
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
