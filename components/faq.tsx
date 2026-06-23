"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ds/section-label";
import { faqs } from "@/components/faq-data";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="px-6 md:px-12 max-w-[1200px] mx-auto py-14 md:py-16"
      style={{ borderTop: "2px solid var(--ink)" }}
    >
      <SectionLabel>Frequently Asked Questions</SectionLabel>
      <div className="max-w-[760px]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderTop: "1px solid var(--line-soft)" }}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 19,
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  {f.question}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    color: "var(--vermillion)",
                    lineHeight: 1,
                    flexShrink: 0,
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform 200ms var(--ease)",
                  }}
                >
                  +
                </span>
              </button>
              <div id={`faq-answer-${i}`} role="region" hidden={!isOpen}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "var(--ink-soft)",
                    margin: "0 0 22px",
                    maxWidth: 640,
                  }}
                >
                  {f.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
