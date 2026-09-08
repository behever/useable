import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Mail } from "lucide-react";
import { Footer } from "@/components/footer";
import styles from "@/components/interior-pages.module.css";
import { Nav } from "@/components/nav";
import { products } from "@/lib/products";
import { organizationId, websiteId } from "@/lib/structured-data";

const canonical = "https://useable.studio/about";

export const metadata: Metadata = {
  title: "About Useable Studio | Thoughtfully Built Software",
  description:
    "Meet the software studio behind Grassr and Cleanr. We build around everyday work and help turn ideas into useful products.",
  alternates: { canonical },
  openGraph: {
    title: "About Useable Studio | Thoughtfully Built Software",
    description:
      "Meet the software studio behind Grassr and Cleanr. We build around everyday work and help turn ideas into useful products.",
    type: "website",
    url: canonical,
    siteName: "Useable Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Useable Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Useable Studio | Thoughtfully Built Software",
    description:
      "Meet the software studio behind Grassr and Cleanr. We build around everyday work and help turn ideas into useful products.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: "About Useable Studio",
      description:
        "Meet the software studio behind Grassr and Cleanr. We build around everyday work and help turn ideas into useful products.",
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationId },
      about: { "@id": organizationId },
      mainEntity: { "@id": organizationId },
      breadcrumb: { "@id": `${canonical}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
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
          name: "About",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <div className={styles.pageShell}>
      <Nav />
      <main id="main" className={styles.main}>
        <section className={styles.aboutHero}>
          <div className={styles.aboutHeroInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Useable Studio</Link>
              <ChevronRight aria-hidden="true" />
              <span aria-current="page">About</span>
            </nav>
            <div className={styles.aboutHeroCopy}>
              <p className="eyebrow eyebrow--light">About Useable Studio</p>
              <h1>Good software. Built around people.</h1>
              <p className={styles.aboutLede}>
                Useable Studio is the software studio behind Grassr and Cleanr.
                We design and build around the way people actually work, and
                help others bring their own ideas to life.
              </p>
              <div className={styles.aboutActions}>
                <Link href="/#contact" className="button button--accent">
                  Tell us about your project
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link href="/#work" className="button button--ghost">
                  Explore our work
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.aboutBody}>
          <div className={styles.aboutBodyGrid}>
            <div>
              <p className="eyebrow">How we build</p>
              <h2>Start with the everyday details.</h2>
              <p>
                Grassr and Cleanr share operational building blocks—schedules,
                customers, crews, estimates or quotes, invoices, and
                payments—but each trade uses different language and day-to-day
                workflows. We keep those differences visible instead of forcing
                both trades into one generic interface.
              </p>
            </div>
            <aside className={styles.sharedFoundation}>
              <span>Shared operational foundation</span>
              <ul className={styles.foundationList}>
                <li>Schedules</li>
                <li>Customer records</li>
                <li>Crew or staff coordination</li>
                <li>Estimates or quotes</li>
                <li>Invoices</li>
                <li>Payments</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.aboutProducts}>
          <div className={styles.sectionInner}>
            <p className="eyebrow">Current products</p>
            <h2>One studio. Two focused products.</h2>
            <p className={styles.aboutProductsIntro}>
              Grassr brings a lawn care day together. Cleanr keeps the details
              of every clean connected. Each product starts with the people
              doing the work.
            </p>
            <div className={styles.aboutProductGrid}>
              {products.map((product) => (
                <article className={styles.aboutProductCard} key={product.slug}>
                  <div className={styles.aboutProductTop}>
                    <Image
                      src={product.iconSrc}
                      width={512}
                      height={512}
                      alt=""
                      aria-hidden="true"
                      unoptimized
                    />
                    <div>
                      <h3>{product.name}</h3>
                      <span>{product.trade}</span>
                    </div>
                  </div>
                  <p>{product.tagline}</p>
                  <div className={styles.cardActions}>
                    <Link
                      href={product.internalHref}
                      className={styles.internalLink}
                    >
                      About {product.name}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                    >
                      Visit official site
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.companyBand}>
          <div className={styles.companyBandInner}>
            <div>
              <p className="eyebrow">Company</p>
              <h2>Useable Studio is the product studio of Useable LLC.</h2>
              <p>
                Have a project in mind? Tell us what you want to build, who it
                helps, and where you could use a hand. Product support is
                available through each product’s official site.
              </p>
            </div>
            <a
              href="mailto:hello@useable.studio"
              className={styles.companyEmail}
            >
              <Mail aria-hidden="true" />
              hello@useable.studio
            </a>
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
