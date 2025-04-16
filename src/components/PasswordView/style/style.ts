import { StyleSheet } from "react-native";
import { ThemeContract } from "../../../themes/index";

export function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    Container: {
      backgroundColor: theme.surface,
      borderColor: theme.primary,
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
      backgroundColor: theme.shadow + "22",
      marginLeft: 2,
      marginRight: 2,
      alignSelf: "center",
    },
    PasswordContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    Password: {
      fontSize: 15,
      fontWeight: 400,
      color: theme.text,
      flex: 1,
    },
    ClearButton: {
      backgroundColor: theme.primary + "22",
      padding: 4,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      margin: 2,
    },
    ClearIcon: {
      color: theme.primaryDark,
    },
  });
}
