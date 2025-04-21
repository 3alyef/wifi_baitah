import { useGlobalContext } from "@/context/GlobalContext";
import { Text, View } from "react-native";
import createStyle from "./style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function InternetConnectionStatus() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	const size = 50;
	return (
		<View style={styles.container}>
			<View style={styles.statusContainer}>
				<MaterialIcons name="devices" size={size} style={styles.icon} />
				<MaterialCommunityIcons name="router-wireless" size={size} style={styles.icon} />
				<Fontisto name="world" size={size} style={styles.icon} />
			</View>
			<View>
				<Text>
					Connection Status: You can surf the Internet
				</Text>
			</View>
		</View>
	)
}