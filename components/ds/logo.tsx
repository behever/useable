import React from "react";

type Variant = "inline" | "wordmark" | "ticket";
type Color = "ink" | "paper";

/**
 * Useable Studio — Logo
 * The brand wordmark. Variants:
 *  - "ticket": full notched sign with red top bar (hero / footer)
 *  - "inline": dot-matrix USEABLE over script Studio (nav)
 *  - "wordmark": single-line dot-matrix USEABLE (compact)
 * Color "ink" (default) or "paper" for dark backgrounds.
 * "USEABLE" is set in the dot-matrix face; "Studio" stays the script serif.
 */
export function Logo({
  variant = "inline",
  color = "ink",
  bar = "Software · For · The Trades",
  style,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  color?: Color;
  bar?: string;
}) {
  const dotColor = color === "paper" ? "var(--white)" : "var(--ink)";

  const dotStyle = (fontSize: string): React.CSSProperties => ({
    fontFamily: "var(--font-dot)",
    fontWeight: 400,
    fontSize,
    letterSpacing: "0.04em",
    lineHeight: 0.9,
    color: dotColor,
  });

  if (variant === "ticket") {
    return (
      <div
        style={{
          background: "var(--paper-light)",
          border: "var(--bw-bold) solid var(--ink)",
          width: "fit-content",
          clipPath:
            "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
          ...style,
        }}
        {...rest}
      >
        <div
          style={{
            background: "var(--vermillion)",
            color: "var(--white)",
            textAlign: "center",
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            padding: "7px 24px",
          }}
        >
          {bar}
        </div>
        <div style={{ textAlign: "center", padding: "16px 36px 22px" }}>
          <div style={{ ...dotStyle("46px"), position: "relative", zIndex: 2 }}>
            USEABLE
          </div>
          <div
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "30px",
              color: "var(--vermillion)",
              lineHeight: 0.9,
              marginTop: "-7px",
              marginLeft: "64px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Studio
          </div>
        </div>
      </div>
    );
  }

  if (variant === "wordmark") {
    return (
      <span style={{ ...dotStyle("34px"), ...style }} {...rest}>
        USEABLE
      </span>
    );
  }

  // inline (default)
  return (
    <div
      style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1, ...style }}
      {...rest}
    >
      <span style={{ ...dotStyle("30px"), position: "relative", zIndex: 2 }}>
        USEABLE
      </span>
      <span
        style={{
          fontFamily: "var(--font-headline)",
          fontSize: "20px",
          color: "var(--vermillion)",
          marginTop: "-5px",
          marginLeft: "42px",
          lineHeight: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        Studio
      </span>
    </div>
  );
}
