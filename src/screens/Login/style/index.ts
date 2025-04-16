import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    Container: {
      backgroundColor: theme.background,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    Content: {
      width: "75%",
      alignItems: "center",
      gap: 20,
    },
  });
}
