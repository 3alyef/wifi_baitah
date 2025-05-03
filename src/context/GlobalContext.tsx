import { createContext, useContext, useEffect, useState } from "react";
import { DeveloperFeatures, GlobalContextInterface } from "./types/GlobalContext.type";
import { ThemeContract, ThemeType } from "@/themes";
import darkTheme from "@/themes/dark";
import lightTheme from "@/themes/light";
import { i18n, Locale } from "@/i18n";
import TypeLocales from "@/i18n/locales/locales.type";
import { getDictionary } from "@/i18n/library/get-dictionary";
import getDeviceLanguage from "@/i18n/utils/getDeviceLanguage";
import { direction } from "@/styles/globalStyles";
interface PropsGlobalContextProvider {
	children: React.ReactNode
}

const GlobalContext = createContext<GlobalContextInterface | null>(null);

export default function GlobalContextProvider({ children }: PropsGlobalContextProvider) {
	const [themeId, setThemeId] = useState<ThemeType>("dark");
	const [theme, setTheme] = useState<ThemeContract>(darkTheme);
	const [currentLanguage, setCurrentLanguage] = useState<Locale>("en");
	const [direction, setDirection] = useState<direction>('ltr');

	const [devConfig, setDevConfig] = useState<DeveloperFeatures>({
		debugTools: false,
		experimental: false,
		rawData: false,
		unsafe: false
	});

	function toggleTheme() {
		if (themeId == "dark") {
			setThemeId('light');
			setTheme(lightTheme);
			return;
		}
		setThemeId('dark');
		setTheme(darkTheme);
	}

	const [dictionary, setDictionary] = useState<TypeLocales | undefined>();

	useEffect(() => { // Set default language of app
		let lang: Locale = 'en';
		let direction: direction = 'ltr';
		/*for (const language of getDeviceLanguage()) {
			if (i18n.locales.includes(language.languageCode as Locale)) {
				lang = language.languageCode as Locale;
				direction = language.isRTL ? "rtl" : 'ltr';
				break
			}
		}*/
		setCurrentLanguage(lang);
		setDirection(direction);
	}, [])

	useEffect(() => {
		async function fetchDictionary() {
			const data = await getDictionary(currentLanguage);
			setDictionary(data);
		}
		fetchDictionary();

	}, [currentLanguage])
	return (
		<GlobalContext.Provider value={{
			theme,
			themeId,
			toggleTheme,
			direction,
			currentLanguage,
			setCurrentLanguage,
			dictionary,
			devConfig,
			toggleDevFeature: (feature: keyof DeveloperFeatures) =>
				setDevConfig(prev => ({ ...prev, [feature]: !prev[feature] })),
			isDevEnabled: devConfig.rawData || devConfig.debugTools || devConfig.experimental
		}}>
			{children}
		</GlobalContext.Provider>
	);
}

export function useGlobalContext() {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error("useGlobalContext deve ser usado dentro de um GlobalContextProvider");
	}
	return context;
}