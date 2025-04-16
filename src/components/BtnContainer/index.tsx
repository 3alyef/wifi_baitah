import { ReactNode, useRef } from "react";
import { Animated, Pressable } from "react-native";
import createStyle from "./style";
import { useGlobalContext } from "@/context/GlobalContext";

interface PropsBtnContainer {
	onPress: () => void;
	children: ReactNode
}
export default function BtnContainer({ onPress, children }: PropsBtnContainer) {
	const scaleAnim = useRef(new Animated.Value(1)).current;
	const { theme } = useGlobalContext();
	function animationIn() {
		return Animated.spring(scaleAnim, {
			toValue: 0.85,
			useNativeDriver: true,
			speed: 50,
			bounciness: 10,
		}).start();
	}

	function animationOut() {
		Animated.spring(scaleAnim, {
			toValue: 1,
			useNativeDriver: true,
			speed: 20,
			bounciness: 6,
		}).start();
	}

	const styles = createStyle(theme);
	return (
		<Pressable
			onPress={onPress}
			onPressIn={animationIn}
			onPressOut={animationOut}
		>
			<Animated.View style={[styles.BtnContainer, { transform: [{ scale: scaleAnim }] }]}>
				{children}
			</Animated.View>
		</Pressable>
	)
}