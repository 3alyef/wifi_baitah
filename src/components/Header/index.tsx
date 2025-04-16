import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStyle } from "./style";
import { useGlobalContext } from "@/context/GlobalContext";
import { useAppDispatch } from "@/app/hooks";
import { routerLoginThunk } from "@/features/router/thunks";

export default function Header() {
	const { dictionary, theme } = useGlobalContext();


	if (!dictionary) return null;

	const styles = createStyle(theme);
	const dispatch = useAppDispatch();
	return (
		<View style={styles.container}>
			<Icon name="menu" size={30} style={styles.icon} />
			<Text style={styles.title}>{dictionary.global.wifi_habaitah}</Text>
			<Pressable onPress={() => dispatch(routerLoginThunk('oi'))}>
				<Icon name="lock-open-outline" size={25} style={styles.icon} />
			</Pressable>
		</View>
	);
}
