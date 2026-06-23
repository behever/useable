"use client";

import { useState } from "react";
import { Input } from "@/components/ds/input";
import { Button } from "@/components/ds/button";
import { TicketBadge } from "@/components/ds/ticket-badge";

export function Hero() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center px-6 md:px-12 pt-14 pb-20 md:pt-[72px] md:pb-[88px] max-w-[1200px] mx-auto">
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--vermillion-deep)",
            marginBottom: 20,
          }}
        >
          Built · For · Local · Crews
        </div>
        <h1
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: "clamp(40px, 7vw, 64px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.18,
            color: "var(--ink)",
            margin: 0,
            maxWidth: 620,
          }}
        >
          We build software for{" "}
          <span style={{ fontStyle: "italic", color: "var(--vermillion)" }}>local</span>{" "}
          service businesses.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 19,
            lineHeight: 1.7,
            color: "var(--ink-soft)",
            maxWidth: 500,
            marginTop: 24,
          }}
        >
          Local service businesses run the world but run on clipboards, group
          texts, and spreadsheets. We build the tools they actually need.
        </p>

        <div id="waitlist" style={{ marginTop: 36, scrollMarginTop: 96 }}>
          {sent ? (
            <div
              style={{
                border: "2px dashed var(--ink)",
                borderRadius: 8,
                padding: "18px 22px",
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                background: "var(--paper-light)",
              }}
              role="status"
              aria-live="polite"
            >
              <span
                style={{
                  fontFamily: "var(--font-headline)",
                  fontStyle: "italic",
                  fontSize: 34,
                  color: "var(--vermillion)",
                }}
              >
                Thanks!
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  lineHeight: 1.5,
                }}
              >
                You&rsquo;re on the list.
                <br />
                We&rsquo;ll be in touch.
              </span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-end",
                flexWrap: "wrap",
              }}
            >
              <div style={{ width: 300, maxWidth: "100%" }}>
                <Input
                  label="Work Email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button variant="primary" type="submit">
                Get Early Access
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <TicketBadge
          bar="Software · For · The Trades"
          tone="paper"
          style={{ boxShadow: "6px 7px 0 var(--ink)" }}
        >
          <div style={{ textAlign: "center", padding: "8px 12px" }}>
            <div
              style={{
                fontFamily: "var(--font-dot)",
                fontWeight: 400,
                fontSize: 52,
                letterSpacing: "0.04em",
                lineHeight: 0.9,
                color: "var(--ink)",
                position: "relative",
                zIndex: 2,
              }}
            >
              USEABLE
            </div>
            <div
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: 34,
                color: "var(--vermillion)",
                lineHeight: 0.9,
                marginTop: -8,
                marginLeft: 73,
                position: "relative",
                zIndex: 1,
              }}
            >
              Studio
            </div>
            <img
              src="/illustrations/building.svg"
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: 230, maxWidth: "100%", height: "auto", margin: "16px auto 4px" }}
            />
            <div style={{ width: 64, height: 1, background: "var(--line-soft)", margin: "14px auto 16px" }} />
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
                lineHeight: 1.8,
              }}
            >
              989 · Illinois
              <br />
              Est. 2025 · United States
            </div>
          </div>
        </TicketBadge>
      </div>
    </section>
  );
}
