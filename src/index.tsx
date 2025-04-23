import { useSelector } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import {
	Button,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { RootState } from '@/app/store';
import { useAppDispatch } from './app/hooks';
import { routerAuthThunk } from './features/router/thunks/routerAuthThunk';

export default function AppEntry() {
	const dispatch = useAppDispatch();
	const baseURL = useSelector((state: RootState) => state.router.baseURL);
	const cookie = useSelector((state: RootState) => state.router.cookie);

	return (
		<SafeAreaView style={{ flex: 1 }} >
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>

			<AppNavigator />
			<Button title='reload data' onPress={() => dispatch(routerAuthThunk({
				baseURL,
				cookie
			}))} />
		</SafeAreaView>
	)
}