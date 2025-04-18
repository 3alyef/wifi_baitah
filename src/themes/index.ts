import light from "./light";
import dark from "./dark";

export interface ThemeContract {
  background: string;
  surface: string;
  primary: string;
  primaryDark: string;
  text: string;
  textOnPrimary: string;
  shadow: string;
  error: string;
}

export const themes = { light, dark };
export type ThemeType = keyof typeof themes;
