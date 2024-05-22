import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-10 px-72 py-24 min-h-screen contact__section"
      id="contact"
    >
      <div className="two alt-two">
        <h1 className="text-5xl contact__section__title">
          CONTACT US
          <span className="text-2xl">Feel Free to Get in Touch</span>
        </h1>
      </div>

      <form action="" className="">
        <div className="input-box">
          <input
            type="text"
            placeholder="Your First Name"
            className="border-2 border-slate-500 border-solid rounded-md p-3"
          />
          <input
            type="text"
            placeholder="Your Last Name"
            className="border-2 border-slate-500 border-solid rounded-md p-3"
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Your Email Address"
            className="border-2 border-slate-500 border-solid rounded-md p-3"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email Subject"
            className="border-2 border-slate-500 border-solid rounded-md p-3"
          />
        </div>

        <div className="input-box flex content-between">
          <textarea
            name=""
            id=""
            rows={10}
            placeholder="Your Message..."
            className="border-2 border-slate-500 border-solid rounded-md p-3 w-full"
          ></textarea>
        </div>

        <div className="submit w-full flex justify-center">
          <input
            type="submit"
            value="Send Message"
            className="border-2 border-slate-500 border-solid rounded-md py-3 px-10 "
          />
        </div>
      </form>
    </section>
  );
}
