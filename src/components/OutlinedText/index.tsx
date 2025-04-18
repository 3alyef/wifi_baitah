import { useGlobalContext } from '@/context/GlobalContext';
import React from 'react';
import { Text, View } from 'react-native';
import createStyle from './style';
import Svg, { Text as SvgText } from 'react-native-svg';

interface PropsOutlinedText {
	text: string;
	strokeColor: string;
	fillColor: string;
	fontSize: number;
	fontWeight: string;
	scale?: number;
}

export default function OutlinedText({
	text,
	strokeColor,
	fillColor,
	fontSize = 40,
	fontWeight,
	scale = 1,
}: PropsOutlinedText) {
	const { theme, currentLanguage } = useGlobalContext();
	const styles = createStyle(theme);

	function getTextWidth() {
		return currentLanguage === 'zh' || currentLanguage === 'zh-rTW'
			? fontSize * text.length
			: fontSize * text.length * 0.6;
	}

	const scaledFontSize = fontSize * scale;
	// Recalculando a posição Y para o texto centralizado


	if (currentLanguage !== 'ar') {
		return (
			<Svg height={fontSize + 10} width={getTextWidth()}>
				<SvgText
					x="50%"
					y={fontSize * 1.02}
					textAnchor="middle"
					stroke={strokeColor}
					strokeWidth="1.5"
					strokeLinejoin="round"
					strokeLinecap="round"
					fill={fillColor}
					fontSize={fontSize}
					fontWeight={fontWeight}
					fontFamily="monospace"
				>
					{text}
				</SvgText>
			</Svg>
		);
	}

	// Deslocamentos para criar contorno em 8 direções
	const offsets = [
		{ x: -1, y: -1 },
		{ x: 0, y: -1 },
		{ x: 1, y: -1 },//{ x: 1, y: -1 },
		{ x: -1, y: 0 },
		{ x: 1, y: 0 },//{ x: 1, y: 0 },
		{ x: -1, y: 1 },
		{ x: 0, y: 1 },
		{ x: 1, y: 1 },//{ x: 1, y: 1 },
	];

	return (
		<View style={[styles.container, { width: getTextWidth(), height: scaledFontSize + 10 }]}>
			{offsets.map((offset, index) => (
				<Text
					key={index}
					style={[
						styles.centeredText,
						{
							fontSize: scaledFontSize,
							fontWeight: fontWeight as any,
							color: strokeColor,
							position: 'absolute',
							left: offset.x * scale,
							top: offset.y * scale,
						},
					]}
				>
					{text}
				</Text>
			))}

			{/* Texto principal no centro */}
			<Text
				style={[
					styles.centeredText,
					{
						fontSize: scaledFontSize,
						fontWeight: fontWeight as any,
						color: fillColor,
						position: 'absolute', // Posicionamento absoluto para centralizar
						top: 0,  // Ajuste para manter centralizado
					},
				]}
			>
				{text}
			</Text>
		</View>
	);
}
