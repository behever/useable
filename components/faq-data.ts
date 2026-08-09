// Server-safe FAQ data + structured-data builder.
// Kept out of the "use client" faq.tsx module so the server page can call
// faqJsonLd() during static export.

export const faqs = [
  {
    question: "What is Useable Studio?",
    answer:
      "Useable Studio is a software company that builds tools for local service businesses. We focus on trades like lawn care, cleaning, plumbing, and HVAC — businesses that run on clipboards, group texts, and spreadsheets. Our products include Grassr for lawn care professionals and Cleanr for solo cleaners and growing cleaning teams.",
  },
  {
    question: "What is Cleanr?",
    answer:
      "Cleanr is business-management software for solo cleaners and growing cleaning teams. It brings recurring scheduling, staff dispatch, customer records, quotes, invoices, and card payments together in an iPhone app and web dashboard. Cleanr is live and available at trycleanr.com.",
  },
  {
    question: "What is Grassr?",
    answer:
      "Grassr is lawn care management software built for crews and solo operators. It handles scheduling, route planning, invoicing, and customer management — everything a lawn care professional needs to run their business from their phone instead of a clipboard. Grassr is live and available at grassr.app.",
  },
  {
    question: "Who is Useable Studio for?",
    answer:
      "Useable Studio builds software for local service businesses — the crews that keep neighborhoods running. This includes lawn care professionals, cleaning teams, plumbers, electricians, HVAC technicians, and other skilled trades. Our tools are designed for small teams and solo operators, not enterprises.",
  },
  {
    question: "How is Useable Studio different from other software companies?",
    answer:
      "Most software for service businesses was built for large enterprises and stripped down, or built by people who never worked in the field. Useable Studio builds one product per trade, starting from the actual daily workflows of that industry. Every tool is designed to be learned in minutes, useful on day one, and priced for businesses that count every dollar.",
  },
  {
    question: "What products are coming next?",
    answer:
      "Useable Studio is currently building tools for additional service trades beyond lawn care and cleaning. We develop one product at a time, focusing on deeply understanding each industry before building. Details on upcoming products will be announced as they get closer to launch.",
  },
];

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
