import { direction } from "@/styles/globalStyles";
import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(
  theme: ThemeContract,
  direction: direction
) {
  return StyleSheet.create({
    container: {
      direction: "ltr",
      rowGap: 15,
    },
    statusContainer: {
      direction: direction,
      backgroundColor: theme.surface + 11,
      flexDirection: "column",
      padding: 5,
    },
    statusLabel: {
      fontSize: 14,
      color: theme.text,
      opacity: 0.8,
      marginBottom: 2,
    },
    statusValue: {
      fontSize: 16,
      fontWeight: "600",
    },
  });
}
