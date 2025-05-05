import { useGlobalContext } from "@/context/GlobalContext";
import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import createStyle from "./style";

interface PropsSection {
	children: ReactNode;
	style?: StyleProp<ViewStyle>
}
export default function Section({ children, style }: PropsSection) {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<View style={[styles.container, style]} >
			{children}
		</View>
	)
}