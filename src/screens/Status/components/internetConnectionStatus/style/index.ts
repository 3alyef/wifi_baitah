import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    container: {
      direction: "ltr",
    },
    statusContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    icon: {
      color: theme.primary,
    },
  });
}
