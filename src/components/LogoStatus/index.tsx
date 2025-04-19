import { Image, Text, View } from "react-native";
import wifiWhite from "../../assets/wifi-white.png";
import { useGlobalContext } from "@/context/GlobalContext";
import createStyle from "./styles";

interface PropsLogo {
	size: number
}
export default function LogoStatus({ size }: PropsLogo) {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme, size);
	return (
		<View style={styles.container}>
			<Image source={wifiWhite} style={styles.logoImg} />
			<Text>Connected</Text>
		</View>
	)
}