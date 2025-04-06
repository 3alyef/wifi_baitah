import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Container: {
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
  },
  PressableContainer: {
    backgroundColor: "#263327",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2, // sombra para Android
    shadowColor: "#000", // sombra para iOS
    shadowOffset: { width: 0, height: 2 }, // mesmo efeito do elevation só que no ios
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  Pressed: {
    opacity: 0.7,
  },
  Text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
