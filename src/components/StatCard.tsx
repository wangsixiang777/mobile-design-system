import React from "react";
import { Tag, type TagVariant } from "./Tag";
import "./StatCard.css";

export type StatStatus = "primary" | "success" | "warning" | "danger" | "info";

export interface StatCardProps {
  label: string;
  value: React.ReactNode;
  trend?: string;
  status?: StatStatus;
  className?: string;
}

const tagVariantMap: Record<StatStatus, TagVariant> = {
  primary: "primary",
  success: "success",
  warning: "warning",
  danger: "danger",
  info: "info",
};

export function StatCard({
  label,
  value,
  trend,
  status = "primary",
  className = "",
}: StatCardProps) {
  return (
    <article className={`ds-stat-card ${className}`.trim()}>
      <div className="ds-stat-card__label-row">
        <span className="ds-stat-card__label">{label}</span>
        {trend ? <Tag variant={tagVariantMap[status]}>{trend}</Tag> : null}
      </div>
      <div className="ds-stat-card__value">{value}</div>
    </article>
  );
}
