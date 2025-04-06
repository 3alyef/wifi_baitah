import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    padding: 2,
    borderRadius: 2,
    flexDirection: "row",
    direction: "ltr",
    alignItems: "center",
    width: "60%",
    maxWidth: 225,
    gap: 2,
  },
  eye: {
    backgroundColor: "yellow",
    padding: 1,
  },
  PasswordContainer: {
    flex: 1,
  },
  Password: {
    fontSize: 15,
    fontWeight: 500,
  },
});
