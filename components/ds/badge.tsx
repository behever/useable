import React from "react";

type Tone = "live" | "building" | "soon" | "brand" | "neutral";

/**
 * Useable Studio — Badge
 * Tracked-caps status pill. Tones: live (green), building (amber),
 * soon (navy), brand (vermillion), neutral.
 */
export function Badge({
  children,
  tone = "neutral",
  outline = false,
  style,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone; outline?: boolean }) {
  const tones: Record<Tone, { fg: string; bg: string }> = {
    live: { fg: "var(--ok)", bg: "rgba(79,122,82,0.14)" },
    building: { fg: "var(--warn)", bg: "rgba(201,138,46,0.16)" },
    soon: { fg: "var(--ink)", bg: "rgba(33,49,76,0.10)" },
    brand: { fg: "var(--vermillion)", bg: "rgba(206,67,57,0.12)" },
    neutral: { fg: "var(--ink-soft)", bg: "rgba(33,49,76,0.08)" },
  };
  const t = tones[tone] || tones.neutral;

  return (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: t.fg,
        background: outline ? "transparent" : t.bg,
        border: outline ? `var(--bw) solid ${t.fg}` : "none",
        padding: outline ? "4px 11px" : "5px 12px",
        borderRadius: "var(--radius-pill)",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
