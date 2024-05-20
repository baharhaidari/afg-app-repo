import "./App.css";
import AboutAfghanistan from "./Components/About Afghansitan/AboutAfghanistan";
import ContactUs from "./Components/Contact/ContactUs";
import Accordion from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import PlaceDeatils from "./Components/Place Detail/PlaceDeatils";
import PopularPlaces from "./Components/Popular Places/PopularPlaces";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutAfghanistan />
      <PopularPlaces />
      <Accordion />
      <PlaceDeatils />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
