import { AppLogo, PasswordView } from "@/components";
import { View } from "react-native";
import { styles } from "./style";
export default function Login() {
	return (
		<View style={styles.Container}>
			<AppLogo />
			<PasswordView />
		</View>
	)
}; 