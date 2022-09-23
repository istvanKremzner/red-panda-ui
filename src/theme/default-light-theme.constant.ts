import { defaultThemeBase } from "./default-theme-base.constant";
import { ITheme } from "./theme.type";

export const lightTheme: ITheme = {
    ...defaultThemeBase,

    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.6)',
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
        default: '#EBEDF2',
        paper: '#F2F2F2',
    },
};
