import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../types/StackTypes";
import { Status } from "@/screens";
import { CustomDrawerContent, Header } from "@/components";
import { useGlobalContext } from "@/context/GlobalContext";
import createStyle from "@/components/CustomDrawerContent/style";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerNavigator() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<Drawer.Navigator
			initialRouteName={"Status"}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			screenOptions={{
				header: () => <Header />,
				drawerPosition: "left",
				//drawerStyle: styles.container
			}}>
			<Drawer.Screen
				name="Status"
				component={Status}

			/>
		</Drawer.Navigator>
	)
}

/*
screenOptions={{
				headerShown: false,
			}}
 */