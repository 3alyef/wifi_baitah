import { StyleSheet } from "react-native";
import { ThemeContract } from "../../../themes/index";
import { direction } from "../../../styles/globalStyles";

export function createStyle(theme: ThemeContract) {
  return StyleSheet.create({
    container: {
      width: "100%",
    },
    subContainer: {
      backgroundColor: theme.surface,
      borderColor: theme.primary,
      borderWidth: 1.2,
      padding: 4,
      borderRadius: 7,
      flexDirection: "row",
      direction: "ltr",
      alignItems: "center",
      width: "100%",
      gap: 4,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 2,
    },
    eyeContainer: {
      flexDirection: "row",
      alignItems: "center",
      height: "100%",
    },
    eyeView: {
      width: 1,
      height: "80%",
      backgroundColor: theme.primaryDark + "22",
      marginLeft: 2,
      marginRight: 2,
      alignSelf: "center",
    },
    passwordContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    password: {
      fontSize: 15,
      fontWeight: 400,
      color: theme.text,
      flex: 1,
    },
    clearIcon: {
      color: theme.primaryDark,
    },
    informationContainer: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 2,
    },
  });
}
