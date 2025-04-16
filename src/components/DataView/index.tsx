import { useAppSelector } from "@/app/hooks";
import { Text, View } from "react-native";

export default function DataView() {
	const routerState = useAppSelector((state) => state.router);
	return (
		<View style={{ direction: 'ltr' }}>
			<Text style={{ color: 'white' }}>
				BaseURL: {routerState.baseURL}
			</Text>
			<Text style={{ color: 'white' }}>
				Cookie: {`{
					${routerState.cookie}
					}`}
			</Text>
			<Text style={{ color: 'white' }}>
				Logged: {routerState.isLoggedIn ? 'true' : 'false'}
			</Text>
			<Text style={{ color: 'white' }}>
				Loading: {routerState.isLoading ? 'true' : 'false'}
			</Text>
			<Text style={{ color: 'white' }}>
				Error: {routerState.error}
			</Text>
		</View>
	)
}