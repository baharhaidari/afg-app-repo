import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

function RootLayout() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <main> */}
      <Outlet />
      {/* </main> */}
      <Footer />
    </>
  );
}

export default RootLayout;
