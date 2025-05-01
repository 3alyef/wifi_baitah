import { StatusBar, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStyle } from "./style";
import { useGlobalContext } from "@/context/GlobalContext";
import { useAppDispatch } from "@/app/hooks";
import PressableContainer from "../PressableContainer";
import { logout } from "@/features/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
import { RootDrawerNavigation } from "@/navigation/types/StackTypes";


export default function Header() {
	const { dictionary, theme } = useGlobalContext();



	const navigation = useNavigation<RootDrawerNavigation>();
	const styles = createStyle(theme, StatusBar.currentHeight);
	const dispatch = useAppDispatch();
	if (!dictionary) return null;
	return (
		<View style={styles.container}>
			<PressableContainer onPress={() => navigation.openDrawer()}>
				<Icon name="menu" size={30} style={styles.icon} />
			</PressableContainer>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{dictionary.global.wifi_habaitah}</Text>
			</View>
			<PressableContainer onPress={() => dispatch(logout())}>
				<Icon name="lock-open-outline" size={25} style={styles.icon} />
			</PressableContainer>
		</View>
	);
}
