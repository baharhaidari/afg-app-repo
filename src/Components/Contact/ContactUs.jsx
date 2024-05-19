import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 min-h-screen contact__section">
      <h1 className="contact__section__title text-5xl">CONTACT US</h1>

      <form action="" className="">
        <div className="input-box">
          <input
            type="text"
            placeholder="Your First Name"
            className="border-2 border-slate-500 border-solid rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Your Last Name"
            className="border-2 border-slate-500 border-solid rounded-md p-2"
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Your Email Address"
            className="border-2 border-slate-500 border-solid rounded-md p-2"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email Subject"
            className="border-2 border-slate-500 border-solid rounded-md p-2"
          />
        </div>

        <div className="input-box flex content-between">
          <textarea
            name=""
            id=""
            rows={10}
            placeholder="Your Message..."
            className="border-2 border-slate-500 border-solid rounded-md p-2 w-full"
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
