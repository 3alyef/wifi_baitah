import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    scroll: {
      backgroundColor: theme.surface,
    },
    sectionOne: {
      backgroundColor: theme.primaryDark,
      minHeight: "25%",
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
