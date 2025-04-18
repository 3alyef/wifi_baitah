export const i18n = {
  defaultLocale: "en",
  locales: ["en", "pt", "he", "zh", "zh-rTW", "ar", "ru", "el", "es"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
