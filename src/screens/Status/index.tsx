
import { useGlobalContext } from "@/context/GlobalContext";
import { Text, View } from "react-native";
import createStyle from "./style";
import { Section } from "@/components";
import { InternetConnectionStatus } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export default function Status() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	const status = useSelector((state: RootState) => state.status.status);

	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<Section>
					<InternetConnectionStatus />
				</Section>
				<Section>

					<Text style={{ color: theme.text }}>
						====================================
					</Text>
					<Text style={{ color: theme.text }}>
						Device Stastics
					</Text>
					{status &&
						Object.entries(status.deviceStastics).map(([key, value]) => (
							<Text key={key} style={{ color: theme.text }}>
								{key} : {value}
							</Text>
						))
					}

					<Text style={{ color: theme.text }}>
						====================================
					</Text>
				</Section>
			</View>
		</View>
	)
}