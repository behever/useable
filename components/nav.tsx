"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { ArrowDownRight, Menu } from "lucide-react";

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  const menu = event.currentTarget.closest("details");

  if (menu instanceof HTMLDetailsElement) {
    menu.open = false;
  }
}

export function Nav() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-lockup" aria-label="Useable Studio home">
          <span className="brand-mark" aria-hidden="true">
            U
          </span>
          <span className="brand-name">
            Useable <em>Studio</em>
          </span>
        </Link>

        <div className="nav-links">
          <Link href="/#products">Products</Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/#about">About</Link>
        </div>

        <Link
          href="/#products"
          className="button button--small button--light"
        >
          <span className="button-label-long">Explore products</span>
          <span className="button-label-short">Products</span>
          <ArrowDownRight aria-hidden="true" />
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Navigation menu">
            <Menu aria-hidden="true" />
          </summary>
          <div className="mobile-menu-panel">
            <Link href="/#products" onClick={closeMobileMenu}>
              Products
            </Link>
            <Link href="/#approach" onClick={closeMobileMenu}>
              Approach
            </Link>
            <Link href="/#about" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/#faq" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
