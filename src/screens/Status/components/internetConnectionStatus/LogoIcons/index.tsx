import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useGlobalContext } from "@/context/GlobalContext";
import { View } from "react-native";
import createStyle from "./styles";

interface PropsLogoStatus {
	size: number
}

export default function LogoIcons({ size }: PropsLogoStatus) {

	const { theme } = useGlobalContext();
	const styles = createStyle(theme, size);


	return (
		<View style={styles.statusContainer}>
			<View style={styles.iconContainer}>
				<MaterialIcons name="devices" size={size} style={styles.icon} />
			</View>

			<View style={styles.chainContainer}>
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainRight, styles.iconSubChain]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconChainCenter]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainLeft, styles.iconSubChain]} />
			</View>

			<View style={styles.iconContainer}>
				<MaterialCommunityIcons name="router-wireless" size={size} style={styles.icon} />
			</View>

			<View style={styles.chainContainer}>
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainRight, styles.iconSubChain]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconChainCenter]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainLeft, styles.iconSubChain]} />
			</View>

			<View style={styles.iconContainer}>
				<Fontisto name="world" size={size} style={styles.icon} />
			</View>

		</View>
	)
}

