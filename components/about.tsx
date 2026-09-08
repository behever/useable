import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const process = [
  {
    title: "Understand the problem",
    description: "Start with the people and the work.",
  },
  {
    title: "Make the useful thing",
    description: "Design and build around what matters.",
  },
  {
    title: "Keep making it better",
    description: "Learn from real use, then refine.",
  },
];
export function About() {
  return (
    <section
      id="studio"
      className="studio-section paper-section"
      aria-labelledby="studio-heading"
    >
      <div className="page-width">
        <p className="section-label studio-label">02 / The studio</p>
        <div className="studio-grid" data-reveal>
          <h2 id="studio-heading" className="display-heading">
            We build it.
            <br />
            We use it.
            <br />
            <em>We care.</em>
          </h2>
          <div className="studio-copy">
            <h3>Good software starts with paying attention.</h3>
            <p>
              To the job that takes too many steps. The detail that keeps
              getting lost. The thing you wish just worked.
            </p>
            <p>
              We built Grassr and Cleanr around the way people actually work.
              That same curiosity shapes every project we take on.
            </p>
            <Link href="/about" className="text-link">
              Meet Useable Studio <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ol className="studio-process" id="approach">
          {process.map((step, index) => (
            <li key={step.title} data-reveal>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
