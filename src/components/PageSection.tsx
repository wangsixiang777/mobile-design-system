import React from "react";
import "./PageSection.css";

export interface PageSectionProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function PageSection({
  title,
  extra,
  children,
  className = "",
}: PageSectionProps) {
  return (
    <section className={`ds-page-section ${className}`.trim()}>
      {title || extra ? (
        <header className="ds-page-section__header">
          {title ? <h2 className="ds-page-section__title">{title}</h2> : <span />}
          {extra ? <div>{extra}</div> : null}
        </header>
      ) : null}
      <div className="ds-page-section__body">{children}</div>
    </section>
  );
}
