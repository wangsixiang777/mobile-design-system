import React from "react";
import "./Alert.css";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  variant?: AlertVariant;
  className?: string;
}

export function Alert({
  title,
  children,
  variant = "info",
  className = "",
}: AlertProps) {
  return (
    <div className={`ds-alert ds-alert--${variant} ${className}`.trim()}>
      <div className="ds-alert__title">{title}</div>
      {children ? <div>{children}</div> : null}
    </div>
  );
}
