import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProductGrid } from "@/components/product-grid";
import { FAQ, faqJsonLd } from "@/components/faq";
import { Footer } from "@/components/footer";
import { GeometricShapes } from "@/components/geometric-shapes";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GeometricShapes />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <ProductGrid />
        <FAQ />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "@id": "https://grassr.app/#softwareapplication",
                name: "Grassr",
                url: "https://grassr.app",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description:
                  "Lawn care management software for crews and solo operators. Scheduling, route planning, invoicing, and customer management.",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                },
                creator: {
                  "@id": "https://useable.studio/#organization",
                },
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://trycleanr.com/#softwareapplication",
                name: "Cleanr",
                url: "https://trycleanr.com/",
                sameAs:
                  "https://apps.apple.com/us/app/cleanr-business-management/id6776069251",
                applicationCategory: "BusinessApplication",
                applicationSubCategory:
                  "Cleaning Business Management Software",
                operatingSystem: "iOS, Web",
                description:
                  "Business-management software for solo cleaners and growing cleaning teams, with recurring scheduling, staff dispatch, customer records, quotes, invoices, and card payments.",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                },
                creator: {
                  "@id": "https://useable.studio/#organization",
                },
              },
            ],
          }),
        }}
      />
      <Footer />
    </div>
  );
}
