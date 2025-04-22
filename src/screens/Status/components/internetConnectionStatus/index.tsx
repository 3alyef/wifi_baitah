import { useGlobalContext } from "@/context/GlobalContext";
import { Text, View } from "react-native";
import createStyle from "./style";
import LogoIcons from "./LogoIcons";

export default function InternetConnectionStatus() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	const size = 48;
	return (
		<View style={styles.container}>
			<LogoIcons size={size} />
			<View>
				<Text>
					Connection Status: You can surf the Internet
				</Text>
			</View>
		</View>
	)
}