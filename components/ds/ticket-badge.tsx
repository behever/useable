import React from "react";

type Tone = "paper" | "ink" | "brand";

/**
 * Useable Studio — TicketBadge
 * The signature notched "sign" container with an optional red top bar.
 * Wrap any content; use for callouts, feature plaques, hero panels.
 */
export function TicketBadge({
  children,
  bar,
  tone = "paper",
  style,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { bar?: string; tone?: Tone }) {
  const tones: Record<Tone, React.CSSProperties> = {
    paper: { background: "var(--paper-light)", color: "var(--ink)" },
    ink: { background: "var(--ink)", color: "var(--white)" },
    brand: { background: "var(--vermillion)", color: "var(--white)" },
  };
  const t = tones[tone] || tones.paper;

  return (
    <div
      style={{
        border: "var(--bw-bold) solid var(--ink)",
        width: "fit-content",
        clipPath:
          "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
        ...t,
        ...style,
      }}
      {...rest}
    >
      {bar && (
        <div
          style={{
            background: "var(--vermillion)",
            color: "var(--white)",
            textAlign: "center",
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "7px 22px",
          }}
        >
          {bar}
        </div>
      )}
      <div style={{ padding: "var(--sp-5) var(--sp-6)" }}>{children}</div>
    </div>
  );
}
