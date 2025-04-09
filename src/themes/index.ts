import light from "./light";
import dark from "./dark";

export interface ThemeContract {
  background: string;
  text: string;
  primary: string;
}

export const themes = { light, dark };
export type ThemeType = keyof typeof themes;
