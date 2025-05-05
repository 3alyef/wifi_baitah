import { useGlobalContext } from "@/context/GlobalContext";
import { StyleProp, Text, TextStyle, View } from "react-native";

export default function InfoLabel({ style, content: { label, value } }: {
	content: {
		label: string;
		value: string;
	},
	style?: StyleProp<TextStyle>
}) {
	const { theme } = useGlobalContext();
	return (
		<View style={{
			flexDirection: "row",
			justifyContent: 'space-between'
		}}>
			<Text style={{
				color: theme.text,
				flex: 1,
				fontWeight: 500
			}}>
				{label}:

			</Text>
			<Text style={{
				color: theme.text,
				flex: 1
			}}>
				{value}
			</Text>
		</View>
	)
}