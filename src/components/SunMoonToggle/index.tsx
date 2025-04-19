import { useGlobalContext } from '@/context/GlobalContext';
import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './styles';

export default function SunMoonToggle({ onPress }: { onPress: () => void }) {
	const [isDay, setIsDay] = useState(true);
	// Variável de estado para alternar entre sol e lua
	const scale = useRef(new Animated.Value(1)).current; // Controle de animação para suavizar a troca

	// Função para alternar entre sol e lua com animação
	function toggleTheme() {
		onPress();
		Animated.timing(scale, {
			toValue: 0.8, // Diminui o ícone para criar a animação de "efeito de clique"
			duration: 150,
			useNativeDriver: true,
		}).start(() => {
			// Após a animação de "efeito de clique", faz a troca do ícone e anima de volta para o tamanho original
			setIsDay(!isDay);
			Animated.spring(scale, {
				toValue: 1, // Retorna ao tamanho normal
				friction: 3,
				useNativeDriver: true,
			}).start();
		});
	};
	const { theme } = useGlobalContext();
	const styles = createStyle(theme);
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={toggleTheme}>
				<Animated.View style={{ transform: [{ scale }] }}>
					{/* Alterando o ícone dependendo do estado */}
					{isDay ? (
						<Icon name="sunny" size={40} style={styles.icon} />
					) : (
						<Icon name="moon" size={40} style={styles.icon} />
					)}
				</Animated.View>
			</TouchableOpacity>
		</View>
	);
};

