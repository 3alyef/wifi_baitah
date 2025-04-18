import { ThemeContract } from "@/themes";
import { Animated, StyleSheet } from "react-native";

function rippleScale(rippleAnim: Animated.Value) {
  return rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2.5], // expande bem
  });
}

function rippleOpacity(rippleAnim: Animated.Value) {
  return rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
}

export default function createStyle(
  theme: ThemeContract,
  rippleAnim: Animated.Value
) {
  return StyleSheet.create({
    container: {
      padding: 7,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      margin: 2,
      overflow: "hidden",
    },
    containerAnimated: {
      backgroundColor: theme.primary + "44",
      borderRadius: 999,
      transform: [{ scale: rippleScale(rippleAnim) }],
      opacity: rippleOpacity(rippleAnim),
    },
  });
}
