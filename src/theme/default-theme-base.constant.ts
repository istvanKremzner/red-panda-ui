import { ITheme } from "./theme.type";

type BaseTheme = Omit<ITheme, 'text' | 'divider' | 'background'>

export const defaultThemeBase: BaseTheme = {
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },

    common: {
        black: 'black',
        white: 'white',
    },

    primary: {
        light: '#F27289',
        main: '#F23D3D',
        dark: '#8C2323',
        contrastText: '#8C2323',
    },
    secondary: {
        light: '#6FBFBF',
        main: '#82D9D9',
        dark: '#82D9D9',
        contrastText: '#6fa4be',
    },

    success: {
        light: '#6cefbf',
        main: '#15BF81',
        dark: '#168C61',
        contrastText: '#16F28B',
    },
    info: {
        light: '#B6B9F2',
        main: '#999DF2',
        dark: '#4951F2',
        contrastText: '#0511F2',
    },
    warning: {
        light: '#f2ed54',
        main: '#F2CA52',
        dark: '#F2B749',
        contrastText: '#6fa4be',
    },
    error: {
        light: '#fb4141',
        main: '#F20505',
        dark: '#8C0303',
        contrastText: '#f5000',
    },
};
