import React from "react";
import "./MobilePage.css";

export interface MobilePageProps {
  children: React.ReactNode;
  className?: string;
}

export function MobilePage({ children, className = "" }: MobilePageProps) {
  return <main className={`ds-mobile-page ${className}`.trim()}>{children}</main>;
}
