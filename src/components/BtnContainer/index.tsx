import { ReactNode } from "react";

interface PropsBtnContainer {
	children: ReactNode
}
export default function BtnContainer({ children }: PropsBtnContainer) {
	return (
		<>
			{children}
		</>
	)
}