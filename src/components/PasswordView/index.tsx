import { useRef, useState } from "react";
import { Animated, Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStyle } from "./style/style";
import { useGlobalContext } from "@/context/GlobalContext";

interface PropsPasswordView {
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>
	placeHolder: string
}
export default function PasswordView({
	password,
	setPassword,
	placeHolder
}: PropsPasswordView) {
	const [show, setShow] = useState(true);

	const scaleAnim = useRef(new Animated.Value(1)).current;

	const animateIn = () => {
		Animated.spring(scaleAnim, {
			toValue: 0.85,
			useNativeDriver: true,
			speed: 50,
			bounciness: 10,
		}).start();
	};

	const animateOut = () => {
		Animated.spring(scaleAnim, {
			toValue: 1,
			useNativeDriver: true,
			speed: 20,
			bounciness: 6,
		}).start();
	};
	const { theme } = useGlobalContext();

	const styles = createStyle(theme);
	return (
		<View style={styles.Container}>
			<View style={styles.EyeContainer}>
				<Pressable style={styles.Eye} onPress={() => setShow(!show)}>
					<Icon name={show ? 'eye' : 'eye-off'} size={27} style={{ color: 'white' }} />
				</Pressable>
				<View style={styles.EyeView}></View>
			</View>
			<View style={styles.PasswordContainer}>
				<TextInput
					style={styles.Password}
					value={password}
					onChangeText={setPassword}
					placeholder={placeHolder}
					secureTextEntry={!show}
				/>
				{password.length > 0 && (
					<Pressable
						onPressIn={animateIn}
						onPressOut={animateOut}
						onPress={() => setPassword("")}
					>
						<Animated.View style={[styles.ClearButton, { transform: [{ scale: scaleAnim }] }]}>
							<Icon name="close" size={18} style={styles.ClearIcon} />
						</Animated.View>
					</Pressable>
				)}
			</View>
		</View>
	);
};