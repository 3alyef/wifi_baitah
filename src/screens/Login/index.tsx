import { AppLogo, PasswordView, V1Btn } from "@/components";
import { GestureResponderEvent, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { routerLoginThunk } from "@/features/router/routerThunks";
import { useAppDispatch } from "@/app/hooks";
export default function Login() {
	const [password, setPassword] = useState('');
	const { dictionary } = useGlobalContext();

	const dispatch = useAppDispatch();

	const handleLogin = (password: string) => {
		dispatch(routerLoginThunk(password));
	};

	function onPressLogin(event: GestureResponderEvent) {
		handleLogin(password);
	}

	if (!dictionary) return <></>; // definir screen loading

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