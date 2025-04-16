import { createContext, useContext, useEffect, useState } from "react";
import { GlobalContextInterface } from "./types/GlobalContext.type";
import { ThemeContract, ThemeType } from "@/themes";
import darkTheme from "@/themes/dark";
import lightTheme from "@/themes/light";
import { i18n, Locale } from "@/i18n";
import TypeLocales from "@/i18n/locales/locales.type";
import { getDictionary } from "@/i18n/library/get-dictionary";
import getDeviceLanguage from "@/i18n/utils/getDeviceLanguage";

interface PropsGlobalContextProvider {
	children: React.ReactNode
}

const GlobalContext = createContext<GlobalContextInterface | null>(null);

export default function GlobalContextProvider({ children }: PropsGlobalContextProvider) {
	const [themeId, setThemeId] = useState<ThemeType>("dark");
	const [theme, setTheme] = useState<ThemeContract>(darkTheme);
	const [currentLanguage, setCurrentLanguage] = useState<Locale>("en");

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
		setCurrentLanguage(() => {
			let lang: Locale = 'en';
			for (const language of getDeviceLanguage()) {
				if (i18n.locales.includes(language.languageCode as Locale)) {
					lang = language.languageCode as Locale;
					break
				}
			}
			return lang;
		});
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
			currentLanguage,
			setCurrentLanguage,
			dictionary
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