import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export type direction = "ltr" | "rtl";

export default function createGlobalStyle(
  theme: ThemeContract,
  direction: direction
) {
  return StyleSheet.create({
    appBackground: {
      flex: 1,
      direction,
    },
  });
}
