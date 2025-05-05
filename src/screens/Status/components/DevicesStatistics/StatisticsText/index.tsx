import { useGlobalContext } from "@/context/GlobalContext";
import { Text, View } from "react-native";

export interface TypeStatisticsText {
	number: string;
	measurement?: "Kbps" | "Mbps";
}

export default function StatisticsText({ text, color }: {
	text: TypeStatisticsText,
	color: string
}) {
	const { theme } = useGlobalContext();
	return (
		<View style={text.measurement && {
			minWidth: 85,
			//backgroundColor: "green",
			direction: "rtl"
		}}>
			<Text style={
				{
					color,
					fontSize: 25,
					fontWeight: 500
				}
			}>
				{text.number}
				<Text style={
					{
						color: theme.text,
						fontSize: 12,
						fontWeight: 400
					}
				}>
					{text.measurement}
				</Text>
			</Text>
		</View>

	)
}