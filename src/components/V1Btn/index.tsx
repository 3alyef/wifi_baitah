import { GestureResponderEvent, Pressable, Text, View } from "react-native";
import { createStyle } from "./style/style";
import { useGlobalContext } from "@/context/GlobalContext";

interface PropsV1Btn {
	text: string;
	handlePress: (event: GestureResponderEvent) => void
}

export default function V1Btn({ text, handlePress }: PropsV1Btn) {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<View style={styles.Container}>
			<Pressable style={({ pressed }) => [
				styles.PressableContainer,
				pressed && styles.Pressed
			]}
				onPress={handlePress}>
				<Text style={styles.Text}>
					{text}
				</Text>
			</Pressable>
		</View>
	);
}
