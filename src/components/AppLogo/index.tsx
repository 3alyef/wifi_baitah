import { Button, Image, Text, View } from "react-native";
import wifiWhite from "../../assets/wifi-white.png";
import { createStyle } from "./style";
import { useGlobalContext } from "@/context/GlobalContext";
import OutlinedText from "../OutlinedText";

interface PropsAppLogo {
	title: string
}

export default function AppLogo({ title }: PropsAppLogo) {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<View style={styles.container}>
			<Image source={wifiWhite} style={styles.appLogo} />
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					Wi-Fi
				</Text>
				<OutlinedText
					text={title}
					fillColor={theme.background}
					fontSize={31}
					fontWeight="bold"
					strokeColor={theme.primary}
					scale={1.45} />
			</View>
		</View>
	)
};