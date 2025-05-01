import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { RootStackParamList } from "./types/StackTypes";
import { Keyboard, Pressable } from "react-native";
import { useGlobalContext } from "@/context/GlobalContext";
import createGlobalStyle from "@/styles/globalStyles";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
	const { theme, direction } = useGlobalContext();
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

	const globalStyle = createGlobalStyle(theme, direction);
	return (
		<Pressable onPress={Keyboard.dismiss} style={globalStyle.appBackground}>
			<NavigationContainer>
				{isLoggedIn ? <DrawerNavigator /> : (
					<Stack.Navigator initialRouteName={"Login"}>
						<Stack.Screen
							name="Login"
							component={Login}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				)}
			</NavigationContainer>
		</Pressable>
	);
}