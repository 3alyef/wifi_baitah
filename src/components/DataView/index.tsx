import { RootState } from "@/app/store";
import { useGlobalContext } from "@/context/GlobalContext";
import { useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function DataView() {
	const { theme } = useGlobalContext();
	const status = useSelector((state: RootState) => state.status.status);
	const [contentHeight, setContentHeight] = useState(0);

	const renderSection = (title: string, data: Record<string, any>) => (
		<View key={title} style={{ marginBottom: 15 }}>
			<Text style={{ color: theme.text }}>=================================</Text>
			<Text style={{ color: theme.text, fontWeight: 'bold' }}>{title}</Text>
			{data && Object.entries(data).map(([key, value]) => (
				<Text key={key} style={{ color: theme.text, lineHeight: 20 }}>
					{key} : {String(value)}
				</Text>
			))}
		</View>
	);

	return (
		<View
			style={{
				paddingHorizontal: 15,
				flexShrink: 1,    // Permite que o conteúdo reduza se necessário
				flexGrow: 1,      // Permite que o conteúdo expanda
				minHeight: '100%' // Garante que ocupe todo o espaço
			}}
			onLayout={(event) => {
				const { height } = event.nativeEvent.layout;
				setContentHeight(height);
			}}>
			{status && (
				<>
					{renderSection('Device Statistics', status.deviceStastics)}
					{renderSection('Internet Status', status.internetStatus)}
					{renderSection('System Info', status.systemInfo)}
					{renderSection('wanAdvCfg', status.wanAdvCfg)}
					<Text style={{ color: theme.text }}>
						=================================
					</Text>
				</>
			)}
		</View>
	);
}