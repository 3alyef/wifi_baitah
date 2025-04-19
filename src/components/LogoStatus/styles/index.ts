import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract, size: number) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    logoImg: {
      resizeMode: "contain",
      height: size,
      width: size,
      tintColor: theme.connectedGreen,
    },
  });
}
