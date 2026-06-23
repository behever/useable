"use client";
import React from "react";

type Variant = "flat" | "soft";

/**
 * Useable Studio — Card
 * Cream panel with navy hairline border. Variants: flat (letterpress offset
 * shadow) or soft (subtle drop). Set interactive for hover lift.
 */
export function Card({
  children,
  variant = "soft",
  interactive = false,
  style,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  interactive?: boolean;
}) {
  const [hover, setHover] = React.useState(false);

  const variants: Record<Variant, React.CSSProperties> = {
    flat: { boxShadow: "var(--shadow-flat)", border: "var(--bw) solid var(--ink)" },
    soft: { boxShadow: "var(--shadow-card)", border: "1px solid var(--line-soft)" },
  };

  const hoverStyle: React.CSSProperties | null =
    interactive && hover
      ? variant === "flat"
        ? { transform: "translate(-1px,-1px)", boxShadow: "4px 4px 0 var(--ink)" }
        : { transform: "translateY(-2px)", boxShadow: "var(--shadow-raised)" }
      : null;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        padding: "var(--sp-5)",
        transition: "transform 160ms var(--ease), box-shadow 160ms var(--ease)",
        cursor: interactive ? "pointer" : "default",
        ...variants[variant],
        ...hoverStyle,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
