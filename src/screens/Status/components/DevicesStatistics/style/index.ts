import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

export default function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    deviceStatisticsContainer: {
      columnGap: 7,
    },
    iconsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 5,
    },
    iconContainer: {
      alignItems: "flex-end",
      justifyContent: "center",
    },
    icon: {
      color: theme.primary,
    },
    speedIcon: {
      paddingRight: 7,
    },
  });
}
