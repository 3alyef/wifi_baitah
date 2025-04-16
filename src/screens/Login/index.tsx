import { AppLogo, PasswordView, V1Btn } from "@/components";
import { GestureResponderEvent, View } from "react-native";
import { createStyle } from "./style";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { routerLoginThunk } from "@/features/router/thunks/routerLoginThunk";
import { useAppDispatch } from "@/app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigation } from "@/navigation/types/StackTypes";
export default function Login() {
	const { theme } = useGlobalContext()
	const [password, setPassword] = useState('');
	const { dictionary } = useGlobalContext();

	const isLoggedIn = useSelector((state: RootState) => state.router.isLoggedIn);
	const navigation = useNavigation<RootStackNavigation>();

	const dispatch = useAppDispatch();

	const handleLogin = (password: string) => {
		dispatch(routerLoginThunk(password));
	};

	function onPressLogin(event: GestureResponderEvent) {
		handleLogin(password);
	}

	useEffect(() => {
		if (isLoggedIn) {
			navigation.navigate('Home');
		}
	}, [isLoggedIn]);

	if (!dictionary) return <></>; // definir screen loading

	const { login } = dictionary.screens;
	const { global } = dictionary;

	const styles = createStyle(theme);

	return (
		<View style={styles.Container}>
			<View style={styles.Content}>
				<AppLogo title={global.wifi_habaitah} />
				<PasswordView
					password={password}
					setPassword={setPassword}
					placeHolder={login.password} />
				<V1Btn text={login.login} handlePress={onPressLogin} />
			</View>
		</View>
	)
}; 