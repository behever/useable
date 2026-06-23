"use client";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

/**
 * Useable Studio — Button
 * Vintage signage button: tracked caps label, flat letterpress shadow that
 * collapses on press. Variants: primary (vermillion), secondary (navy outline),
 * ghost (text only).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit" | "reset";
}) {
  const sizes: Record<Size, React.CSSProperties> = {
    sm: { padding: "8px 16px", fontSize: "12px" },
    md: { padding: "12px 22px", fontSize: "13px" },
    lg: { padding: "16px 30px", fontSize: "15px" },
  };

  const base: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    border: "var(--bw) solid var(--ink)",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform 120ms var(--ease), box-shadow 120ms var(--ease), background 120ms var(--ease)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    lineHeight: 1,
    ...sizes[size],
  };

  const variants: Record<Variant, React.CSSProperties> = {
    primary: {
      background: "var(--vermillion)",
      color: "var(--white)",
      borderColor: "var(--vermillion-deep)",
      boxShadow: "3px 3px 0 var(--ink)",
    },
    secondary: {
      background: "var(--paper-light)",
      color: "var(--ink)",
      borderColor: "var(--ink)",
      boxShadow: "3px 3px 0 var(--ink)",
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      borderColor: "transparent",
      boxShadow: "none",
    },
  };

  const [pressed, setPressed] = React.useState(false);
  const pressStyle: React.CSSProperties | null =
    pressed && !disabled && variant !== "ghost"
      ? { transform: "translate(3px, 3px)", boxShadow: "0 0 0 var(--ink)" }
      : null;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{ ...base, ...variants[variant], ...pressStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
