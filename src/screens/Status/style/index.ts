import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      /*paddingVertical: 10,*/ padding: 10,
    },
    subContainer: {
      flex: 1,
      backgroundColor: theme.surfaceAlt + 10,
      borderRadius: Math.PI * Math.PI,
      padding: 12,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      //elevation: 5, // para Android
      rowGap: 5,
    },
  });
}
