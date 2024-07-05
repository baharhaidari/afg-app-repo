import React from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Cards from "../Cards/Cards"
import "./PlaceDeatils.css"

export default function PlaceDeatils() {
  const { placeId, detailId } = useParams()
  const { t } = useTranslation()

  const places = t("PLACES.POPULAR_PLACES", { returnObjects: true })
  const place = places.find((item) => item.id === parseInt(placeId))

  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(-1)
  }

  // Check if we are in a child route (detail page)
  const isChildRoute = !!detailId

  return (
    <section className="flex flex-col justify-center items-center gap-10 min-h-screen place__details__section">
      <Outlet />
      {!isChildRoute && (
        <>
          <div className="place__detail__header w-full px-40 flex flex-col justify-center items-center min-h-screen">
            <div className="info__wrapper flex justify-between gap-24 py-6 px-10 text font-medium w-full">
              <div>
                <span className="text-slate-500">
                  <i className="fa-solid fa-earth-americas"></i>{" "}
                  {place.details.cityInfo.title1}
                </span>
                <p>Afghanistan</p>
              </div>
              <div>
                <span className="text-slate-500">
                  <i className="fa-solid fa-user"></i>{" "}
                  {place.details.cityInfo.title2}
                </span>
                <p>4 million</p>
              </div>
              <div>
                <span className="text-slate-500">
                  <i className="fa-solid fa-map-pin"></i>{" "}
                  {place.details.cityInfo.title3}
                </span>
                <p>Herat</p>
              </div>
              <div>
                <span className="text-slate-500">
                  <i className="fa-solid fa-globe"></i>{" "}
                  {place.details.cityInfo.title4}
                </span>
                <p>Persian</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="textxl text-white">{place.details.cityName}</h1>
              <a
                href="#popularPlaces"
                className="px-12 py-4 border-2 border-solid border-slate-300 rounded-sm text-2xl glass-btn"
              >
                DISCOVER
              </a>
            </div>
          </div>

          <div className="px-28 py-10 flex flex-col" id="popularPlaces">
            <div className="nine">
              <h1>
                {place.details.title}
                <span>{place.details.tagline}</span>
              </h1>
            </div>

            <div className="mt-10">
              <a
                onClick={clickHandler}
                className="text-xl cursor-pointer text-gray-600"
              >
                <i className="fa-solid fa-arrow-left mr-2"></i> Back
              </a>
            </div>

            <div className="cards__wrapper grid grid-cols-3 gap-16 py-20">
              {place.details.PLACE.map((place, index) => (
                <Cards
                  key={index}
                  img={place.img}
                  title={place.title}
                  desc={place.desc}
                  to={`/place/${placeId}/details/${place.id}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}
