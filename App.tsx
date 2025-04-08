import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { globalStyles } from './src/styles/globalStyles';
import { Provider } from 'react-redux';
import store from './src/app/store';
import Router from './src/services/Router/Router';
import getDeviceLanguage from './src/i18n/utils/getDeviceLanguage';
import {
	Keyboard,
	Pressable,
	SafeAreaView,
	StatusBar
} from 'react-native';

function App(): React.JSX.Element {
	const [router] = useState<Router>(new Router());

	useEffect(() => {
		async function startRouter() {
			await router.init();
			console.log("language: ", getDeviceLanguage())
			// console.log("URL: ", router.getBaseURL());
		}
		startRouter();
	}, []);
	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1 }} >
				<StatusBar barStyle="light-content" backgroundColor="#155c58" />
				<Pressable onPress={Keyboard.dismiss} style={globalStyles.appBackground}>
					<AppNavigator />
				</Pressable>
			</SafeAreaView>
		</Provider>

	);
}

export default App;
