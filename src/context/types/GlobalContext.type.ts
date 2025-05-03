import TypeLocales from "@/i18n/locales/locales.type";
import { Locale } from "@/i18n";
import { ThemeContract, ThemeType } from "@/themes";
import { direction } from "@/styles/globalStyles";

export interface DeveloperFeatures {
  rawData: boolean; // Exibe dados brutos
  debugTools: boolean; // Ferramentas de depuração
  experimental: boolean; // Funcionalidades experimentais
  unsafe: boolean; // Operações potencialmente perigosas
}

export interface GlobalContextInterface {
  themeId: ThemeType;
  theme: ThemeContract;
  toggleTheme: () => void;
  currentLanguage: Locale;
  direction: direction;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Locale>>;
  dictionary: TypeLocales | undefined;
  devConfig: DeveloperFeatures;
  toggleDevFeature: (feature: keyof DeveloperFeatures) => void;
  isDevEnabled: boolean;
}
