import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { Approach } from "@/components/approach";
import { About } from "@/components/about";
import { FAQ, faqJsonLd } from "@/components/faq";
import { Footer } from "@/components/footer";
import { products } from "@/lib/products";
import { softwareApplicationJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <div className="site-shell">
      <Nav />
      <main id="main">
        <Hero />
        <ProductGrid />
        <Approach />
        <About />
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
            "@graph": products.map(softwareApplicationJsonLd),
          }),
        }}
      />
      <Footer />
    </div>
  );
}
