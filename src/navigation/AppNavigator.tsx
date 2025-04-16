import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Status, Login } from "../screens";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { RootStackParamList } from "./types/StackTypes";
import { Header } from "@/components/index";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
	const isLoggedIn = useSelector((state: RootState) => state.router.isLoggedIn);

	return (
		<NavigationContainer>
			{isLoggedIn && <Header />}
			<Stack.Navigator initialRouteName={"Login"}>
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
		</NavigationContainer>
	);
}