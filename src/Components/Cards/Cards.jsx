// import { NavLink } from "react-router-dom";
// import "./Cards.css";

// export default function Cards(props) {
//   return (
//     <div className="border-none shadow-2xl">
//       <div className="img__wrapper">
//         <img
//           src={require(`../../assets/${props.img}`).default}
//           alt="popular places"
//         />
//       </div>
//       <div className="p-3">
//         <h2 className="text-2xl font-semibold">{props.title}</h2>
//         <p className="my-3 cards__desc">{props.desc}</p>
//         <NavLink to="/place">
//           <span className="text-sky-500 text-1xl tracking-wider">
//             See More <i className="fa-solid fa-arrow-right"></i>
//           </span>
//         </NavLink>
//       </div>
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Cards.css";

export default function Cards(props) {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    import(`../../assets/${props.img}`)
      .then((module) => {
        setImgSrc(module.default);
      })
      .catch((error) => {
        console.error(`Error loading image: ${error}`);
      });
  }, [props.img]);

  return (
    <div className="border-none shadow-2xl">
      <div className="img__wrapper">
        <img src={imgSrc} alt="popular places" />
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
