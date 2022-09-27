import React, { FC } from 'react';
import classes from './chip.module.scss';
import { Color } from "@/lib/types/color.enum";
import clsx from 'clsx';

interface IChipProps {
  color: Color;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Chip: FC<IChipProps> = ({
  color,
  children,
  onClick,
}) => (
  <div className={clsx(
    classes.chip,
    classes[color],
    onClick && classes.clickable,
  )}
    onClick={onClick}
  >
    {children}
  </div>
)
