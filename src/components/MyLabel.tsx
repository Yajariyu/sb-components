import React from "react";
import "./mylabel.css";

export interface Props {
  /**
   * Message default
   */
  label: string;
  /**
   * Font size
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize
   */
  allCaps: boolean;
  /**
   * Font color
   */
  color: "primary" | "secondary" | "tertiary";

  /**
   * Personalized color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label   = "No label",
  size    = "normal",
  allCaps = false,
  color   = "primary",
  fontColor,
}: Props) => {
  return (
    <span
      className={` label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
