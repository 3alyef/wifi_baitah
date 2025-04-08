import { Locale } from "..";

const dictionaries = {
  en: () => import("../locale/en.json").then((module) => module.default),
  pt: () => import("../locale/pt.json").then((module) => module.default),
  he: () => import("").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
