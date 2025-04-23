import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useGlobalContext } from "@/context/GlobalContext";
import { View } from "react-native";
import createStyle from "./styles";
import { useEffect, useState } from "react";

interface PropsLogoStatus {
	size: number
}

export default function LogoIcons({ size }: PropsLogoStatus) {

	const { theme } = useGlobalContext();

	const [iconSubChainLeftColor, setIconSubChainLeftColor] = useState(theme.background);
	const [iconChainCenterColor, setIconChainCenterColor] = useState(theme.background);
	const [iconSubChainRightColor, setIconSubChainRightColor] = useState(theme.background);

	const styles = createStyle(theme, size, {
		iconChainCenterColor,
		iconSubChainLeftColor,
		iconSubChainRightColor
	});

	function charging(timer: number, firstTime: boolean) {
		function charge(timer: number) {
			setIconSubChainLeftColor(theme.connectedGreen);
			setTimeout(() => {
				setIconSubChainLeftColor(theme.background);
				setIconChainCenterColor(theme.connectedGreen);

				setTimeout(() => {
					setIconChainCenterColor(theme.background);
					setIconSubChainRightColor(theme.connectedGreen);

					setTimeout(() => {
						setIconSubChainRightColor(theme.background);
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

	/*useEffect(() => {
		const timer = 500;
		let firstTime = true;
		const intervalId = setInterval(() => {
			charging(timer, firstTime);
			firstTime = false;
		}, timer * 4); // chama charging a cada 1.5s

		return () => clearInterval(intervalId);
	}, []);*/
	return (
		<View style={styles.statusContainer}>
			<View style={styles.iconContainer}>
				<MaterialIcons name="devices" size={size} style={styles.icon} />
			</View>

			<View style={styles.chainContainer}>

				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainLeft, styles.iconSubChain]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconChainCenter]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainRight, styles.iconSubChain]} />
			</View>

			<View style={styles.iconContainer}>
				<MaterialCommunityIcons name="router-wireless" size={size} style={styles.icon} />
			</View>

			<View style={styles.chainContainer}>
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainLeft, styles.iconSubChain]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconChainCenter]} />
				<FontAwesome name="chain" size={size / 2} style={[styles.icon, styles.iconChain, styles.iconSubChainRight, styles.iconSubChain]} />
			</View>

			<View style={styles.iconContainer}>
				<Fontisto name="world" size={size} style={styles.icon} />
			</View>

		</View>
	)
}

