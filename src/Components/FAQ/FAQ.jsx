import React, { useState } from "react";
import "./FAQ.css";

const Accordion = () => {
  const FAQ = [
    {
      title: "What is the official language of the country?",
      desc: "The official language of Afghanistan is Pashto. Dari (a dialect of Persian) is also widely spoken and serves as the second official language. Additionally, various regional languages are spoken by different ethnic groups.",
    },
    {
      title: "What is the currency used in the country?",
      desc: "The currency used in Afghanistan is the Afghan Afghani (AFN). Banknotes are available in denominations of 1000, 500, 100, 50, 20, 10, and 1 Afghani.",
    },
    {
      title: "What are the popular tourist attractions or landmarks?",
      desc: "Afghanistan offers several fascinating tourist attractions and landmarks, including:The historic city of Kabul with sites like Babur's Gardens, Kabul Museum, and Pul-e Kheshti Mosque. The ancient city of Herat, known for its beautiful Islamic architecture, including the Herat Citadel and the Friday Mosque. The breathtaking Buddhas of Bamiyan, which were carved into the cliffs centuries ago. The stunning Band-e-Amir National Park, consisting of a series of turquoise lakes surrounded by majestic cliffs. The ancient city of Balkh, renowned for its historical significance and archaeological sites.",
    },
    {
      title: "What is the climate like in the country throughout the year?",
      desc: "Afghanistan experiences a diverse range of climates due to its varied topography. Generally, the country has a continental climate with hot summers and cold winters. However, the climate can vary significantly depending on the region. The northern parts tend to have colder winters with heavy snowfall, while the southern regions are typically hotter. Spring and autumn are pleasant seasons with mild temperatures.",
    },
    {
      title: "What are the popular traditional dishes of Afghanistan?",
      desc: "Afghan cuisine is rich in flavors and influenced by various cultures. Some popular traditional dishes include Kabuli Pulao, a delicious rice dish made with meat, raisins, and carrots. Mantu, steamed dumplings filled with seasoned ground meat, served with yogurt and tomato sauce. Ashak, dumplings filled with leeks and served with garlic yogurt and meat sauce. Kebabs, grilled skewered meat, often served with naan bread and chutney. Bolani, a savory flatbread filled with potatoes, leeks, or pumpkin. Don't forget to try Afghan tea and sweets like sheer khurma (vermicelli pudding) and jalebi (deep-fried pretzel-shaped pastry soaked in syrup).",
    },
    {
      title: "What are some cultural norms and customs in Afghanistan?",
      desc: "Afghanistan has a rich cultural heritage, and it's important to respect the local customs and traditions. Some cultural norms include showing hospitality and respect to guests, especially by offering tea or food. It's customary to greet others with a handshake and use formal titles when addressing people. Modest dress is expected, particularly for women, who should cover their heads and wear loose-fitting clothing. It's also important to be mindful of Islamic customs, such as avoiding public displays of affection and consuming alcohol in public. Remember to ask for permission before taking photographs, especially of individuals.",
    },
    {
      title:
        "What are some safety considerations for travelers in Afghanistan?",
      desc: "Traveling to Afghanistan requires careful planning and consideration for safety. Due to ongoing security concerns, it is essential to stay informed about the current situation and follow travel advisories from your home country. It is recommended to travel with a reputable tour operator or a trusted local guide who is familiar with the region. Register with your embassy or consulate upon arrival and share your travel itinerary with someone you trust. Respect local customs and traditions, and avoid political gatherings or demonstrations. Keep a low profile, be vigilant in public places, and follow the guidance of local authorities and security personnel.",
    },
  ];

  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  return (
    <section
      className="flex flex-col justify-center min-h-screen px-28 py-24 gap-16"
      id="faq"
    >
      <div class="two alt-two flex justify-start items-center flex-col">
        <h1 className="text-5xl places__section__title">
          FREQUENTLY ASKED QUESTIONS
          <span className="text-2xl">Find Answers to Common Inquiries</span>
        </h1>
      </div>

      <main>
        <div className="accordion flex flex-col gap-4">
          {FAQ.map((faq, index) => {
            return (
              <div
                className={`accordion-item ${
                  openItem === index ? "open" : ""
                } py-3 px-6`}
                key={index}
              >
                <div
                  className="accordion-item-header"
                  onClick={() => handleItemClick(index)}
                >
                  <span className="accordion-item-header-title">
                    {faq.title}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down accordion-item-header-icon"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <div className="accordion-item-description-wrapper">
                  <div className="accordion-item-description">
                    <hr />
                    <p>{faq.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default Accordion;
