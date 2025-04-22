import { useEffect, useRef, useState } from "react";
import { Animated, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStyle } from "./style";
import { useGlobalContext } from "@/context/GlobalContext";
import BtnContainer from "../BtnContainer";
import PressableContainer from "../PressableContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import isRTL from "@/utils/isRTL";

interface PropsPasswordView {
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>
}
export default function PasswordView({
	password,
	setPassword
}: PropsPasswordView) {
	const isError = useSelector((state: RootState) => state.router.error);
	const [show, setShow] = useState(true);
	const [onFocus, setOnFocus] = useState(false);
	const { theme, dictionary } = useGlobalContext();
	const styles = createStyle(theme, onFocus);
	const errorAnim = useRef(new Animated.Value(0)).current;
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		Animated.timing(errorAnim, {
			toValue: isError != null ? 1 : 0,
			duration: 210,
			useNativeDriver: false, // height e opacity precisam de false
		}).start();
		setErrorMessage(getErrorMsg());
	}, [isError]);

	function errorHeight() {
		return errorAnim.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 40], // altura máxima aproximada
		});
	}

	function errorOpacity() {
		return errorAnim.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
		});
	}

	if (!dictionary) return <></>; // definir screen loading

	const { global } = dictionary;

	function getErrorMsg() {
		if (password.length > 0 && isError) {
			return global.password.incorrect_password_entered
		} else if (password.length === 0) {
			if (errorMessage != global.password.incorrect_password_entered) {
				return global.password.please_enter_a_valid_password;
			}
		}
		return ""
	}
	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<View style={styles.eyeContainer}>
					<PressableContainer onPress={() => setShow(!show)}>
						<Icon name={show ? 'eye' : 'eye-off'} size={27} style={{ color: theme.primary }} />
					</PressableContainer>
					<View style={styles.eyeView}></View>
				</View>
				<View style={[styles.passwordContainer, {
					direction: isRTL(password) ? 'rtl' : 'ltr'
				}]}>
					<TextInput
						style={[styles.password]}
						value={password}
						onChangeText={setPassword}
						placeholder={global.password.password}
						placeholderTextColor={theme.primary + "77"}
						secureTextEntry={!show}
						onFocus={() => setOnFocus(true)}
						onBlur={() => setOnFocus(false)}
					/>
					{password.length > 0 && (
						<BtnContainer onPress={() => setPassword("")}>
							<Icon name="close" size={18} style={styles.clearIcon} />
						</BtnContainer>
					)}
				</View>
			</View>
			<Animated.View style={[{ height: errorHeight(), opacity: errorOpacity(), overflow: "hidden" }, styles.informationContainer]}>
				<Icon name='information-circle-sharp' size={18} style={{ color: theme.error }} />
				<Text style={{ color: theme.error }}>
					{errorMessage}
				</Text>
			</Animated.View>
		</View>

	);
};