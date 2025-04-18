import TypeLocales from "@/i18n/locales/locales.type";
import { Locale } from "@/i18n";
import { ThemeContract, ThemeType } from "@/themes";
import { direction } from "@/styles/globalStyles";

export interface GlobalContextInterface {
  themeId: ThemeType;
  theme: ThemeContract;
  toggleTheme: () => void;
  currentLanguage: Locale;
  direction: direction;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Locale>>;
  dictionary: TypeLocales | undefined;
}
