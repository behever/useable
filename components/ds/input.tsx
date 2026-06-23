"use client";
import React from "react";

/**
 * Useable Studio — Input
 * Cream field with navy border, tracked-caps label. Focus deepens the
 * border to vermillion. Pass label + optional hint.
 */
export function Input({
  label,
  hint,
  id,
  type = "text",
  style,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
}) {
  const [focus, setFocus] = React.useState(false);
  const fid =
    id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <label
          htmlFor={fid}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={fid}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "var(--ink)",
          background: "var(--white)",
          border: `var(--bw) solid ${focus ? "var(--vermillion)" : "var(--ink)"}`,
          borderRadius: "var(--radius-sm)",
          padding: "11px 14px",
          outline: focus ? "2px solid var(--vermillion)" : "2px solid transparent",
          outlineOffset: "2px",
          transition: "border-color 120ms var(--ease)",
          ...style,
        }}
        {...rest}
      />
      {hint && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--ink-mute)",
          }}
        >
          {hint}
        </span>
      )}
    </div>
  );
}
