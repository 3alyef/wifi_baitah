import { Image, Text, View } from "react-native";
import wifiWhite from "../../assets/wifi-white.png";
import { style } from "./style/style";
import { useAppSelector } from "@/app/hooks";

interface PropsAppLogo {
	title: string
}

export default function AppLogo({ title }: PropsAppLogo) {
	const routerState = useAppSelector((state) => state.router);
	return (
		<View style={style.Container}>
			<Image source={wifiWhite} style={style.AppLogo} />
			<Text style={[style.Tittle]}>{title}</Text>
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
		</View>
	)
};