import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="field-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow eyebrow--light">
          The software studio behind Grassr + Cleanr
        </p>
        <h1>
          Focused software for local service businesses.{" "}
          <em>Built trade by trade.</em>
        </h1>
        <p className="hero-lede">
          Grassr serves lawn care operators. Cleanr serves cleaning businesses.
          Both are live, with focused tools for the work that keeps each day
          moving.
        </p>

        <div className="hero-actions">
          <a href="#products" className="button button--accent">
            Explore the products
            <ArrowDown aria-hidden="true" />
          </a>
          <a href="#approach" className="button button--ghost">
            How we build
            <ArrowDown aria-hidden="true" />
          </a>
        </div>

      </div>

      <section
        className="hero-showcase"
        aria-label="Live products from Useable Studio"
      >
        <div className="showcase-heading">
          <span>Live products</span>
          <span aria-hidden="true">02</span>
        </div>

        <div className="showcase-products">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={product.internalHref}
              className={"showcase-product showcase-product--" + product.slug}
              aria-label={"Learn about " + product.name}
            >
              <div className="showcase-product-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="live-dot">{product.status}</span>
              </div>
              <div className="showcase-product-title">
                <Image
                  src={product.iconSrc}
                  width={512}
                  height={512}
                  alt=""
                  aria-hidden="true"
                  unoptimized
                />
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.trade}</span>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <div className="showcase-feature-row" aria-hidden="true">
                {product.features.slice(0, 3).map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="showcase-footer">
          <span>Useable Studio</span>
          <span>Software for local service work</span>
        </div>
      </section>
    </section>
  );
}
