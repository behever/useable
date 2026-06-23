"use client";

import Link from "next/link";
import { Logo } from "@/components/ds/logo";
import { Button } from "@/components/ds/button";

const links = ["Products", "About", "FAQ"];

export function Nav() {
  const earlyAccess = () => {
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#waitlist";
  };

  return (
    <nav
      className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-12 py-[18px] md:py-[22px]"
      style={{ background: "var(--paper)", borderBottom: "2px solid var(--ink)" }}
    >
      <Link href="/" aria-label="Useable Studio — home" style={{ textDecoration: "none" }}>
        <Logo variant="inline" />
      </Link>
      <div className="flex items-center gap-5 md:gap-7">
        <div className="hidden sm:flex items-center gap-6 md:gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`/#${l.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink)",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
        <Button variant="primary" size="sm" onClick={earlyAccess}>
          Early Access
        </Button>
      </div>
    </nav>
  );
}
