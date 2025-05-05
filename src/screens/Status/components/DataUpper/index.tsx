import { useGlobalContext } from "@/context/GlobalContext"
import React from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"

export default function DataUpper({ children, style }: {
	children: React.ReactNode,
	style?: StyleProp<ViewStyle>
}) {
	const { theme, direction } = useGlobalContext();
	return (
		<TouchableOpacity
			activeOpacity={0.95}>
			<View style={[{
				direction: direction,
				backgroundColor: theme.surface + 11,
				flexDirection: "column",
				padding: 5
			}, style]}>
				{children}
			</View>
		</TouchableOpacity>
	)
}