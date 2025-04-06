import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Container: {
    //backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 1,
    borderRadius: 2,
    flexDirection: "row",
    direction: "ltr",
    alignItems: "center",
    width: "100%",
    gap: 2,
  },
  EyeContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  Eye: {
    padding: 4,
  },
  EyeView: {
    width: 1,
    height: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginLeft: 2,
    marginRight: 2,
    alignSelf: "center",
  },
  PasswordContainer: {
    flex: 1,
  },
  Password: {
    fontSize: 15,
    fontWeight: 400,
    color: "white",
  },
});
