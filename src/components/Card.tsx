import React from "react";
import "./Card.css";

export interface CardProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section className={`ds-card ${className}`.trim()}>
      {title ? <h3 className="ds-card__title">{title}</h3> : null}
      <div className="ds-card__body">{children}</div>
    </section>
  );
}
