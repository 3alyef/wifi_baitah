import TypeLocales from "@/i18n/locales/locales.type";
import { Locale } from "@/i18n";
import { ThemeContract, ThemeType } from "@/themes";

export interface GlobalContextInterface {
  themeId: ThemeType;
  theme: ThemeContract;
  toggleTheme: () => void;
  currentLanguage: Locale;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Locale>>;
  dictionary: TypeLocales | undefined;
}
