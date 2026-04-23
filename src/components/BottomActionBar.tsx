import React from "react";
import { Button, type ButtonProps } from "./Button";
import "./BottomActionBar.css";

type ActionButtonProps = Omit<ButtonProps, "size">;

export interface BottomActionBarProps {
  primaryAction: ActionButtonProps;
  secondaryAction?: ActionButtonProps;
  className?: string;
}

export function BottomActionBar({
  primaryAction,
  secondaryAction,
  className = "",
}: BottomActionBarProps) {
  return (
    <footer className={`ds-bottom-action-bar ${className}`.trim()}>
      {secondaryAction ? (
        <Button {...secondaryAction} size="md" className="ds-bottom-action-bar__btn" />
      ) : null}
      <Button {...primaryAction} size="md" className="ds-bottom-action-bar__btn" />
    </footer>
  );
}
