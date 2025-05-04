import { useGlobalContext } from "@/context/GlobalContext";
import { RootDrawerNavigation } from "@/navigation/types/StackTypes";
import { DrawerContentComponentProps, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import createStyle from "./style";
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SunMoonToggle from "../SunMoonToggle";

import { LogoStatus, DataView } from "@/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
	const navigation = useNavigation<RootDrawerNavigation>();
	const { theme, toggleTheme, devConfig } = useGlobalContext();
	const styles = createStyle(theme);
	const insets = useSafeAreaInsets();

	const androidNavigationBarHeight = Platform.OS === 'android' ? 48 : 0;
	return (
		<ScrollView
			{...props}
			style={[styles.scroll, {
				paddingBottom: insets.bottom + androidNavigationBarHeight,
			}]}
			contentContainerStyle={[styles.scrollContent, {
				paddingBottom: insets.bottom + androidNavigationBarHeight + 30, // 20
			}]}>

			<TouchableOpacity
				activeOpacity={0.95}
				onPress={() => { }} >
				<View style={styles.sectionOne} >
					<LogoStatus size={125} />
					<View style={styles.themeToggleContainer}>
						<SunMoonToggle onPress={toggleTheme} size={30} />
					</View>
				</View>
			</TouchableOpacity>


			<DrawerItem
				label="Status"
				labelStyle={styles.label}
				icon={({ size }) => {
					return <Icon name="wifi-outline" size={size} style={styles.icon} />
				}}
				onPress={() => navigation.navigate('Status')}
			/>
			{devConfig.rawData &&
				<>
					<View>
						{(() => {
							const statusCode = '13103060';
							const connectStatus = statusCode.slice(1, 2);
							const connectMsg = statusCode.slice(3, 7);
							return (
								<Text style={{ color: theme.text, direction: 'ltr' }}>
									connectStatus: {connectStatus + "\n"}
									connectMsg: {connectMsg}
								</Text>
							);
						})()}
					</View>
					<DataView />
				</>}

		</ScrollView>
	)
}