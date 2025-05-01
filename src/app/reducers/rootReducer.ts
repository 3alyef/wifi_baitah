import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { authReducer } from "@/features/auth";
import type { Reducer } from "redux";
import authPersistConfig from "../persistConfig";
import { statusReducer } from "@/features/status";

const rootReducer = combineReducers({
  auth: persistReducer<ReturnType<typeof authReducer>>(
    authPersistConfig,
    authReducer
  ) as unknown as Reducer<ReturnType<typeof authReducer>>,
  status: statusReducer as unknown as Reducer<ReturnType<typeof statusReducer>>,
});

export default rootReducer;
