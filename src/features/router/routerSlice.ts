import { createSlice } from "@reduxjs/toolkit";
import { RouterState, routerError } from "./types";
import {
  routerAuthThunk,
  routerLoginThunk,
  routerNavigateThunk,
} from "./thunks";

const initialState: RouterState = {
  //baseURL: "", // url router
  //cookie: "",
  passwordB64: "",
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const routerSlice = createSlice({
  name: "router",
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
      .addCase(routerLoginThunk.pending, (state) => {
        // processo em andamento
        state.isLoading = true;
        state.error = null;
      })
      .addCase(routerLoginThunk.fulfilled, (state, action) => {
        // processo finalizado com sucesso
        state.isLoading = false;
        state.isLoggedIn = true;
        state.passwordB64 = action.payload.passwordB64;
      })
      .addCase(routerLoginThunk.rejected, (state, action) => {
        // falha
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error =
          (action.payload?.message as routerError) || routerError.UNKNOWN_ERROR;
      })
      .addCase(routerAuthThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(routerAuthThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(routerAuthThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.passwordB64 = "";
        state.error =
          (action.payload?.message as routerError) || routerError.UNKNOWN_ERROR;
      })
      .addCase(routerNavigateThunk.pending, (state, action) => {})
      .addCase(routerNavigateThunk.fulfilled, (state, action) => {})
      .addCase(routerNavigateThunk.rejected, (state, action) => {});
  },
});

export const { logout, cleanError } = routerSlice.actions;
export default routerSlice.reducer;
