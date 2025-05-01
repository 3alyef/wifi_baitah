
import { useGlobalContext } from "@/context/GlobalContext";
import { Button, Text, View } from "react-native";
import createStyle from "./style";
import { Section } from "@/components";
import { InternetConnectionStatus } from "./components";
import Router from "@/services/router/Router";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export default function Status() {
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	const router = new Router();
	router.init();
	const status = useSelector((state: RootState) => state.status.status);
	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<Section>
					<InternetConnectionStatus />
				</Section>
				<Section>
					<Text>
						Attached Devices and Real-time Statistics
					</Text>
					<Text>
						extendName: {status?.deviceStastics.extendName}
					</Text>
					<Text>
						routerName: {status?.deviceStastics.routerName}
					</Text>
					<Text>
						statusBlackNum: {status?.deviceStastics.statusBlackNum}
					</Text>
					<Text>
						statusDownSpeed: {status?.deviceStastics.statusDownSpeed}
					</Text>
					<Text>
						statusOnlineNumber: {status?.deviceStastics.statusOnlineNumber}
					</Text>
					<Text>
						statusUpSpeed: {status?.deviceStastics.statusUpSpeed}
					</Text>
					<Text>
						wifiRate: {status?.deviceStastics.wifiRate}
					</Text>
				</Section>
			</View>
		</View>
	)
}