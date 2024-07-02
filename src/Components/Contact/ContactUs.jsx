import "./ContactUs.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

export default function ContactUs() {
  const { t } = useTranslation();
  const submitBtnRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_gpyveci",
        "template_lxg0uh8",
        {
          name: e.target.name.value,
          last_name: e.target.last_name.value,
          email: e.target.email.value,
          email_subjsct: e.target.email_subjsct.value,
          message: e.target.message.value,
        },
        "n01DueOdBya9LfMGt"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email!");
      });

    e.target.reset();
  }

  const handleSubmitBtnClick = () => {
    submitBtnRef.current.click();
  };

  return (
    <section
      className="flex flex-col justify-center items-center gap-10 py-10 lg:py-24 "
      id="contact"
    >
      <div class="nine">
        <h1>
          {t("CONTACT.title")}
          <span>{t("CONTACT.tagline")}</span>
        </h1>
      </div>

      <form onSubmit={sendEmail} className="px-4 sm:px-7 lg:px-44 ">
        <div className="input-box">
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.name")}
            className="border-2 border-slate-500 border-solid rounded-md p-3 bg-transparent"
            name="name"
            required
          />
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.fName")}
            className="border-2 border-slate-500 border-solid rounded-md p-3 bg-transparent"
            name="last_name"
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.email")}
            className="border-2 border-slate-500 border-solid rounded-md p-3 bg-transparent"
            name="email"
            required
          />
          <input
            type="text"
            name="email_subjsct"
            id=""
            placeholder={t("CONTACT.PLACEHOLDERS.subject")}
            className="border-2 border-slate-500 border-solid rounded-md p-3 bg-transparent"
            required
          />
        </div>

        <div className="input-box flex content-between">
          <textarea
            name="message"
            id=""
            rows={10}
            placeholder={t("CONTACT.PLACEHOLDERS.message")}
            className="border-2 border-slate-500 border-solid rounded-md p-3 w-full bg-transparent"
            required
          ></textarea>
        </div>

        <div className="submit w-full flex justify-center">
          <input type="submit" style={{ display: "none" }} ref={submitBtnRef} />

          <button
            className="px-12 py-3 border-2 border-solid border-cyan-500 rounded-sm text-xl bg-cyan-500 text-white shadow-md hover:shadow-lg mt-3"
            onClick={handleSubmitBtnClick}
          >
            {t("CONTACT.submitBtn")}
          </button>
        </div>
      </form>
    </section>
  );
}
