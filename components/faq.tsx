const faqs = [
  {
    question: "What is Useable Studio?",
    answer:
      "Useable Studio is a software company that builds tools for local service businesses. We focus on trades like lawn care, cleaning, plumbing, and HVAC — businesses that run on clipboards, group texts, and spreadsheets. Our first product, Grassr, is a lawn care management app for crews and solo operators.",
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
      "Useable Studio is currently building tools for additional service trades beyond lawn care. We develop one product at a time, focusing on deeply understanding each industry before building. Details on upcoming products will be announced as they get closer to launch.",
  },
];

export function FAQ() {
  return (
    <section className="px-6 md:px-16 max-w-[1200px] mx-auto pb-16 md:pb-24">
      <h2 className="text-xs uppercase tracking-[0.12em] text-[#999] font-semibold mb-8">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="border-t border-[#e5e5e5] pt-6">
            <dt className="text-base font-semibold text-[#1a1a1a] mb-2">
              {faq.question}
            </dt>
            <dd className="text-sm text-[#555] leading-[1.8] max-w-[640px]">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
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
