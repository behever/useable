import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="page-width" data-reveal>
          <p className="section-label">Let’s make something useable</p>
          <h2 id="contact-heading">
            What have you been
            <br />
            <em>wanting to build?</em>
          </h2>
          <p className="contact-lede">
            An idea you keep coming back to. A process that takes too much time.
            <br className="desktop-break" /> A product that could work better.
            Tell us what you’re thinking.
          </p>
          <div className="contact-actions">
            <a
              className="button button--dark"
              href="mailto:hello@useable.studio?subject=Let%E2%80%99s%20talk%20about%20a%20project"
            >
              Tell us about your project <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-email">
              <a className="text-link" href="mailto:hello@useable.studio">
                hello@useable.studio
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-bottom page-width">
        <Link
          href="/"
          className="brand-lockup"
          aria-label="Useable Studio home"
        >
          useable <em>studio</em>
        </Link>
        <nav aria-label="Footer navigation">
          <Link href="/#work">Work</Link>
          <Link href="/about" prefetch={false}>
            Studio
          </Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <span>© 2026 Useable LLC</span>
      </div>
    </footer>
  );
}
