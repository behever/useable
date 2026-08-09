import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import styles from "@/components/interior-pages.module.css";
import type { Product } from "@/lib/products";
import {
  organizationId,
  softwareApplicationJsonLd,
  websiteId,
} from "@/lib/structured-data";

export function ProductDetailPage({ product }: { product: Product }) {
  const pageUrl = `https://useable.studio${product.internalHref}`;
  const pageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: product.pageTitle,
        description: product.metaDescription,
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        about: { "@id": product.schemaId },
        mainEntity: { "@id": product.schemaId },
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Useable Studio",
            item: "https://useable.studio/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: product.name,
          },
        ],
      },
      softwareApplicationJsonLd(product),
    ],
  };

  return (
    <div className={styles.pageShell}>
      <Nav />
      <main id="main" className={styles.main}>
        <section className={styles.hero}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Useable Studio</Link>
            <ChevronRight aria-hidden="true" />
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className="eyebrow eyebrow--light">
                A Useable Studio product · {product.status}
              </p>
              <h1>{product.name}</h1>
              <p className={styles.lede}>{product.pageLede}</p>
              <div className={styles.heroActions}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--accent"
                >
                  Visit {product.name}
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  href={product.appStoreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--ghost"
                >
                  View on the App Store
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <div
              className={`${styles.brandPanel} ${styles[product.slug]}`}
              role="group"
              aria-label={`${product.name} product identity`}
            >
              <div className={styles.panelTopline}>
                <span>{product.trade}</span>
                <span>{product.operatingSystem}</span>
              </div>
              <div className={styles.panelBrand}>
                <Image
                  className={styles.panelWordmark}
                  src={product.wordmarkSrc}
                  width={product.wordmarkWidth}
                  height={product.wordmarkHeight}
                  alt={`${product.name} wordmark`}
                  priority
                  unoptimized
                />
                <Image
                  className={styles.panelIcon}
                  src={product.iconSrc}
                  width={512}
                  height={512}
                  alt={`${product.name} app icon`}
                  priority
                  unoptimized
                />
              </div>
              <ul className={styles.panelFeatures}>
                {product.features.slice(0, 4).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.workflow}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className="eyebrow">The product workflow</p>
              <h2>What {product.name} connects.</h2>
              <p>
                A concise look at the day-to-day work the product is designed
                to keep together.
              </p>
            </div>
            <div className={styles.workflowGrid}>
              {product.sections.map((section, index) => (
                <article className={styles.workflowCard} key={section.title}>
                  <span className={styles.workflowNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.context}>
          <div className={styles.contextGrid}>
            <div className={styles.contextCopy}>
              <p className="eyebrow">Who it is for</p>
              <h2>{product.audienceHeading}</h2>
              <p>{product.audience}</p>
            </div>
            <aside className={styles.relationshipCard}>
              <span>Product relationship</span>
              <p>{product.relationship}</p>
              <Link href="/about">
                About Useable Studio
                <ArrowRight aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </section>

        <section className={styles.official}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className="eyebrow">Official destinations</p>
              <h2>Find {product.name} in the right place.</h2>
              <p>
                Product details, access, support, and policies are maintained
                on these official {product.name} pages.
              </p>
            </div>
            <div className={styles.officialGrid}>
              {product.officialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.officialLink}
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </div>
  );
}
