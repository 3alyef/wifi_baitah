import React from 'react';
import Svg, { Text as SvgText } from 'react-native-svg';

interface PropsOutlinedText {
	text: string;
	strokeColor: string;
	fillColor: string;
	fontSize: number;
	fontWeight: string;
}

export default function OutlinedText({ text, strokeColor, fillColor, fontSize = 40, fontWeight }: PropsOutlinedText) {
	return (
		<Svg height={fontSize + 10} width={fontSize * text.length * 0.6}>
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
};
