// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React from 'react';

import { Provider } from 'react-redux';
import store, { persistor } from './src/app/store';
import GlobalContextProvider from './src/context/GlobalContext';
import { PersistGate } from "redux-persist/integration/react";
import AppEntry from './src/index';

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<GlobalContextProvider>
					<AppEntry />
				</GlobalContextProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
