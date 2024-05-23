import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <section>
      <footer className="flex items-center flex-col px-28 py-8">
        <div className="flex">
          <div className="flex-1 p-10">
            <ul>
              <li className="text-3xl mb-3 cursor-pointer logo">
                AfghanWander
              </li>
              <li>
                <p className="">{t("FOOTER.desc1")}</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-10">
            <ul>
              <li>
                <a href="" className="text-2xl font-semibold">
                  {t("FOOTER.FIRST_LINKS.title")}
                </a>
              </li>
              <li className="cursor-pointer">
                {t("FOOTER.FIRST_LINKS.link1")}
              </li>
              <li className="cursor-pointer">
                {t("FOOTER.FIRST_LINKS.link2")}
              </li>
              <li className="cursor-pointer">
                {t("FOOTER.FIRST_LINKS.link3")}
              </li>
            </ul>
          </div>

          <div className="flex-1 p-10">
            <ul>
              <li className="text-2xl font-semibold">
                {t("FOOTER.SECOND_LINKS.title")}
              </li>

              <li className="cursor-pointer">
                {t("FOOTER.SECOND_LINKS.link1")}
              </li>

              <li className="cursor-pointer">
                {t("FOOTER.SECOND_LINKS.link2")}
              </li>

              <li className="cursor-pointer">
                {t("FOOTER.SECOND_LINKS.link3")}
              </li>

              <li className="cursor-pointer">
                {t("FOOTER.SECOND_LINKS.link4")}
              </li>
            </ul>
          </div>
        </div>

        <p className="text-2xl">{t("FOOTER.copyright")}</p>
      </footer>
    </section>
  );
}
