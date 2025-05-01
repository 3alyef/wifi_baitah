import { useSelector } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import {
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { RootState } from '@/app/store';
import { useAppDispatch } from './app/hooks';
import { authThunk } from './features/auth/thunks/authThunk';
import { useEffect, useState } from 'react';
import Router from './services/router/Router';
import { GetStatus } from './services/router/utils/AxiosController/types/AxiosControllerTypes';
import { statusThunk } from './features/status/thunks';

export default function AppEntry() {
	const dispatch = useAppDispatch();
	const passwordB64 = useSelector((state: RootState) => state.auth.passwordB64);
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

	const [status, setStatus] = useState<GetStatus | undefined>()
	const router = new Router();
	router.init();

	useEffect(() => {
		if (passwordB64.length > 0 && !isLoggedIn) {
			dispatch(authThunk({
				passwordB64
			}));
		};

		if (isLoggedIn) {
			const intervalo = setInterval(() => {
				dispatch(statusThunk())
				// router.initMonitoring()
			},
				2000);
			return () => clearInterval(intervalo);
		}
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