import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Useable Studio?",
    answer:
      "Useable Studio builds focused software for local service businesses. It is the studio behind Grassr for lawn care operators and Cleanr for cleaning businesses.",
  },
  {
    question: "What is Grassr?",
    answer:
      "Grassr is lawn care business software for solo operators and small crews. It supports recurring scheduling, crew coordination, route planning, customer records, estimates, invoices, and payments on the web and iPhone.",
  },
  {
    question: "What is Cleanr?",
    answer:
      "Cleanr is business management software for solo cleaners and small cleaning teams. It supports recurring appointments, staff dispatch, time on site, customer and property records, quotes, invoices, and online card payments after connecting Stripe. It is available on the web and iPhone.",
  },
  {
    question: "Who are the products for?",
    answer:
      "Useable Studio's current products serve solo operators and small or growing crews in lawn care and cleaning. They are not positioned as enterprise facilities-management systems.",
  },
  {
    question: "Why make a separate product for each trade?",
    answer:
      "Grassr and Cleanr share business concepts such as schedules, customers, crews, and invoices, but each uses the language and workflows of its own trade. Separate products let those differences stay visible.",
  },
  {
    question: "Are more products coming?",
    answer:
      "Useable Studio is interested in additional local service trades, but Grassr and Cleanr are the two products announced and live today.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="section-intro">
        <p className="eyebrow">Questions, answered</p>
        <h2>The details behind the studio and its products.</h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={faq.question} open={index === 0}>
            <summary>
              <span>{faq.question}</span>
              <ChevronDown aria-hidden="true" />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
