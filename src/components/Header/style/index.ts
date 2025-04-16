import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      direction: "ltr",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.surface,
      paddingHorizontal: 16,
      paddingVertical: 12,
      minHeight: 72,
      position: "relative",
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
    },
    title: {
      position: "absolute",
      left: "50%",
      transform: [{ translateX: -50 }],
      color: theme.text,
      fontSize: 20,
      fontWeight: "700",
      letterSpacing: 1,
    },
    icon: {
      color: theme.primary,
    },
  });
}
