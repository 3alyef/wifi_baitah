import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Status: undefined;
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
