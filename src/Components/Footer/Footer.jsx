import "./Footer.css";

export default function Footer() {
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
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam, aliquam harum totam voluptas consequuntur doloribus
                  deleniti adipisci quis eos voluptates dolorem illo sit.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-10">
            <ul>
              <li>
                <a href="" className="text-2xl font-semibold">
                  Quick Links
                </a>
              </li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Afghanistan</li>
              <li className="cursor-pointer">Popular Places</li>
            </ul>
          </div>

          <div className="flex-1 p-10">
            <ul>
              <li className="text-2xl font-semibold">Follow on Social Media</li>
              <li className="cursor-pointer">Instagram</li>
              <li className="cursor-pointer">Linkedin</li>
              <li className="cursor-pointer">Tweeter</li>
              <li className="cursor-pointer">GitHub</li>
            </ul>
          </div>
        </div>

        <p className="text-2xl">© 2024 | All Rights Reserved!</p>
      </footer>
    </section>
  );
}
