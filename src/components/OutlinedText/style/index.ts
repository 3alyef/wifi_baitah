import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    centeredText: {
      position: "absolute",
      left: 0,
      right: 0,
      textAlign: "center",
      fontFamily: "ScheherazadeNew-Medium",
    },
  });
}
