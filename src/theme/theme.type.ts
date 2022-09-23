export interface ITheme {
    breakpoints: Record<Breakpoints, number>

    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    common: Record<CommonColors, string>;
    text: ITextOptions;
    divider: string;
    background: IBackgroundOptions;

    //  mode?: PaletteMode;
    //  action?: Partial<TypeAction>;
    //  getContrastText?: (background: string) => string;
}

interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}

interface ITextOptions {
    primary: string;
    secondary: string;
    disabled: string
}

interface IBackgroundOptions {
    default: string;
    paper: string;
}


type Breakpoints =
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl';

type CommonColors = "black" | "white";
