import "./App.css";
import AboutAfghanistan from "./Components/About Afghansitan/AboutAfghanistan";
import ContactUs from "./Components/Contact/ContactUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import PopularPlaces from "./Components/Popular Places/PopularPlaces";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutAfghanistan />
      <PopularPlaces />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
