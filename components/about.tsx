export function About() {
  return (
    <section className="px-6 md:px-16 max-w-[1200px] mx-auto pb-16 md:pb-24">
      <h2 className="text-xs uppercase tracking-[0.12em] text-[#999] font-semibold mb-8">
        Software for Local Service Businesses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <p className="text-[#555] leading-[1.8] mb-4">
            Useable Studio builds software for local service businesses —
            the companies that keep neighborhoods running but still manage
            their operations with paper invoices, group texts, and spreadsheets.
            We serve lawn care crews, cleaning teams, plumbers, electricians,
            and HVAC technicians.
          </p>
          <p className="text-[#555] leading-[1.8]">
            Most software for these trades was built for large enterprises and
            stripped down, or built by people who never rode in the truck. It
            is too complex, too expensive, or too generic. We think local
            service businesses deserve tools designed around the way they
            actually work — not the way a product manager imagined they might.
          </p>
        </div>
        <div>
          <p className="text-[#555] leading-[1.8] mb-4">
            We build software one trade at a time. We start by understanding
            the daily routines, pain points, and workflows of a specific
            industry. Then we build the simplest tool that solves the biggest
            problem — scheduling, invoicing, crew coordination, or customer
            communication.
          </p>
          <p className="text-[#555] leading-[1.8]">
            Our first product, Grassr, is lawn care management software for
            crews and solo operators. More trades are coming. Every product we
            ship is designed to be learned in minutes, useful on day one, and
            priced for a business that counts every dollar.
          </p>
        </div>
      </div>
    </section>
  );
}
