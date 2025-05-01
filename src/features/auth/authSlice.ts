import { createSlice } from "@reduxjs/toolkit";
import { RouterState, authError } from "./types";
import { authThunk, authLoginThunk } from "./thunks";

const initialState: RouterState = {
  //baseURL: "", // url router
  //cookie: "",
  passwordB64: "",
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      //state.cookie = "";
      state.passwordB64 = "";
      state.isLoading = false;
      state.error = null;
    },
    cleanError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginThunk.pending, (state) => {
        // processo em andamento
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authLoginThunk.fulfilled, (state, action) => {
        // processo finalizado com sucesso
        state.isLoading = false;
        state.isLoggedIn = true;
        state.passwordB64 = action.payload.passwordB64;
      })
      .addCase(authLoginThunk.rejected, (state, action) => {
        // falha
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error =
          (action.payload?.message as authError) || authError.UNKNOWN_ERROR;
      })
      .addCase(authThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(authThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.passwordB64 = "";
        state.error =
          (action.payload?.message as authError) || authError.UNKNOWN_ERROR;
      });
  },
});

export const { logout, cleanError } = authSlice.actions;
export default authSlice.reducer;
