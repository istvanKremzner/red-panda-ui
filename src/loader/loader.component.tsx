import { CSSProperties } from "react";
import classes from "./loader.module.scss";

interface ILoaderProps {
  color?: string;
}

export const Loader = ({ color = "#de3500" }) => (
  <div
    style={
      {
        "--loader-color": color,
      } as CSSProperties
    }
    className={classes.loader}
  />
);
