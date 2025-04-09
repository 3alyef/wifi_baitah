import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use esse no lugar de `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;

// Use esse no lugar de `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
