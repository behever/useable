import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { About } from "@/components/about";
import { ProjectFit } from "@/components/project-fit";
import { SiteMotion } from "@/components/site-motion";
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
        <About />
        <ProjectFit />
      </main>
      <Footer />
      <SiteMotion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": products.map(softwareApplicationJsonLd),
          }),
        }}
      />
    </div>
  );
}
