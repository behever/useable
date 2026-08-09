import { ClipboardList, Route, Wrench } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Start with the workflow",
    description:
      "We map the recurring work: appointments, routes, crews, customer details, estimates or quotes, invoices, and payments.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Keep the product focused",
    description:
      "Each trade gets its own product, vocabulary, and feature set instead of one generic interface for every service business.",
  },
  {
    number: "03",
    icon: Route,
    title: "Connect field and office",
    description:
      "The software connects planning at a desk with the work that happens on the road, at a yard, or inside a property.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="approach-section">
      <div className="section-intro section-intro--light">
        <p className="eyebrow eyebrow--light">How we build</p>
        <h2>Start with the trade. Build around the day.</h2>
        <p>
          The goal is not one enormous platform. It is focused software that
          matches the work in front of the operator.
        </p>
      </div>

      <div className="approach-grid">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article key={step.number} className="approach-card">
              <div className="approach-card-topline">
                <span>{step.number}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
