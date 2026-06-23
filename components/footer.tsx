import Link from "next/link";
import { Logo } from "@/components/ds/logo";

const linkStyle = {
  fontFamily: "var(--font-display)",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--white)",
  textDecoration: "none",
  opacity: 0.85,
} as const;

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "Grassr", href: "https://grassr.app", external: true },
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--white)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-12 md:pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <Logo variant="wordmark" color="paper" />
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                lineHeight: 2,
                marginTop: 20,
                opacity: 0.8,
              }}
            >
              Illinois · United States
              <br />
              <a href="mailto:hello@useable.studio" style={{ color: "var(--white)", textDecoration: "none" }}>
                hello@useable.studio
              </a>
            </div>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Footer">
            {navLinks.map((l) =>
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href} style={linkStyle}>
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>
        <div
          className="flex flex-col sm:flex-row justify-between gap-3 mt-10 pt-6"
          style={{
            borderTop: "1px solid rgba(251,248,240,0.18)",
            fontFamily: "var(--font-display)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.65,
          }}
        >
          <span>© 2026 Useable Studio</span>
          <span>Built for the Trades · One Trade at a Time</span>
        </div>
      </div>
    </footer>
  );
}
