import { defaultThemeBase } from "./default-theme-base.constant";
import { ITheme } from "./theme.type";

export const darkTheme: ITheme = {
  ...defaultThemeBase,

  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    default: '#404040',
    paper: '#262626',
  },
};
