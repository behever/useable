import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { products } from "@/lib/products";

export function ProductGrid() {
  return (
    <section id="products" className="products-section">
      <div className="section-intro">
        <p className="eyebrow">Live products</p>
        <h2>Two products. Each built for a specific trade.</h2>
        <p>
          Grassr and Cleanr share the business essentials while keeping the
          language and workflows of lawn care and cleaning distinct.
        </p>
      </div>

      <div className="product-card-grid">
        {products.map((product) => (
          <article
            key={product.slug}
            className={"product-card product-card--" + product.slug}
          >
            <div className="product-card-visual">
              <div className="product-card-status">
                <span>{product.trade}</span>
                <span className="live-dot">{product.status}</span>
              </div>
              <Image
                className="product-wordmark"
                src={product.wordmarkSrc}
                width={product.wordmarkWidth}
                height={product.wordmarkHeight}
                alt={product.name}
                loading="lazy"
                decoding="async"
                unoptimized
              />
              <Image
                className="product-card-icon"
                src={product.iconSrc}
                width={512}
                height={512}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                unoptimized
              />
            </div>

            <div className="product-card-body">
              <h3>{product.tagline}</h3>
              <p>{product.description}</p>

              <ul className="feature-list" aria-label={product.name + " features"}>
                {product.features.map((feature) => (
                  <li key={feature}>
                    <Check aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="product-card-actions">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--dark"
                >
                  Visit {product.name}
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  href={product.appStoreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View iPhone app
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
