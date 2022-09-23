export interface ITheme {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  common: CommonColors;
  text: ITextOptions;
  divider: string;
  background: IBackgroundOptions;

  //  mode?: PaletteMode;
  //  action?: Partial<TypeAction>;
  //  getContrastText?: (background: string) => string;
}

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

interface ITextOptions {
  primary: string;
  secondary: string;
}

interface IBackgroundOptions {}

type CommonColors = "black" | "white";
