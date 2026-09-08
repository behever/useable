const startingPoints = [
  {
    title: "An idea to explore",
    description:
      "You see a possibility. Let’s give it shape, find the useful first version, and build from there.",
  },
  {
    title: "A process to improve",
    description:
      "The spreadsheets, the repeat tasks, the details that fall through the cracks. Let’s make the everyday work easier.",
  },
  {
    title: "A product to move forward",
    description:
      "You’ve already made a start. Let’s work through what’s getting in the way and make the experience better for the people using it.",
  },
];
export function ProjectFit() {
  return (
    <section
      className="project-fit"
      id="your-project"
      aria-labelledby="project-fit-heading"
    >
      <div className="page-width fit-grid">
        <div data-reveal>
          <p className="section-label">03 / Your next project</p>
          <h2 id="project-fit-heading">
            A starting point
            <br />
            <em>is all you need.</em>
          </h2>
        </div>
        <div className="fit-options" data-reveal>
          {startingPoints.map((point, index) => (
            <details
              key={point.title}
              name="project-starting-point"
              open={index === 0}
            >
              <summary>
                {point.title}
                <span className="expand-icon" aria-hidden="true" />
              </summary>
              <p>{point.description}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
