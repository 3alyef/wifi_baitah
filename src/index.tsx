import { useSelector } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import {
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { RootState } from '@/app/store';
import { useAppDispatch } from './app/hooks';
import { routerAuthThunk } from './features/router/thunks/routerAuthThunk';
import { useEffect } from 'react';

export default function AppEntry() {
	const dispatch = useAppDispatch();
	const passwordB64 = useSelector((state: RootState) => state.router.passwordB64);
	const isLoggedIn = useSelector((state: RootState) => state.router.isLoggedIn)

	useEffect(() => {
		if (passwordB64.length > 0 && !isLoggedIn) {
			dispatch(routerAuthThunk({
				passwordB64
			}));
		};
	}, [isLoggedIn]);

	return (
		<SafeAreaView style={{ flex: 1 }} >
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>

			<AppNavigator />
		</SafeAreaView>
	)
}