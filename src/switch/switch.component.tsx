import { Color } from "@/lib/types";
import clsx from "clsx";
import { FC, useCallback, useRef, useState } from "react";
import classes from "./switch.module.scss";

export interface ISwitchProps {
  color?: Color;
  className?: string;
  containerClassName?: string;

  small?: boolean;
  large?: boolean;
}

export const Switch: FC<ISwitchProps> = ({
  color = "primary",
  className,
  containerClassName,
  small = false,
  large = false,
}) => {
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggle = useCallback(() => setChecked(!checked), [checked, setChecked]);

  return (
    <div
      className={clsx(
        containerClassName,
        classes.container,
        classes[color],
        small && classes.small,
        !small && !large && classes.normal,
        large && classes.large
      )}
      onClick={toggle}
    >
      <input
        ref={inputRef}
        className={clsx(className, classes.switch)}
        type="checkbox"
        checked={checked}
      />
      <label className={classes.label} htmlFor={inputRef.current?.id}>
        Toggle
      </label>
    </div>
  );
};
