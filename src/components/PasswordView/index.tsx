import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStyle } from "./style";
import { useGlobalContext } from "@/context/GlobalContext";
import BtnContainer from "../BtnContainer";

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

	const { theme } = useGlobalContext();

	const styles = createStyle(theme);
	return (
		<View style={styles.container}>
			<View style={styles.eyeContainer}>
				<Pressable style={styles.eye} onPress={() => setShow(!show)}>
					<Icon name={show ? 'eye' : 'eye-off'} size={27} style={{ color: theme.primary }} />
				</Pressable>
				<View style={styles.eyeView}></View>
			</View>
			<View style={styles.passwordContainer}>
				<TextInput
					style={styles.password}
					value={password}
					onChangeText={setPassword}
					placeholder={placeHolder}
					placeholderTextColor={theme.primary + "77"}
					secureTextEntry={!show}
				/>
				{password.length > 0 && (
					<BtnContainer onPress={() => setPassword("")}>
						<Icon name="close" size={18} style={styles.clearIcon} />
					</BtnContainer>
				)}
			</View>
		</View>
	);
};