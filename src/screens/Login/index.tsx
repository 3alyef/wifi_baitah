import { AppLogo, PasswordView, V1Btn } from "@/components";
import { GestureResponderEvent, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
export default function Login() {
	const { dictionary, setCurrentLanguage } = useGlobalContext();
	if (!dictionary) return <></>

	const [password, setPassword] = useState('');
	function onPressLogin(event: GestureResponderEvent) {
		console.log("Password: ", password);
	}

	const { login } = dictionary.screens;
	return (
		<View style={styles.Container}>
			<View style={styles.Content}>
				<AppLogo title={login.wifi_habaitah} />
				<PasswordView
					password={password}
					setPassword={setPassword}
					placeHolder={login.password} />
				<V1Btn text={login.login} handlePress={onPressLogin} />
			</View>
		</View>
	)
}; 