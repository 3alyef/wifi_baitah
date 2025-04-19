import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
    icon: {
      color: theme.textOnPrimary,
    },
  });
}
