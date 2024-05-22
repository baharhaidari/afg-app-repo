import { NavLink } from "react-router-dom";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="border-none shadow-2xl">
      <div className="img__wrapper">
        <img src={props.img} alt="popular places" />
      </div>
      <div className="p-3">
        <h2 className="text-2xl font-semibold">{props.title}</h2>
        <p className="my-3 cards__desc">{props.desc}</p>
        <NavLink to="/place">
          <span className="text-sky-500 text-1xl tracking-wider">
            See More <i className="fa-solid fa-arrow-right"></i>
          </span>
        </NavLink>
      </div>
    </div>
  );
}
