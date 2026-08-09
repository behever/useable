export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-copy">
        <p className="eyebrow">The studio</p>
        <h2>A studio focused on local service work.</h2>
        <p>
          Useable Studio is the software studio behind Grassr and Cleanr. Our
          current products serve lawn care operators and cleaning businesses.
        </p>
        <p>
          Those trades share recurring work, crews, customer details, routes,
          estimates or quotes, invoices, and payments. They also have different
          language and day-to-day workflows, so we build a focused product for
          each one.
        </p>
      </div>

      <dl className="about-facts" aria-label="Useable Studio product facts">
        <div>
          <dt>02</dt>
          <dd>
            <strong>Live products</strong>
            Grassr and Cleanr
          </dd>
        </div>
        <div>
          <dt>02</dt>
          <dd>
            <strong>Current trades</strong>
            Lawn care and cleaning
          </dd>
        </div>
        <div>
          <dt>Web + iPhone</dt>
          <dd>
            <strong>Field and office</strong>
            Work across shared business records
          </dd>
        </div>
      </dl>
    </section>
  );
}
