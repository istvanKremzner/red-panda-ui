import { Color } from "@/lib/types";
import clsx from "clsx";
import { FC } from "react";
import classes from "./card.module.scss";

interface ICardProps {
  backgroundColor?: Color | "paper";
  fixed?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const Card: FC<ICardProps> = ({
  backgroundColor = "paper",
  fixed = false,
  header,
  footer,
  children,
}) => (
  <section
    className={clsx(
      classes.card,
      classes[backgroundColor],
      fixed && classes.fixed
    )}
  >
    {header && <header className={classes.header}>{header}</header>}
    <div className={classes.content}>{children}</div>
    {footer && <footer className={classes.footer}>{footer}</footer>}
  </section>
);
