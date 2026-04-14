export function About() {
  return (
    <section className="px-6 md:px-16 max-w-[1200px] mx-auto pb-16 md:pb-24">
      <h2 className="text-xs uppercase tracking-[0.12em] text-[#999] font-semibold mb-8">
        Why We Build
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <p className="text-[#555] leading-[1.8] mb-4">
            Millions of local service businesses keep neighborhoods running.
            Lawn care crews, cleaning teams, plumbers, electricians, HVAC
            techs — they show up every day, do skilled work, and hold it all
            together with paper invoices, group texts, and spreadsheets taped
            to dashboards.
          </p>
          <p className="text-[#555] leading-[1.8]">
            The software that exists for them was built for enterprises and
            stripped down, or built by people who never rode in the truck. It
            is too complex, too expensive, or too generic. We think local
            service businesses deserve tools designed around the way they
            actually work — not the way a product manager imagined they might.
          </p>
        </div>
        <div>
          <p className="text-[#555] leading-[1.8] mb-4">
            Useable Studio builds software one trade at a time. We start by
            understanding the daily routines, pain points, and workflows of a
            specific industry. Then we build the simplest tool that solves the
            biggest problem — scheduling, invoicing, crew coordination, or
            customer communication.
          </p>
          <p className="text-[#555] leading-[1.8]">
            We launched our first product, Grassr, for lawn care professionals.
            More trades are coming. Every product we ship is designed to be
            learned in minutes, useful on day one, and priced for a business
            that counts every dollar.
          </p>
        </div>
      </div>
    </section>
  );
}
