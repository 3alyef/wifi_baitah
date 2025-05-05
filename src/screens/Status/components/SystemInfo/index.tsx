import { Section } from "@/components";
import TitleLabel from "../TitleLabel";
import { useGlobalContext } from "@/context/GlobalContext";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { StyleProp, ViewStyle } from "react-native";
import DataUpper from "../DataUpper";
import InfoLabel from "./InfoLabel";

export default function SystemInfo({ subSectionStyle }: {
	subSectionStyle?: StyleProp<ViewStyle>
}) {
	const { dictionary, theme } = useGlobalContext();
	const status = useSelector((state: RootState) => state.status.status);

	function timeFormat(sec: string) {
		let seconds = +sec;

		let min = Math.floor(seconds / 60);

		seconds = seconds - (min * 60);

		const hours = Math.floor(min / 60);

		min = min - (hours * 60);

		return `${hours}h ${min}m ${seconds}s`

	}
	if (!dictionary || !status) return <></>;

	const { system } = dictionary;
	const { systemInfo } = status;
	return (
		<Section style={[{
			direction: "ltr",
			rowGap: 15,
		}, subSectionStyle]}>
			<TitleLabel text={dictionary.system.systemInfo.System_Info} />
			<DataUpper style={{
				padding: 0
			}}>
				<InfoLabel content={{
					label: system.systemInfo.Connection_Type,
					value: systemInfo.wanType
				}} />
				<InfoLabel content={{
					label: system.systemInfo.Connection_Duration,
					value: timeFormat(systemInfo.wanConnectTime)
				}} />
				<InfoLabel content={{
					label: system.systemInfo.WAN_MAC,
					value: systemInfo.statusWanMAC
				}} />
				<InfoLabel content={{
					label: system.systemInfo.LAN_IP,
					value: systemInfo.statusWanIP
				}} />
				<InfoLabel content={{
					label: system.systemInfo.WAN_IP,
					value: systemInfo.statusWanIP
				}} />
				<InfoLabel content={{
					label: system.systemInfo.Subnet_Mask,
					value: systemInfo.statusWanMask
				}} />
				<InfoLabel content={{
					label: system.systemInfo.Default_Gateway,
					value: systemInfo.statusWanGaterway
				}} />
				<InfoLabel content={{
					label: system.systemInfo.Preferred_DNS_Server,
					value: systemInfo.statusWanDns1
				}} />
				<InfoLabel content={{
					label: system.systemInfo.Alternative_DNS_Server,
					value: systemInfo.statusWanDns2
				}} />
				<InfoLabel content={{
					label: system.systemInfo.Firmware_Version,
					value: systemInfo.softVersion
				}} />
			</DataUpper>
		</Section>
	)
}