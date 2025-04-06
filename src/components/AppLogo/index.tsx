import { Image, Text, View } from "react-native";
import wifiWhite from "../../assets/wifi-white.png";
import { style } from "./style/style";
export default function AppLogo() {
	return (
		<View style={style.Container}>
			<Image source={wifiWhite} style={style.AppLogo} />
			<Text style={style.Tittle}>Wi-Fi Baitah</Text>
		</View>
	)
};