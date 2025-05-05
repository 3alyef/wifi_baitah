import { direction } from "@/styles/globalStyles";
import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(
  theme: ThemeContract,
) {
  return StyleSheet.create({
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
