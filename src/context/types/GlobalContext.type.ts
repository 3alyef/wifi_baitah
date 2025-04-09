import TypeLocales from "@/i18n/locales/locales.type";
import { Locale } from "@/i18n";
import { ThemeType } from "@/themes";

export interface GlobalContextInterface {
  themeId: ThemeType;
  toggleTheme: () => void;
  currentLanguage: Locale;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Locale>>;
  dictionary: TypeLocales | undefined;
}
