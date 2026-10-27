import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { siteConfig } from "~/config/siteConfig";

export default function FAQ() {
  const { kicker, heading, intro, items } = siteConfig.faqs;
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set([0]));

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="ps-section-heading">
        <div>
          <p className="ps-kicker">
            <FiHelpCircle aria-hidden="true" /> {kicker}
          </p>
          <h2 id="faq-title">{heading}</h2>
        </div>
        <p>{intro}</p>
      </div>

      <div className="faq-section__container">
        {items.map((item, index) => {
          const isOpen = openIndexes.has(index);
          const answerId = `faq-answer-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <article key={item.question} className={`faq-card ${isOpen ? "faq-card--open" : ""}`}>
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="faq-card__trigger"
                  onClick={() => toggleIndex(index)}
                >
                  <span>{item.question}</span>
                  <FiChevronDown className="faq-card__chevron" aria-hidden="true" />
                </button>
              </h3>
              <div
                id={answerId}
                role="region"
                aria-labelledby={buttonId}
                className="faq-card__content"
                hidden={!isOpen}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
