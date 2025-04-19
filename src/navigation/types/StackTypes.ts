import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
};

export type RootDrawerParamList = {
  Status: undefined;
};


export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

export type RootDrawerNavigation = DrawerNavigationProp<RootDrawerParamList>;