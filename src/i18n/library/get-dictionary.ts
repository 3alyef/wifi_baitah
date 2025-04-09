import { Locale } from ".."; // deve ser 'en' | 'pt' | 'he' (por exemplo)
import TypeLocales from "../locales/locales.type"; // deve ser o tipo da estrutura do JSON de tradução

// Mapeamento de idiomas para funções que importam o JSON correspondente
const dictionaries = {
  en: () =>
    import("../locales/en/translation.json").then((module) => module.default),
  pt: () =>
    import("../locales/pt/translation.json").then((module) => module.default),
  he: () =>
    import("../locales/he/translation.json").then((module) => module.default),
};

// Função para pegar a tradução conforme o locale
export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
