import "./PlaceDeatils.css";

export default function PlaceDeatils() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-28 py-24 place__details__section">
      <div className="info__wrapper flex justify-between gap-40 py-6 px-12 text font-medium">
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
    </section>
  );
}
