import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
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
			</View>
		</View>
	);
};