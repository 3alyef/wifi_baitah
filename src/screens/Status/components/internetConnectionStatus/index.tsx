import { useGlobalContext } from "@/context/GlobalContext";
import { Text, TouchableOpacity, View } from "react-native";
import createStyle from "./style";
import LogoIcons from "./LogoIcons";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import { SystemStatusCode } from "@/i18n/locales/types/system.type";

export default function InternetConnectionStatus() {
	const { theme, dictionary, direction } = useGlobalContext();

	const [connectStatus, setConnectStatus] = useState('2');

	function colorStatus(cnStatus: string) {
		if (+cnStatus == 3) {
			return theme.connectedGreen;
		} else if (+cnStatus == 2) {
			return theme.loadingProgress;
		} else {
			return theme.error;
		}
	}

	const [connectMsg, setConnectMsg] = useState<SystemStatusCode>();
	const size = 45;

	const internetStatus = useSelector((state: RootState) => state.status.status?.internetStatus);

	useEffect(() => {
		if (internetStatus) {
			setConnectStatus(() => internetStatus.wanConnectStatus.slice(1, 2));
			setConnectMsg(() => internetStatus.wanConnectStatus.slice(3, 7) as SystemStatusCode)
		}
	}, [internetStatus]);

	const styles = createStyle(theme, direction);

	if (!dictionary || !connectMsg) return <></>


	const { system } = dictionary;
	return (
		<View style={styles.container}>
			<LogoIcons size={size} colorStatus={colorStatus(connectStatus)} connectMsg={connectMsg} />
			<TouchableOpacity
				activeOpacity={0.95}>
				<View style={styles.statusContainer}>
					<Text style={styles.statusLabel}>
						{system.connectionStatus}:
					</Text>
					<Text style={[
						styles.statusValue,
						{ color: colorStatus(connectStatus) }
					]}>
						{system.statusMsg[connectMsg]}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}