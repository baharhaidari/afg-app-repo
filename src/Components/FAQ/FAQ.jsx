import React, { useState } from "react";
import "./FAQ.css";
import { useTranslation } from "react-i18next";

const Accordion = () => {
  const { t } = useTranslation();
  let FAQs = t("FAQ.FAQS", { returnObjects: true });

  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  return (
    <section className="flex flex-col justify-center py-24 gap-16" id="faq">
      {/* <div className="two alt-two flex justify-start items-center flex-col">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl places__section__title">
          <span className="text-xs sm:text-sm lg:text-2xl"></span>
        </h1>
      </div> */}

      <div class="nine">
        <h1>
          FREQUENTLY ASKED QUESTIONS
          <span> Find Answers to Common Inquiries</span>
        </h1>
      </div>

      <div>
        <div className="accordion flex flex-col gap-4">
          {FAQs.map((faq, index) => {
            return (
              <div
                className={`accordion-item ${
                  openItem === index ? "open" : ""
                } py-3 px-6 shadow-sm hover:shadow-md`}
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
      </div>
    </section>
  );
};

export default Accordion;
