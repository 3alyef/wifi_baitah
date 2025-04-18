import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/app/store';
import GlobalContextProvider from './src/context/GlobalContext';
import {
	Keyboard,
	Pressable,
	SafeAreaView,
	StatusBar
} from 'react-native';

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<GlobalContextProvider>
				<SafeAreaView style={{ flex: 1 }} >
					<StatusBar barStyle="light-content" backgroundColor="black" />
					<AppNavigator />
				</SafeAreaView>
			</GlobalContextProvider>
		</Provider>
	);
}

export default App;
