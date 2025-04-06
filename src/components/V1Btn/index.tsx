import { GestureResponderEvent, Pressable, Text, View } from "react-native";
import { style } from "./style/style";

interface PropsV1Btn {
	text: string;
	handlePress: (event: GestureResponderEvent) => void
}

export default function V1Btn({ text, handlePress }: PropsV1Btn) {
	return (
		<View style={style.Container}>
			<Pressable style={({ pressed }) => [
				style.PressableContainer,
				pressed && style.Pressed
			]}
				onPress={handlePress}>
				<Text style={style.Text}>
					{text}
				</Text>
			</Pressable>
		</View>
	);
}
