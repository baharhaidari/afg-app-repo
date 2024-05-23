import "./ContactUs.css";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col justify-center items-center gap-10 px-72 py-24 min-h-screen contact__section"
      id="contact"
    >
      <div className="two alt-two">
        <h1 className="text-5xl contact__section__title">
          {t("CONTACT.title")}
          <span className="text-2xl"> {t("CONTACT.tagline")}</span>
        </h1>
      </div>

      <form action="" className="">
        <div className="input-box">
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.name")}
            className="border-2 border-slate-500 border-solid rounded-md p-3"
          />
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.fName")}
            className="border-2 border-slate-500 border-solid rounded-md p-3"
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.email")}
            className="border-2 border-slate-500 border-solid rounded-md p-3"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder={t("CONTACT.PLACEHOLDERS.subject")}
            className="border-2 border-slate-500 border-solid rounded-md p-3"
          />
        </div>

        <div className="input-box flex content-between">
          <textarea
            name=""
            id=""
            rows={10}
            placeholder={t("CONTACT.PLACEHOLDERS.message")}
            className="border-2 border-slate-500 border-solid rounded-md p-3 w-full"
          ></textarea>
        </div>

        <div className="submit w-full flex justify-center">
          <input
            type="submit"
            value={t("CONTACT.submitBtn")}
            className="border-2 border-slate-500 border-solid rounded-md py-3 px-10 "
          />
        </div>
      </form>
    </section>
  );
}
