import { useGlobalContext } from "@/context/GlobalContext";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import TitleLabel from "../TitleLabel";
import { Section } from "@/components";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import createStyle from "./style";
import DataUpper from "../DataUpper";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import StatisticsText, { TypeStatisticsText } from "./StatisticsText";
export default function DevicesStatistics({ subSectionStyle }: {
	subSectionStyle?: StyleProp<ViewStyle>
}) {
	const { dictionary, theme } = useGlobalContext();
	const size = 32.5;
	const styles = createStyle(theme);
	const status = useSelector((state: RootState) => state.status.status);

	function formatBitrate(bitrate: string): TypeStatisticsText {
		if (+bitrate < 1000) {
			return {
				measurement: 'Kbps',
				number: bitrate
			}
		} else {
			const mbps = (+bitrate / 1000).toFixed(1);
			return {
				measurement: 'Mbps',
				number: mbps
			}
		}
	}

	if (!dictionary || !status) return <></>;

	return (
		<Section style={[{
			direction: "ltr",
			rowGap: 15,
		}, styles.deviceStatisticsContainer, subSectionStyle]}>
			<TitleLabel text={dictionary.system.devicesStatistics.Attached_Devices_and_Real_time_Statistics} />
			<DataUpper style={styles.iconsContainer}>
				<View style={[styles.iconContainer, {
					alignItems: "center",
				}]}>
					<StatisticsText color={theme.loadingProgress} text={{
						number: status.deviceStastics.statusOnlineNumber
					}} />

					<MaterialCommunityIcons name="account-group" size={size} style={styles.icon} />
				</View>
				<View style={styles.iconContainer}>
					<StatisticsText text={formatBitrate(status.deviceStastics.statusDownSpeed)} color={theme.connectedGreen} />
					<MaterialCommunityIcons name="download" size={size} style={[styles.icon, styles.speedIcon]} />
				</View>
				<View style={styles.iconContainer}>
					<StatisticsText text={formatBitrate(status.deviceStastics.statusUpSpeed)} color={theme.error} />
					<MaterialCommunityIcons name="upload" size={size} style={[styles.icon, styles.speedIcon]} />
				</View>
			</DataUpper>
		</Section>
	)
}