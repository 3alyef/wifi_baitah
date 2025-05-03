import { ThemeContract } from "@/themes";
import { StatusBar, StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    scroll: {
      backgroundColor: theme.surface,
      flex: 1,
      //justifyContent: 'center'
    },
    scrollContent: {},
    dataViewContainer: {},
    sectionOne: {
      paddingTop: StatusBar.currentHeight,
      paddingHorizontal: 5,
      flexDirection: "row",
      direction: "ltr",
      backgroundColor: theme.primaryDark,
      minHeight: 220,
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
