import "./App.css";
import AboutAfghanistan from "./Components/About Afghansitan/AboutAfghanistan";
import ContactUs from "./Components/Contact/ContactUs";
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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
