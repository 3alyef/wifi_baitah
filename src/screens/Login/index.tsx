import { AppLogo, PasswordView, V1Btn } from "@/components";
import { GestureResponderEvent, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
export default function Login() {
	const [password, setPassword] = useState('');
	function onPressLogin(event: GestureResponderEvent) {
		console.log("Password: ", password);
	}
	return (
		<View style={styles.Container}>
			<View style={styles.Content}>
				<AppLogo />
				<PasswordView
					password={password}
					setPassword={setPassword} />
				<V1Btn text="Login" handlePress={onPressLogin} />
			</View>
		</View>
	)
}; 