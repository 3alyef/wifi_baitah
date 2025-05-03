import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import wifiWhite from "../../assets/wifi-white.png";
import { useGlobalContext } from "@/context/GlobalContext";
import createStyle from "./styles";

interface PropsLogo {
	size: number
}
export default function LogoStatus({ size }: PropsLogo) {
	const { theme, toggleDevFeature } = useGlobalContext();
	const styles = createStyle(theme, size);
	return (
		<View style={styles.container}>
			<TouchableOpacity
				activeOpacity={0.95} onLongPress={() => toggleDevFeature("rawData")}>
				<Image source={wifiWhite} style={styles.logoImg} />
			</TouchableOpacity>

			<Text>Connected</Text>
		</View>
	)
}