"use client";
import type { MouseEvent, KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
  const menu = event.currentTarget.closest("details");
  if (menu) menu.open = false;
}
function escapeMenu(event: KeyboardEvent<HTMLDetailsElement>) {
  if (event.key === "Escape") {
    event.currentTarget.open = false;
    event.currentTarget.querySelector("summary")?.focus();
  }
}
export function Nav() {
  return (
    <header className="site-header">
      <nav className="site-nav page-width" aria-label="Primary navigation">
        <Link
          href="/"
          className="brand-lockup"
          aria-label="Useable Studio home"
        >
          useable <em>studio</em>
        </Link>
        <div className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/#studio">Studio</Link>
        </div>
        <Link href="/#contact" className="button button--accent nav-cta">
          Let’s talk <ArrowUpRight aria-hidden="true" />
        </Link>
        <details className="mobile-menu" onKeyDown={escapeMenu}>
          <summary aria-label="Navigation menu">
            <Menu className="menu-open-icon" aria-hidden="true" />
            <X className="menu-close-icon" aria-hidden="true" />
          </summary>
          <div className="mobile-menu-panel">
            <Link href="/#work" onClick={closeMenu}>
              Our work <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/#studio" onClick={closeMenu}>
              The studio <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/products/grassr" onClick={closeMenu}>
              Grassr
            </Link>
            <Link href="/products/cleanr" onClick={closeMenu}>
              Cleanr
            </Link>
            <Link href="/#contact" onClick={closeMenu}>
              Let’s talk <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
