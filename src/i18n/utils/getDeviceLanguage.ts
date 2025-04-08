import * as RNLocalize from "react-native-localize";

export default function getDeviceLanguage(): Readonly<{
  languageCode: string;
  scriptCode?: string;
  countryCode: string;
  languageTag: string;
  isRTL: boolean;
}>[] {
  return RNLocalize.getLocales();
}
