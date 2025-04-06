import { Image, Text } from "react-native";
import wifiWhite from "../../assets/wifi-white.png";
import { styles } from "./style/style";
export default function AppLogo() {
	return (
		<>
			<Image source={wifiWhite} style={styles.AppLogo} />
			<Text style={styles.Tittle}>Wi-Fi Baitah</Text>
		</>
	)
};