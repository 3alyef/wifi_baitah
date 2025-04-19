import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export function createStyle(
  theme: ThemeContract,
  paddingStatusBar: number | undefined
) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      direction: "ltr",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.surface,
      paddingHorizontal: 16,
      paddingTop: paddingStatusBar ? 12 + paddingStatusBar : 12,
      paddingBottom: 12,
      minHeight: 72,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
    },
    titleContainer: {},
    title: {
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
