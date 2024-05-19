import "./App.css";
import AboutAfghanistan from "./Components/About Afghansitan/AboutAfghanistan";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutAfghanistan />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
