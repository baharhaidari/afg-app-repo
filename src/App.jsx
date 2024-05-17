import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
