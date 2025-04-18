import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Status, Login } from "../screens";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { RootStackParamList } from "./types/StackTypes";
import { Header } from "@/components/index";
import { Keyboard, Pressable } from "react-native";
import { useGlobalContext } from "@/context/GlobalContext";
import createGlobalStyle from "@/styles/globalStyles";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
	const { theme, direction } = useGlobalContext();
	const isLoggedIn = useSelector((state: RootState) => state.router.isLoggedIn);


	const globalStyle = createGlobalStyle(theme, direction);
	return (
		<NavigationContainer>
			<Pressable onPress={Keyboard.dismiss} style={globalStyle.appBackground}>
				{isLoggedIn && <Header />}<Stack.Navigator initialRouteName={"Login"}>
					{isLoggedIn ? (
						<>
							<Stack.Screen
								name="Status"
								component={Status}
								options={{
									headerShown: false
								}}
							/>
						</>
					) : <Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>}
				</Stack.Navigator>
			</Pressable>
		</NavigationContainer>
	);
}