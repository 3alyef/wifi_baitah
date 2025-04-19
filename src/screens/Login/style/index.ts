import { ThemeContract } from "@/themes";
import { StatusBar, StyleSheet } from "react-native";

export function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    Container: {
      backgroundColor: theme.background,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderTopWidth: StatusBar.currentHeight,
      borderColor: theme.primaryDark,
    },
    Content: {
      width: "75%",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
    },
  });
}
