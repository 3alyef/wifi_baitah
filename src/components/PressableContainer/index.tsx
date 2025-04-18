import { useGlobalContext } from "@/context/GlobalContext";
import { ReactNode, useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";
import createStyle from "./style";

interface PropsPressableContainer {
	children: ReactNode;
	onPress: () => void;
}

export default function PressableContainer({ children, onPress }: PropsPressableContainer) {
	const scaleAnim = useRef(new Animated.Value(1)).current;
	const rippleAnim = useRef(new Animated.Value(0)).current;
	const { theme } = useGlobalContext();

	function animationIn() {
		return Animated.parallel([
			Animated.timing(scaleAnim, {
				toValue: 0.92,
				duration: 100,
				useNativeDriver: true,
			}),
			Animated.timing(rippleAnim, {
				toValue: 1,
				duration: 200,
				useNativeDriver: true,
			}),
		]).start();
	}

	function animationOut() {
		return Animated.parallel([
			Animated.spring(scaleAnim, {
				toValue: 1,
				bounciness: 4,
				speed: 20,
				useNativeDriver: true,
			}),
			Animated.timing(rippleAnim, {
				toValue: 0,
				duration: 200,
				useNativeDriver: true,
			}),
		]).start();
	}

	const styles = createStyle(theme, rippleAnim);
	return (
		<Pressable
			onPress={onPress}
			onPressIn={animationIn}
			onPressOut={animationOut}>
			<Animated.View
				style={[
					styles.container,
					{ transform: [{ scale: scaleAnim }] },
				]}
			>
				<Animated.View
					style={[
						StyleSheet.absoluteFillObject,
						styles.containerAnimated
					]}
				/>
				{children}
			</Animated.View>
		</Pressable>
	)
}