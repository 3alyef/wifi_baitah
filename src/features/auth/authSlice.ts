import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthState,
  LoginFailurePayload,
  LoginSuccessPayload,
} from "./authTypes";

const initialState: AuthState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<LoginSuccessPayload>) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<LoginFailurePayload>) {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = action.payload.error;
    },
    logout(state) {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
