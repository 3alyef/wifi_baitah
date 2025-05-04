import light from "./light";
import dark from "./dark";

export interface ThemeContract {
  background: string;
  surface: string;
  surfaceAlt: string;
  primary: string;
  primaryDark: string;
  text: string;
  textOnPrimary: string;
  shadow: string;
  error: string;
  connectedGreen: string;
  loadingProgress: string;
}

export const themes = { light, dark };
export type ThemeType = keyof typeof themes;
