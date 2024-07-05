import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./Components/RootLayout"
import MainLayout from "./Components/MainLayout"
import PlaceDeatils from "./Components/Place Detail/PlaceDeatils"
import { I18nextProvider, useTranslation } from "react-i18next"
import i18next from "i18next"
import { useEffect } from "react"
import PlaceDeatilsDetails from "./Components/Place Details Images/PlacesDetailsDetails"
import PlacesRootLayout from "./Components/PlacesRootLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MainLayout /> },
      {
        path: "place",
        element: <PlacesRootLayout />,
        children: [
          {
            path: ":placeId",
            element: <PlaceDeatils />,
            children: [
              { path: "details/:detailId", element: <PlaceDeatilsDetails /> },
            ],
          },
        ],
      },
    ],
  },
])

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.lang = i18n.language
    htmlElement.dir = i18n.language === "es" ? "rtl" : "ltr"
  }, [i18n.language])

  return (
    <div className="App text-slate-700">
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </div>
  )
}

export default App
