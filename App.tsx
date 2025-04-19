// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import 'react-native-reanimated';


import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/app/store';
import GlobalContextProvider from './src/context/GlobalContext';
import {
	Platform,
	SafeAreaView,
	StatusBar,
	View
} from 'react-native';

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<GlobalContextProvider>
				<SafeAreaView style={{ flex: 1 }} >
					{/*
						<StatusBar barStyle="light-content" backgroundColor="black" />
					*/}
					<StatusBar
						translucent
						backgroundColor="transparent"
						barStyle="light-content"
					/>
					<AppNavigator />
				</SafeAreaView>
			</GlobalContextProvider>
		</Provider>
	);
}

export default App;
