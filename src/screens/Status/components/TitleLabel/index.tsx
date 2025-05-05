import { useGlobalContext } from "@/context/GlobalContext";
import { Text } from "react-native";

interface PropsTitleLabel {
	text: string
}
export default function TitleLabel({ text }: PropsTitleLabel) {
	const { theme } = useGlobalContext()
	return (
		<Text
			style={{
				fontSize: 14.5,
				fontWeight: "500",
				color: theme.text
			}}>
			{text}
		</Text>
	);
};