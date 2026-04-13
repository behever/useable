import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { Footer } from "@/components/footer";
import { GeometricShapes } from "@/components/geometric-shapes";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GeometricShapes />
      <Nav />
      <main id="main">
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
