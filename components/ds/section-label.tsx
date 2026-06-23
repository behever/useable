import React from "react";

/**
 * Useable Studio — SectionLabel
 * The tracked-caps section eyebrow with a short red tick, used to open
 * each content section (the navy-rule + eyebrow rhythm).
 */
export function SectionLabel({
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--vermillion-deep)",
        marginBottom: "32px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{ width: 28, height: 2, background: "var(--vermillion)" }}
      />
      {children}
    </h2>
  );
}
