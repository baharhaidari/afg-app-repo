import "./AboutAfghanistan.css";
import { useTranslation } from "react-i18next";
import map1 from "../../assets/Afghanistan_on_the_globe_(Afro-Eurasia_centered).svg.png";
import map2 from "../../assets/istockphoto-165734957-612x612.webp";

export default function AboutAfghanistan() {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen px-28 py-24 gap-16 about__section"
      id="about"
    >
      <div className="two alt-two">
        <h1 className="text-5xl">
          {t("ABOUT.title")}
          <span className="text-2xl">{t("ABOUT.tagline")}</span>
        </h1>
      </div>
      <div className="text-justify about__paragraph">
        <p className="mb-3">{t("ABOUT.desc1")}</p>
        <p className="mb-3">{t("ABOUT.desc2")}</p>
        <p className="mb-3">{t("ABOUT.desc3")}</p>
        <p className="mb-3">{t("ABOUT.desc4")}</p>
      </div>
      <div className="flex justify-center items-center gap-20">
        <div>
          <h2 className="text-4xl font-semibold mb-8">
            Location Among the World
          </h2>
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea
            magni quaerat? Unde iure beatae maiores earum vel, ratione excepturi
            expedita velit tempora quisquam, blanditiis eaque, repellat illum
            sunt temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Rem totam, reprehenderit, animi ducimus sunt voluptate dolore,
            voluptates ut atque sed corrupti dignissimos quos. Provident
            doloribus earum vero facere, temporibus ab!
          </p>
        </div>

        <img src={map1} alt="" className="map__world" />
      </div>
      <div className="flex justify-center items-center gap-20">
        <img src={map2} alt="" className="map__afg" />

        <div>
          <h2 className="text-4xl font-semibold mb-8">Aghanistan Map</h2>
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea
            magni quaerat? Unde iure beatae maiores earum vel, ratione excepturi
            expedita velit tempora quisquam, blanditiis eaque, repellat illum
            sunt temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Rem totam, reprehenderit, animi ducimus sunt voluptate dolore,
            voluptates ut atque sed corrupti dignissimos quos. Provident
            doloribus earum vero facere, temporibus ab!
          </p>
        </div>
      </div>

      <div className="">
        <p className="mb-3 about__paragraph">
          Afghanistan is a country known for its diverse and breathtaking
          landscapes, including mountains and deserts. Here's a brief
          description of Afghanistan's mountains and deserts:
        </p>
        <p className="mb-3 about__paragraph">
          Mountains: Afghanistan is home to various mountain ranges, with the
          Hindu Kush being the most prominent. The Hindu Kush stretches across
          central and northeastern Afghanistan, forming a natural barrier
          between the country and its neighboring regions. It is a majestic and
          rugged range with numerous peaks exceeding 6,000 meters (19,685 feet)
          in height. The mountains are characterized by snow-capped peaks, deep
          valleys, and steep slopes. The Hindu Kush serves as a vital water
          source for Afghanistan, with its glaciers feeding rivers that provide
          irrigation and drinking water to the surrounding regions. Other
          notable mountain ranges in Afghanistan include the Pamir Mountains in
          the northeastern part of the country and the Safed Koh range in the
          eastern region. These mountainous areas offer stunning vistas, alpine
          meadows, and opportunities for trekking, mountaineering, and adventure
          tourism.
        </p>
        <p className="mb-3 about__paragraph">
          Deserts: Afghanistan also features vast desert regions, primarily in
          the southwestern part of the country. The Dasht-e Margo (Desert of
          Death) and the Registan Desert are the main desert areas in
          Afghanistan. These deserts are characterized by arid and dry
          landscapes, with vast stretches of sand dunes, rocky terrain, and
          sparse vegetation. The deserts of Afghanistan present a unique and
          harsh environment, with extreme temperatures and little rainfall.
          These arid regions are home to hardy plant species adapted to desert
          conditions, such as desert grasses and shrubs. Nomadic tribes, such as
          the Kuchi people, traditionally inhabit and traverse these desert
          areas with their livestock. Exploring the deserts of Afghanistan
          offers the opportunity to experience the rugged beauty of the barren
          landscapes, witness stunning sunsets, and learn about the traditional
          desert-dwelling cultures.
        </p>
        <p className="mb-3 about__paragraph">
          Both the mountains and deserts of Afghanistan contribute to the
          country's natural beauty and offer unique experiences for adventurers,
          nature enthusiasts, and those seeking to explore the diverse
          landscapes of the region.
        </p>
      </div>
    </section>
  );
}
