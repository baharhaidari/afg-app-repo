import { ToastContainer } from "react-toastify";
import AboutAfghanistan from "./About Afghansitan/AboutAfghanistan";
import ContactUs from "./Contact/ContactUs";
import Accordion from "./FAQ/FAQ";
import Home from "./Home/Home";
import Nationalities from "./Nationalities/Nationalities";
import PlaceDeatils from "./Place Detail/PlaceDeatils";
import PopularDishes from "./Popular Dishes/PopularDishes";
// import PopularDishes from "./Popular Dishes/PopularDishes";
import PopularPlaces from "./Popular Places/PopularPlaces";

export default function MainLayout() {
  return (
    <>
      <ToastContainer />
      <Home />
      <AboutAfghanistan />
      <PopularPlaces />
      <PopularDishes />
      <Nationalities />
      <Accordion />
      <ContactUs />
    </>
  );
}
