import { Button, Image, Pressable, Text, View } from "react-native";
import wifiWhite from "../../assets/wifi-white.png";
import { style } from "./style/style";
import { useGlobalContext } from "@/context/GlobalContext";

interface PropsAppLogo {
	title: string
}

export default function AppLogo({ title }: PropsAppLogo) {
	const { themeId, theme, toggleTheme } = useGlobalContext();

	return (
		<View style={style.Container}>
			<Image source={wifiWhite} style={style.AppLogo} />
			<Text style={[style.Tittle]}>{title}</Text>
			<Button color={theme.primaryDark} title={themeId} onPress={toggleTheme} />
		</View>
	)
};