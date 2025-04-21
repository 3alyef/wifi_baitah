import { useGlobalContext } from "@/context/GlobalContext";
import { ReactNode } from "react";
import { View } from "react-native";
import createStyle from "./style";

interface PropsSection {
	children: ReactNode
}
export default function Section({ children }: PropsSection) {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<View style={styles.container}>
			{children}
		</View>
	)
}