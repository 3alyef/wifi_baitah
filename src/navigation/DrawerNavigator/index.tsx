import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../types/StackTypes";
import { Status } from "@/screens";
import { CustomDrawerContent, Header } from "@/components";
import { useGlobalContext } from "@/context/GlobalContext";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerNavigator() {
	const { direction } = useGlobalContext();
	return (
		<Drawer.Navigator
			initialRouteName={"Status"}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			screenOptions={{
				header: () => <Header />,
				drawerPosition: "left",
				sceneStyle: {
					flex: 1,
					direction: direction,
				}
			}}>
			<Drawer.Screen
				name="Status"
				component={Status}

			/>
		</Drawer.Navigator >
	)
}

/*
screenOptions={{
	headerShown: false,
}}
*/