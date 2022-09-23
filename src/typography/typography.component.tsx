import { Color } from "@/lib/types";
import clsx from "clsx";
import { FC } from "react";

import classes from "./typography.module.scss";

interface ITypography {
  className?: string;
  children: React.ReactNode;

  type?: "extra-small" | "small" | "normal" | "large" | "extra-large";
  color?: Color;

  center?: boolean;
  bold?: string;
  highlighted?: boolean;
  fullWidth?: boolean;
}

export const Typography: FC<ITypography> = ({
  className,
  type = "normal",
  color = "primary",
  center = true,
  bold = false,
  highlighted = false,
  fullWidth = false,
  children,
}) => (
  <p
    className={clsx(
      className,
      classes.typography,
      classes[type],
      classes[color],
      center && classes.center,
      bold && classes.bold,
      highlighted && classes.highlighted,
      fullWidth && classes.fullWidth
    )}
  >
    {children}
  </p>
);
