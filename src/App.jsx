import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import MainLayout from "./Components/MainLayout";
import PlaceDeatils from "./Components/Place Detail/PlaceDeatils";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MainLayout /> },
      { path: "place", element: <PlaceDeatils /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </div>
  );
}

export default App;
