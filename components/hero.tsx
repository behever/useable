import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ProductPhone } from "@/components/product-scene";

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-main page-width">
        <div className="hero-copy">
          <h1 id="hero-heading">
            <span>Good ideas.</span>
            <em>Made useable.</em>
          </h1>
          <p className="hero-lede">
            We design and build software that makes everyday work easier.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button--accent">
              Tell us about your project <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="#work" className="text-link">
              Explore our work <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Grassr and Cleanr on iPhone">
          <span className="hero-monogram" aria-hidden="true">
            U
          </span>
          <div className="hero-phones">
            <Link
              className="hero-device hero-device--grassr"
              href="/products/grassr"
              aria-label="Explore Grassr"
            >
              <ProductPhone product="grassr" screen="dashboard" priority />
            </Link>
            <Link
              className="hero-device hero-device--cleanr"
              href="/products/cleanr"
              aria-label="Explore Cleanr"
            >
              <ProductPhone product="cleanr" screen="schedule" priority />
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-baseline page-width">
        <span>Independent software studio</span>
        <a href="#work">
          Grassr + Cleanr <span className="baseline-divider">/</span> iOS &amp;
          Web <ArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
