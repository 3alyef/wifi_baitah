import { useGlobalContext } from "@/context/GlobalContext";
import { RootDrawerNavigation } from "@/navigation/types/StackTypes";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import createStyle from "./style";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import SunMoonToggle from "../SunMoonToggle";

import { LogoStatus, DataView } from "@/components";
import { useState } from "react";

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
	const navigation = useNavigation<RootDrawerNavigation>();
	const { theme, toggleTheme } = useGlobalContext();
	const styles = createStyle(theme);

	return (
		<ScrollView
			{...props}
			style={styles.scroll}
			contentContainerStyle={styles.scrollContent}
			keyboardShouldPersistTaps="handled">
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

			<TouchableOpacity
				activeOpacity={1}
				style={styles.dataViewContainer}>
				<DataView />
			</TouchableOpacity>
		</ScrollView>
	)
}