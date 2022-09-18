import { Size } from "@/lib/types";
import { AlertType } from "@/lib/types/color.enum";
import clsx from "clsx";
import React, { FC, useMemo } from "react";
import classes from "./alert.module.scss";
import { iconMapper, iconSizeMapper } from "./icon-mapper.component";

interface IAlertProps {
  type: AlertType;
  children: React.ReactNode;

  inverted?: boolean;
  size?: Size;
  customIcon?: JSX.Element;
}

export const Alert: FC<IAlertProps> = ({
  type,
  size = "normal",
  inverted = false,
  customIcon,
  children,
}) => {
  const Icon = useMemo(() => iconMapper[type] ?? iconMapper.info, [type]);
  const iconSize = useMemo(
    () => iconSizeMapper[size] ?? iconSizeMapper.normal,
    [size]
  );

  return (
    <section
      className={clsx(
        classes.alert,
        classes[type],
        classes[`font-${size}`],
        inverted && classes.inverted
      )}
    >
      {!customIcon ? (
        <Icon className={classes.icon} width={iconSize} />
      ) : (
        { customIcon }
      )}
      <div className={classes.content}>{children}</div>
    </section>
  );
};
