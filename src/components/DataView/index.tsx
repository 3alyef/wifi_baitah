import { useAppSelector } from "@/app/hooks";
import { Text, View } from "react-native";

export default function DataView() {
	const authState = useAppSelector((state) => state.auth);
	return (
		<View style={{ direction: 'ltr' }}>
			<Text style={{ color: 'white' }}>
				Logged: {authState.isLoggedIn ? 'true' : 'false'}
			</Text>
			<Text style={{ color: 'white' }}>
				Loading: {authState.isLoading ? 'true' : 'false'}
			</Text>
			<Text style={{ color: 'white' }}>
				Error: {authState.error}
			</Text>
		</View>
	)
}