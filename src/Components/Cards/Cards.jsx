import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="border-none shadow-2xl ">
      <div className="img__wrapper">
        <img src={props.img} alt="popular places" />
      </div>
      <div className="p-3">
        <h2 className="text-2xl font-semibold">{props.title}</h2>
        <p className="my-3 text-slate-600">{props.desc}</p>
        <a href="#more" className="text-sky-500 text-1xl tracking-wider">
          See More <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
