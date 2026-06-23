import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProductGrid } from "@/components/product-grid";
import { FAQ } from "@/components/faq";
import { faqJsonLd } from "@/components/faq-data";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
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
            "@type": "SoftwareApplication",
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
              "@type": "Organization",
              name: "Useable Studio",
              url: "https://useable.studio",
            },
          }),
        }}
      />
      <Footer />
    </div>
  );
}
