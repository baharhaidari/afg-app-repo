import "./PopularPlaces.css";
import img1 from "../../assets/pangshir.jpg";
import img2 from "../../assets/band-e-amir-national.jpg";
import PlacesSearch from "../Places Search/PlacesSearch";

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
  ];

  return (
    <section className="places__section flex flex-col justify-center items-center min-h-screen px-28 py-12 gap-12">
      <h1 className="text-5xl places__section__title">
        EXPLORE POPULAR PLACES
      </h1>

      <div className="w-100">
        <PlacesSearch />
      </div>

      <div className="cards__wrapper grid grid-cols-3 gap-16">
        {POPULAR_PLACES.map((place, index) => {
          return (
            <div className="border-none shadow-2xl ">
              <div className="img__wrapper">
                <img src={place.img} alt="" />
              </div>
              <div className="p-3">
                <h2 className="text-2xl font-semibold">{place.title}</h2>
                <p className="my-3 text-slate-600">{place.desc}</p>
                <a
                  href="#more"
                  className="text-sky-500 text-1xl tracking-wider"
                >
                  See More <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          );
        })}

        {/* <div>
          <h2>Herat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            veritatis voluptate placeat nostrum expedita tenetur, eius.
          </p>
        </div>
        <div>
          <h2>Herat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            veritatis voluptate placeat nostrum expedita tenetur, eius.
          </p>
        </div>
        <div>
          <h2>Herat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            veritatis voluptate placeat nostrum expedita tenetur, eius.
          </p>
        </div>
        <div>
          <h2>Herat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            veritatis voluptate placeat nostrum expedita tenetur, eius.
          </p>
        </div>{" "}
        <div>
          <h2>Herat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            veritatis voluptate placeat nostrum expedita tenetur, eius.
          </p>
        </div>
        <div>
          <h2>Herat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            veritatis voluptate placeat nostrum expedita tenetur, eius.
          </p>
        </div>
        <div>
          <h2>Herat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            veritatis voluptate placeat nostrum expedita tenetur, eius.
          </p>
        </div> */}
      </div>
    </section>
  );
}
