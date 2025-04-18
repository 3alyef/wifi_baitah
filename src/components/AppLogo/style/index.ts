import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    appLogo: {
      resizeMode: "contain",
      height: 180,
      width: 180,
      tintColor: theme.primary,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      direction: "ltr",
      columnGap: 7,
    },
    title: {
      //textAlign: 'center',
      //justifyContent: 'center',
      alignItems: "center",
      justifyContent: "center",
      color: theme.primary,
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
}
