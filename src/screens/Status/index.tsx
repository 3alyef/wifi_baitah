
import { useGlobalContext } from "@/context/GlobalContext";
import { ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import createStyle from "./style";
import { Section } from "@/components";
import { InternetConnectionStatus, DevicesStatistics, SystemInfo } from "./components";

export default function Status() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);

	const subSectionStyle: StyleProp<ViewStyle> = {
		elevation: 2
	}

	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.subContainer}>
				<Section>
					<InternetConnectionStatus subSectionStyle={subSectionStyle} />
					<DevicesStatistics subSectionStyle={subSectionStyle} />
				</Section>
				<Section>
					<SystemInfo subSectionStyle={subSectionStyle} />
				</Section>
			</TouchableOpacity>
		</ScrollView>
	)
}