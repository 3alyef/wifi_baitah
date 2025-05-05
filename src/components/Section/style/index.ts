import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.surfaceAlt,
      borderRadius: Math.PI,
      padding: Math.PI * Math.PI,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5, // para Android
      rowGap: 20,
    },
  });
}
