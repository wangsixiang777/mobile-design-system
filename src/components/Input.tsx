import React from "react";
import "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function Input({ error, className = "", ...props }: InputProps) {
  return (
    <div className="ds-input-wrap">
      <input
        className={`ds-input ${error ? "ds-input--error" : ""} ${className}`.trim()}
        {...props}
      />
      {error ? <span className="ds-input-hint ds-input-hint--error">{error}</span> : null}
    </div>
  );
}
