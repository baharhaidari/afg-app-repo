import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <section className="border-t-2 border-slate-800">
      <footer className="lg:flex items-center justify-center lg:flex-col px-3 lg:px-28 py-8">
        <div className="lg:flex">
          <div className="flex-1 p-6 lg:p-10">
            <ul>
              <li className="text-3xl mb-3 cursor-pointer logo text-cyan-600">
                AfghanWander
              </li>
              <li>
                <p className="">{t("FOOTER.desc1")}</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-6 lg:p-10">
            <ul>
              <li className="text-2xl font-semibold ">
                {t("FOOTER.FIRST_LINKS.title")}
              </li>
              <li className="cursor-pointer mt-1 ">
                <a href="#home">{t("FOOTER.FIRST_LINKS.link1")}</a>
              </li>
              <li className="cursor-pointer">
                <a href="#about">{t("FOOTER.FIRST_LINKS.link2")}</a>
              </li>
              <li className="cursor-pointer">
                <a href="#places">{t("FOOTER.FIRST_LINKS.link3")}</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-6 lg:p-10">
            <ul>
              <li className="text-2xl font-semibold mb-1">
                {t("FOOTER.SECOND_LINKS.title")}
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://www.instagram.com/bahar_webdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <i className="fa-brands fa-instagram mr-3 text-2xl"></i>
                  {t("FOOTER.SECOND_LINKS.link1")}
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/bahar-haidari-24b550254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <i className="fa-brands fa-linkedin mr-3 text-2xl"></i>
                  {t("FOOTER.SECOND_LINKS.link2")}
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://www.twitter.com/bahar_h1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <i className="fa-brands fa-x-twitter mr-3 text-2xl"></i>
                  {t("FOOTER.SECOND_LINKS.link3")}
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://github.com/BaharHaidari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <i className="fa-brands fa-github mr-3 text-2xl"></i>
                  {t("FOOTER.SECOND_LINKS.link4")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center mt-3 sm:mt-3 lg:mt-0">
          <p className="text-xl">{t("FOOTER.copyright")}</p>
        </div>
      </footer>
    </section>
  );
}
