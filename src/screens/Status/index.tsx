
import { useGlobalContext } from "@/context/GlobalContext";
import { View } from "react-native";
import createStyle from "./style";

export default function Status() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>

			</View>
		</View>
	)
}