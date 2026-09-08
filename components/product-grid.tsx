import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductScene } from "@/components/product-scene";

const stories = {
  grassr: {
    title: "Keep the day’s work moving.",
    description:
      "Recurring jobs, crews, routes, and payments—connected for solo operators and small lawn care teams.",
    category: "Lawn care",
  },
  cleanr: {
    title: "Every clean. Every detail. Together.",
    description:
      "Appointments, staff, property details, and invoices—in one place for cleaning businesses.",
    category: "Cleaning",
  },
};
export function ProductGrid() {
  return (
    <section
      id="work"
      className="work-section paper-section"
      aria-labelledby="work-heading"
    >
      <div className="page-width">
        <div className="work-heading" data-reveal>
          <div>
            <p className="section-label">01 / Selected work</p>
            <h2 id="work-heading" className="display-heading">
              Built for the
              <br />
              <em>real world.</em>
            </h2>
          </div>
          <p className="work-intro">
            Our own products. Real problems. Thoughtfully built from the first
            idea to the everyday details.
          </p>
        </div>
        <div className="work-grid" id="products">
          {products.map((product, index) => (
            <article className="work-product" key={product.slug} data-reveal>
              <Link
                href={product.internalHref}
                prefetch={false}
                className="work-scene-link"
                aria-label={`Explore ${product.name}`}
              >
                <ProductScene product={product.slug} index={index} />
              </Link>
              <div className="work-product-copy">
                <h3>{product.name}</h3>
                <p className="product-category">
                  {stories[product.slug].category} / iOS + Web
                </p>
                <h4>{stories[product.slug].title}</h4>
                <p className="product-description">
                  {stories[product.slug].description}
                </p>
                <div className="product-links">
                  <Link
                    href={product.internalHref}
                    prefetch={false}
                    className="text-link"
                  >
                    Explore {product.name} <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    Visit product <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
