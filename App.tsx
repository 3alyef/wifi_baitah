import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { globalStyles } from './src/styles/globalStyles';
import {
	Keyboard,
	Pressable,
	SafeAreaView,
	StatusBar
} from 'react-native';

function App(): React.JSX.Element {

	return (
		<SafeAreaView style={{ flex: 1 }} >
			<StatusBar barStyle="light-content" backgroundColor="#155c58" />
			<Pressable onPress={Keyboard.dismiss} style={globalStyles.appBackground}>
				<AppNavigator />
			</Pressable>
		</SafeAreaView>
	);
}

export default App;
