import { NavLink } from "react-router-dom";
import "./Cards.css";

export default function Cards(props) {
  const id = props.id;

  return (
    <div className="border-none shadow-xl hover:shadow-2xl places__card">
      <div className="img__wrapper">
        <img src={props.img} alt="popular places" />
      </div>
      <div className="p-3">
        {/* <h2 className="text-2xl font-semibold tracking-wide">{props.title}</h2> */}
        <p className="my-3 cards__desc">{props.desc}</p>
        <NavLink to={props.to}>
          <span className="text-sky-500 text-1xl tracking-wider details__link">
            See More <i className="fa-solid fa-arrow-right"></i>
          </span>
        </NavLink>
      </div>
    </div>
  );
}
