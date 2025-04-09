import { routerReducer } from "@/features/router";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    router: routerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
