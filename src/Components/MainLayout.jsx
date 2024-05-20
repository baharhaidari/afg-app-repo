import AboutAfghanistan from "./About Afghansitan/AboutAfghanistan";
import ContactUs from "./Contact/ContactUs";
import Accordion from "./FAQ/FAQ";
import Home from "./Home/Home";
import PlaceDeatils from "./Place Detail/PlaceDeatils";
import PopularPlaces from "./Popular Places/PopularPlaces";

export default function MainLayout() {
  return (
    <>
      <Home />
      <AboutAfghanistan />
      <PopularPlaces />
      <Accordion />
      <ContactUs />
    </>
  );
}
