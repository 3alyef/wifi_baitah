import { ThemeContract } from "@/themes";
import { StatusBar, StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    scroll: {
      backgroundColor: theme.surface,
    },
    sectionOne: {
      paddingTop: StatusBar.currentHeight,
      paddingHorizontal: 5,
      flexDirection: "row",
      direction: "ltr",
      backgroundColor: theme.primaryDark,
      minHeight: "25%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    themeToggleContainer: {
      height: "100%",
    },
    label: {
      color: theme.text,
      fontSize: 16,
    },
    icon: {
      color: theme.text,
    },
  });
}
