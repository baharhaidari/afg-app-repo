import Cards from "../Cards/Cards";
import "./PlaceDeatils.css";
import img from "../../assets/afghanistan-band-e-amir-national-park-6vj9t3pstoxmr4sy.jpg";

export default function PlaceDeatils() {
  const PLACE_INFO = [
    {
      parameter: "Area",
      icon: "Afghanistan",
    },

    {
      parameter: "Population",
      icon: "4 million People",
    },

    {
      parameter: "Downtown",
      icon: "Herat",
    },

    {
      parameter: "Accent",
      icon: "Persian",
    },
  ];

  const POPULAR_PLACES_DEATILS = [
    {
      place: "Manar Ghor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet magnam placeat. Magnam distinctio ratione ipsam dignissimos aliquid praesentium suscipit assumenda mollitia! Rem, quidem placeat adipisci libero amet ratione quibusdam.",
    },

    {
      place: "Bande Amir",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet magnam placeat. Magnam distinctio ratione ipsam dignissimos aliquid praesentium suscipit assumenda mollitia! Rem, quidem placeat adipisci libero amet ratione quibusdam.",
    },

    {
      place: "Ekhtiyaedin Castle",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet magnam placeat. Magnam distinctio ratione ipsam dignissimos aliquid praesentium suscipit assumenda mollitia! Rem, quidem placeat adipisci libero amet ratione quibusdam.",
    },

    {
      place: "Test 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet magnam placeat. Magnam distinctio ratione ipsam dignissimos aliquid praesentium suscipit assumenda mollitia! Rem, quidem placeat adipisci libero amet ratione quibusdam.",
    },

    {
      place: "Manar test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet magnam placeat. Magnam distinctio ratione ipsam dignissimos aliquid praesentium suscipit assumenda mollitia! Rem, quidem placeat adipisci libero amet ratione quibusdam.",
    },

    {
      place: "Manar Ghor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet magnam placeat. Magnam distinctio ratione ipsam dignissimos aliquid praesentium suscipit assumenda mollitia! Rem, quidem placeat adipisci libero amet ratione quibusdam.",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-10 min-h-screen  py-24 place__details__section">
      <div className="place__detail__header w-full px-40 py-24 ">
        <div className="info__wrapper flex justify-between gap-24 py-6 px-10 text font-medium">
          <div>
            <span className="text-slate-500">
              <i class="fa-solid fa-earth-americas"></i> Area
            </span>
            <p>Afghanistan</p>
          </div>

          <div>
            <span className="text-slate-500">
              <i class="fa-solid fa-user"></i> Population
            </span>
            <p>4 million</p>
          </div>

          <div>
            <span className="text-slate-500">
              <i class="fa-solid fa-map-pin"></i> Downtown
            </span>
            <p>Herat</p>
          </div>

          <div>
            <span className="text-slate-500">
              <i class="fa-solid fa-globe"></i> Accent
            </span>
            <p>Persian</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="textxl">HERAT</h1>
          <a
            href=""
            className="px-12 py-4 border-2 border-solid border-slate-300 rounded-sm text-2xl"
          >
            DISCOVER
          </a>
        </div>
      </div>

      <div className="cards__wrapper grid grid-cols-3 gap-16 px-28">
        {POPULAR_PLACES_DEATILS.map((place, index) => {
          return <Cards img={img} title={place.place} desc={place.desc} />;
        })}
      </div>
    </section>
  );
}
