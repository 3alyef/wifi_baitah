import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import { style } from "./style";
export default function PasswordView() {
	const [show, setShow] = useState(true);
	const [password, setPassword] = useState('');
	return (
		<View style={style.Container}>
			<Pressable style={style.eye} onPress={(data) => setShow(!show)}>
				<Icon name={show ? 'eye' : 'eye-off'} size={27} />
			</Pressable>
			<View style={style.PasswordContainer}>
				<TextInput
					style={style.Password}
					value={password}
					onChangeText={setPassword}
					placeholder="Password"
				/>
			</View>
		</View>
	);
};