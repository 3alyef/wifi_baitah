import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export type direction = "ltr" | "rtl";

export default function createGlobalStyle(theme: ThemeContract) {
  return StyleSheet.create({
    appBackground: {
      flex: 1,
    },
  });
}
