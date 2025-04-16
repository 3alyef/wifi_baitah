import { DataView } from "@/components";
import { Text, View } from "react-native";

export default function Status() {
	return (
		<View>
			<Text>Home</Text>
			<View style={{ backgroundColor: "black" }}>
				<DataView />
			</View>

		</View>
	)
}