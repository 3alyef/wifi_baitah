import { AppLogo, PasswordView, SunMoonToggle, V1Btn } from "@/components";
import { Button, GestureResponderEvent, View } from "react-native";
import { createStyle } from "./style";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { routerLoginThunk } from "@/features/router/thunks/routerLoginThunk";
import { useAppDispatch } from "@/app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useNavigation } from "@react-navigation/native";
import { RootDrawerNavigation } from "@/navigation/types/StackTypes";
import { cleanError } from "@/features/router/routerSlice";

export default function Login() {
	const [password, setPassword] = useState('');
	const { theme, themeId, dictionary, toggleTheme } = useGlobalContext();

	const isLoggedIn = useSelector((state: RootState) => state.router.isLoggedIn);

	const navigation = useNavigation<RootDrawerNavigation>();

	const dispatch = useAppDispatch();

	const handleLogin = (password: string) => {
		dispatch(routerLoginThunk(password));
	};

	function onPressLogin(event: GestureResponderEvent) {
		handleLogin(password);
	}

	useEffect(() => {
		dispatch(cleanError());
	}, [password]);

	useEffect(() => {
		if (isLoggedIn) {
			navigation.navigate('Status');
		}
	}, [isLoggedIn]);

	if (!dictionary) return <></>; // definir screen loading

	const { login } = dictionary.screens;
	const { global } = dictionary;

	const styles = createStyle(theme);

	return (
		<View style={styles.Container}>
			<View style={styles.Content}>
				<SunMoonToggle onPress={toggleTheme} size={40} />
				<AppLogo title={global.habaitah} />
				<PasswordView
					password={password}
					setPassword={setPassword} />
				<V1Btn text={login.login} handlePress={onPressLogin} />
			</View>
		</View>
	)
}; 