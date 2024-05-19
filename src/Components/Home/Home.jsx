import "./Home.css";

export default function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center flex-col px-28 gap-8  home__section ">
      <h1 className="text-8xl home__title">Time to Explore Afghanistan</h1>
      <p className="text-justify px-32 home__paragraph">
        Immerse yourself in the rich cultural heritage and breathtaking
        landscapes of Afghanistan, a land where ancient history and natural
        beauty converge. Discover the bustling bazaars of Kabul, the serene
        gardens of Herat, and the majestic Buddha niches of Bamiyan, each
        offering a unique glimpse into the country's storied past and vibrant
        present. Visit our site to explore these popular destinations and
        uncover the hidden gems that make Afghanistan a truly captivating and
        unforgettable experience.
      </p>
      <button>EXPLORE NOW</button>
    </section>
  );
}
