import { useGlobalContext } from "@/context/GlobalContext";
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import createStyle from "./style";
import LogoIcons from "./LogoIcons";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import { SystemStatusCode } from "@/i18n/locales/types/system.type";
import TitleLabel from "../TitleLabel";
import { Section } from "@/components";
import DataUpper from "../DataUpper";

export default function InternetConnectionStatus({ subSectionStyle }: {
	subSectionStyle?: StyleProp<ViewStyle>
}) {
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

	const styles = createStyle(theme);

	if (!dictionary || !connectMsg) return <></>


	const { system } = dictionary;
	return (
		<Section style={[{
			direction: "ltr",
			rowGap: 15,
		}, subSectionStyle]}>
			<TitleLabel text={system.internetConnectionStatus.Internet_Connection_Status} />
			<LogoIcons size={size} colorStatus={colorStatus(connectStatus)} connectMsg={connectMsg} />
			<DataUpper>
				<Text style={styles.statusLabel}>
					{system.internetConnectionStatus.Connection_Status}:
				</Text>
				<Text style={[
					styles.statusValue,
					{ color: colorStatus(connectStatus) }
				]}>
					{system.statusMsg[connectMsg]}
				</Text>
			</DataUpper>
		</Section>
	)
}