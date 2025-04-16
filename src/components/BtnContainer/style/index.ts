import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    BtnContainer: {
      backgroundColor: theme.primary + "22",
      padding: 4,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      margin: 2,
    },
  });
}
