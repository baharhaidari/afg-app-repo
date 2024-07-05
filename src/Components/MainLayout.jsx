import { ToastContainer } from "react-toastify"
import AboutAfghanistan from "./About Afghansitan/AboutAfghanistan"
import ContactUs from "./Contact/ContactUs"
import Accordion from "./FAQ/FAQ"
import Home from "./Home/Home"
import Nationalities from "./Nationalities/Nationalities"
import PopularDishes from "./Popular Dishes/PopularDishes"
import PopularPlaces from "./Popular Places/PopularPlaces"
import Navbar from "./Navbar/Navbar"
import PlaceDeatils from "./Place Detail/PlaceDeatils"
import PlaceDeatilsDetails from "./Place Details Images/PlacesDetailsDetails"

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Home />
      <main>
        <AboutAfghanistan />
        {/* <PlaceDeatilsDetails /> */}
        <PopularPlaces />
        <PopularDishes />
        <Nationalities />
        <Accordion />
        <ContactUs />
      </main>
    </>
  )
}
