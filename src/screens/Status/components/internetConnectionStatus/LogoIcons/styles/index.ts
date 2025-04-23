import { ThemeContract } from "@/themes";
import { StyleSheet } from "react-native";

interface PropsIconChainColor {
  iconChainCenterColor: string;
  iconSubChainLeftColor: string;
  iconSubChainRightColor: string;
}

export default function createStyle(
  theme: ThemeContract,
  size: number,
  {
    iconChainCenterColor,
    iconSubChainLeftColor,
    iconSubChainRightColor,
  }: PropsIconChainColor
) {
  return StyleSheet.create({
    statusContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      columnGap: 7,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      color: theme.primary,
    },
    chainContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 2.5,
      direction: "rtl",
    },
    iconChain: {
      transform: [{ rotate: "-45deg" }], // all chain
    },
    iconChainCenter: {
      color: iconChainCenterColor,
      zIndex: 1,
    },
    iconSubChain: {
      position: "absolute",
      zIndex: 0,
    },
    iconSubChainLeft: {
      color: iconSubChainLeftColor,
      left: size / 4 + 1.5,
    },
    iconSubChainRight: {
      color: iconSubChainRightColor,
      right: size / 4 + 1.5,
    },
  });
}
