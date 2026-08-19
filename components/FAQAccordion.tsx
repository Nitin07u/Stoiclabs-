"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq__list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq__item ${isOpen ? "active" : ""}`}>
            <button
              className="faq__question"
              aria-expanded={isOpen}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <div className="faq__toggle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {isOpen ? (
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  ) : (
                    <>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </>
                  )}
                </svg>
              </div>
            </button>
            <div className="faq__answer" style={{ display: isOpen ? "block" : "none" }}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
