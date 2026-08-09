import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ds/section-label";
import { Badge } from "@/components/ds/badge";

type Tone = "live" | "building" | "soon";

type Product = {
  name: string;
  tagline: string;
  description: string;
  badge: { tone: Tone; label: string };
  href?: string;
  redacted: boolean;
};

const products: Product[] = [
  {
    name: "Grassr",
    tagline: "Lawn care management for crews and solo operators",
    description:
      "Scheduling, route planning, invoicing, and customer management. Built to replace the clipboard and get crews paid faster.",
    badge: { tone: "live", label: "Live" },
    href: "https://grassr.app",
    redacted: false,
  },
  {
    name: "Cleanr",
    tagline: "Cleaning business management for solo cleaners and growing teams",
    description:
      "Recurring scheduling, staff dispatch, customer records, quotes, invoices, and card payments on iPhone and the web.",
    badge: { tone: "live", label: "Live" },
    href: "https://trycleanr.com/",
    redacted: false,
  },
  {
    name: "Next Trade",
    tagline: "More tools for service businesses",
    description: "One product per trade, built from the truck up.",
    badge: { tone: "soon", label: "Coming Soon" },
    redacted: true,
  },
];

const rowClass =
  "grid grid-cols-1 md:grid-cols-[220px_1fr_auto] items-start md:items-center gap-3 md:gap-8 py-6 md:py-[26px]";

const nameStyle = {
  fontFamily: "var(--font-display)",
  fontSize: 24,
  fontWeight: 700,
  letterSpacing: "-0.01em",
  color: "var(--ink)",
} as const;

const taglineStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 16,
  color: "var(--ink-soft)",
} as const;

const descStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 14,
  color: "var(--ink-mute)",
  marginTop: 4,
} as const;

export function ProductGrid() {
  return (
    <section
      id="products"
      className="px-6 md:px-12 max-w-[1200px] mx-auto py-14 md:py-16"
      style={{ borderTop: "2px solid var(--ink)" }}
    >
      <SectionLabel>Products</SectionLabel>
      <div>
        {products.map((p, i) => {
          const border = {
            borderTop: i === 0 ? "1px solid var(--line-soft)" : "none",
            borderBottom: "1px solid var(--line-soft)",
          } as const;

          if (p.redacted) {
            return (
              <div
                key={i}
                className={rowClass}
                style={{ ...border, opacity: 0.6 }}
                aria-hidden="true"
              >
                <div style={nameStyle} className="redacted-text">
                  {p.name}
                </div>
                <div>
                  <div style={taglineStyle} className="redacted-text">
                    {p.tagline}
                  </div>
                  <div style={descStyle} className="redacted-text">
                    {p.description}
                  </div>
                </div>
                <Badge tone={p.badge.tone}>{p.badge.label}</Badge>
              </div>
            );
          }

          return (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${rowClass}`}
              style={{ ...border, textDecoration: "none" }}
            >
              <div style={nameStyle} className="flex items-center gap-2">
                {p.name}
                <ArrowUpRight
                  className="w-[18px] h-[18px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--vermillion)" }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <div style={taglineStyle}>{p.tagline}</div>
                <div style={descStyle}>{p.description}</div>
              </div>
              <Badge tone={p.badge.tone}>{p.badge.label}</Badge>
            </a>
          );
        })}
      </div>
    </section>
  );
}
