import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useGlobalContext } from "@/context/GlobalContext";
import { View } from "react-native";
import createStyle from "./styles";
import { useEffect, useState } from "react";
import { SystemStatusCode } from "@/i18n/locales/types/system.type";
import decryptStatusMsg, { TypeStatusMsg } from "@/services/intelbras.utils/decryptStatusMsg";

interface PropsLogoStatus {
	size: number;
	colorStatus: string;
	connectMsg: SystemStatusCode
}

export default function LogoIcons({ size, colorStatus, connectMsg }: PropsLogoStatus) {

	const { theme } = useGlobalContext();

	const [chargeLeftSec1, setChargeLeftSec1] = useState(theme.background);
	const [chargeLeftSec2, setChargeLeftSec2] = useState(theme.background);
	const [chargeRightSec1, setChargeRightSec1] = useState(theme.background);
	const [chargeRightSec2, setChargeRightSec2] = useState(theme.background);
	const [chargeCenterSec1, setChargeCenterSec1] = useState(theme.background);
	const [chargeCenterSec2, setChargeCenterSec2] = useState(theme.background);

	const styles = createStyle(theme, size);

	function charging(timer: number, firstTime: boolean) {
		function charge(timer: number) {
			setChargeLeftSec2(theme.loadingProgress);
			setTimeout(() => {
				setChargeLeftSec2(theme.background);
				setChargeCenterSec2(theme.loadingProgress);

				setTimeout(() => {
					setChargeCenterSec2(theme.background);
					setChargeRightSec2(theme.loadingProgress);

					setTimeout(() => {
						setChargeRightSec2(theme.background);
					}, timer);
				}, timer);
			}, timer);
		}

		if (firstTime) {
			charge(timer)
		} else {
			setTimeout(() => {
				charge(timer)
			}, timer * 3)
		}
	}

	useEffect(() => {
		let typeStatusMsg: TypeStatusMsg = decryptStatusMsg(connectMsg);
		let intervalId: number;
		if (typeStatusMsg === "connecting") {
			setChargeLeftSec1(theme.connectedGreen);
			setChargeCenterSec1(theme.connectedGreen);
			setChargeRightSec1(theme.connectedGreen);
			const timer = 500;
			let firstTime = true;
			intervalId = setInterval(() => {
				charging(timer, firstTime);
				firstTime = false;
			}, timer * 4); // chama charging a cada 1.5s


		} else if (typeStatusMsg == "connected") {
			setChargeLeftSec1(theme.connectedGreen);
			setChargeCenterSec1(theme.connectedGreen);
			setChargeRightSec1(theme.connectedGreen);
			setChargeLeftSec2(theme.connectedGreen);
			setChargeCenterSec2(theme.connectedGreen);
			setChargeRightSec2(theme.connectedGreen);
		} else if (typeStatusMsg == "user problem") {
			setChargeLeftSec1(theme.error);
			setChargeCenterSec1(theme.error);
			setChargeRightSec1(theme.error);
			setChargeLeftSec2(theme.background);
			setChargeCenterSec2(theme.background);
			setChargeRightSec2(theme.background);
		} else if (typeStatusMsg == "hardware problem" || typeStatusMsg == "software problem") {
			setChargeLeftSec1(theme.connectedGreen);
			setChargeCenterSec1(theme.connectedGreen);
			setChargeRightSec1(theme.connectedGreen);
			setChargeLeftSec2(theme.error);
			setChargeCenterSec2(theme.error);
			setChargeRightSec2(theme.error);
		}
		return () => clearInterval(intervalId);
	}, [connectMsg]);


	return (
		<View style={styles.statusContainer}>
			<View style={styles.iconContainer}>
				<MaterialIcons name="devices" size={size} style={styles.icon} />
			</View>

			<View style={styles.chainContainer}>

				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainLeft, styles.iconSubChain, {
					color: chargeLeftSec1
				}]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconChainCenter, {
					color: chargeCenterSec1
				}]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainRight, styles.iconSubChain, {
					color: chargeRightSec1
				}]} />
			</View>

			<View style={styles.iconContainer}>
				<MaterialCommunityIcons name="router-wireless" size={size} style={styles.icon} />
			</View>

			<View style={styles.chainContainer}>
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainLeft, styles.iconSubChain, {
					color: chargeLeftSec2
				}]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconChainCenter, {
					color: chargeCenterSec2
				}]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainRight, styles.iconSubChain, {
					color: chargeRightSec2
				}]} />
			</View>

			<View style={styles.iconContainer}>
				<Fontisto name="world" size={size} style={styles.icon} />
			</View>

		</View>
	)
}

