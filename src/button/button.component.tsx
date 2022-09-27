import { Color } from "@/lib/types";
import clsx from "clsx";
import { FC } from "react";

import classes from "./button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  small?: boolean;
  large?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  containerClassName?: string;
}

export const Button: FC<IButtonProps> = ({
  color = "primary",
  small = false,
  large = false,
  fullWidth = false,
  children,
  containerClassName,
  className,
  ...rest
}) => (
  <div
    className={clsx(
      containerClassName,
      classes.container,
      fullWidth && classes.fullWidth,
      classes[color]
    )}
  >
    <div className={classes.activeBackground} />
    <button
      {...rest}
      className={clsx(
        className,
        classes.button,
        small && classes.small,
        large && classes.large,
        fullWidth && classes.fullWidth
      )}
    >
      {children}
    </button>
  </div>
);
