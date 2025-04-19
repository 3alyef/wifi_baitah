import { DataView } from "@/components";
import { useGlobalContext } from "@/context/GlobalContext";
import { View } from "react-native";
import createStyle from "./style";

export default function Status() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<View style={styles.container}>
			<View style={{ backgroundColor: "black" }}>
				<DataView />
			</View>
		</View>
	)
}