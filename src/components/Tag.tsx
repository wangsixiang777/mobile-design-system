import React from "react";
import "./Tag.css";

export type TagVariant = "primary" | "success" | "warning" | "danger" | "info";

export interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
}

export function Tag({ children, variant = "primary", className = "" }: TagProps) {
  return <span className={`ds-tag ds-tag--${variant} ${className}`.trim()}>{children}</span>;
}
