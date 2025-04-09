import { Image, Text, View } from "react-native";
import wifiWhite from "../../assets/wifi-white.png";
import { style } from "./style/style";

interface PropsAppLogo {
	title: string
}

export default function AppLogo({ title }: PropsAppLogo) {
	return (
		<View style={style.Container}>
			<Image source={wifiWhite} style={style.AppLogo} />
			<Text style={[style.Tittle]}>{title}</Text>
		</View>
	)
};