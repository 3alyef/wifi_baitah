
import { useGlobalContext } from "@/context/GlobalContext";
import { Text, View } from "react-native";
import createStyle from "./style";
import { Section } from "@/components";
import { InternetConnectionStatus } from "./components";

export default function Status() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<Section>
					<InternetConnectionStatus />
				</Section>
				<Section>
					<Text>
						Attached Devices and Real-time Statistics
					</Text>
				</Section>
			</View>
		</View>
	)
}