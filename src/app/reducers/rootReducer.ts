import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { routerReducer } from "@/features/router";
import type { Reducer } from "redux";
import routerPersistConfig from "../persistConfig";

const rootReducer = combineReducers({
  router: persistReducer<ReturnType<typeof routerReducer>>(
    routerPersistConfig,
    routerReducer
  ) as unknown as Reducer<ReturnType<typeof routerReducer>>,
});

export default rootReducer;
