import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <p className="eyebrow eyebrow--light">Find your product</p>
        <h2>Explore the software built for your trade.</h2>
        <div className="footer-cta-actions">
          <a
            href="https://grassr.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--accent"
          >
            Visit Grassr
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://trycleanr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--ghost"
          >
            Visit Cleanr
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand-lockup" aria-label="Useable Studio home">
            <span className="brand-mark" aria-hidden="true">
              U
            </span>
            <span className="brand-name">
              Useable <em>Studio</em>
            </span>
          </Link>
          <p>Focused software for local service businesses.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            <span>Studio</span>
            <Link href="/#products">Products</Link>
            <Link href="/#approach">Approach</Link>
            <Link href="/#about">About</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
          <div>
            <span>Products</span>
            <a href="https://grassr.io/" target="_blank" rel="noopener noreferrer">
              Grassr
            </a>
            <a
              href="https://trycleanr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cleanr
            </a>
            <Link href="/privacy">Privacy</Link>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Useable LLC · Useable Studio</span>
        <a href="mailto:hello@useable.studio">
          <Mail aria-hidden="true" />
          hello@useable.studio
        </a>
      </div>
    </footer>
  );
}
