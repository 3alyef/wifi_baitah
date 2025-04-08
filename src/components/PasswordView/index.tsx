import { useRef, useState } from "react";
import { Animated, Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import { style } from "./style/style";

interface PropsPasswordView {
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>
}
export default function PasswordView({
	password,
	setPassword
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
	return (
		<View style={style.Container}>
			<View style={style.EyeContainer}>
				<Pressable style={style.Eye} onPress={() => setShow(!show)}>
					<Icon name={show ? 'eye' : 'eye-off'} size={27} style={{ color: 'white' }} />
				</Pressable>
				<View style={style.EyeView}></View>
			</View>
			<View style={style.PasswordContainer}>
				<TextInput
					style={style.Password}
					value={password}
					onChangeText={setPassword}
					placeholder="Password"
					secureTextEntry={!show}
				/>
				{password.length > 0 && (
					/*<Pressable style={style.ClearButton} onPress={() => setPassword("")}>
						<Icon name="close" size={16} style={style.ClearIcon} />
					</Pressable>*/
					<Pressable
						onPressIn={animateIn}
						onPressOut={animateOut}
						onPress={() => setPassword("")}
					>
						<Animated.View style={[style.ClearButton, { transform: [{ scale: scaleAnim }] }]}>
							<Icon name="close" size={18} style={style.ClearIcon} />
						</Animated.View>
					</Pressable>
				)}
			</View>
		</View>
	);
};