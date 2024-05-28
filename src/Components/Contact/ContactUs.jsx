import "./ContactUs.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const { t } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_gpyveci",
        "template_lxg0uh8",
        {
          name: "name",
          last_name: "last_name",
          email: "email",
          email_subjsct: "email_subjsct",
          message: "message",
        },
        "n01DueOdBya9LfMGt"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        // Add any success message or actions here
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Add any error handling or actions here
      });

    // Reset the form fields after submission if desired
    e.target.reset();
  }

  return (
    <section
      className="flex flex-col justify-center items-center gap-10 px-4 sm:px-7 lg:px-72 py-10 lg:py-24 min-h-screen contact__section"
      id="contact"
    >
      <div className="two alt-two">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl contact__section__title">
          {t("CONTACT.title")}
          <span className="text-xs sm:text-sm lg:text-2xl">
            {" "}
            {t("CONTACT.tagline")}
          </span>
        </h1>
      </div>

      <form onSubmit={sendEmail}>
        <div className="input-box">
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.name")}
            className="border-2 border-slate-500 border-solid rounded-md p-3"
            name="name"
            required
          />
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.fName")}
            className="border-2 border-slate-500 border-solid rounded-md p-3"
            name="last_name"
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder={t("CONTACT.PLACEHOLDERS.email")}
            className="border-2 border-slate-500 border-solid rounded-md p-3"
            name="email"
            required
          />
          <input
            type="text"
            name="email_subjsct"
            id=""
            placeholder={t("CONTACT.PLACEHOLDERS.subject")}
            className="border-2 border-slate-500 border-solid rounded-md p-3"
            required
          />
        </div>

        <div className="input-box flex content-between">
          <textarea
            name="message"
            id=""
            rows={10}
            placeholder={t("CONTACT.PLACEHOLDERS.message")}
            className="border-2 border-slate-500 border-solid rounded-md p-3 w-full"
            required
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
