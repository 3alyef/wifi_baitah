import { createContext, useState } from "react";
import Router from "@/services/Router/Router";


interface RouterContextValue {
	router: Router | null;
}

const RouterContext = createContext<RouterContextValue>({
	router: null,
});

interface PropsRouterProvider {
	children: React.ReactNode
}

export default function RouterProvider({ children }: PropsRouterProvider) {
	const [router] = useState<Router>(new Router());

	<RouterContext.Provider value={{ router }}>
		{children}
	</RouterContext.Provider>
}