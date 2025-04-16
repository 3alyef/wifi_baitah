import { createSlice } from "@reduxjs/toolkit";
import { RouterState, routerError } from "./types";
import { routerLoginThunk, routerNavigateThunk } from "./thunks";

const initialState: RouterState = {
  baseURL: "", // url router
  cookie: "",
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {},
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
        state.cookie = action.payload.cookie;
        state.baseURL = action.payload.baseURL;
      })
      .addCase(routerLoginThunk.rejected, (state, action) => {
        // falha
        state.isLoading = false;
        state.isLoggedIn = false;
        state.cookie = "";
        state.error =
          (action.payload?.message as routerError) || routerError.UNKNOWN_ERROR;
      })
      .addCase(routerNavigateThunk.pending, (state, action) => {})
      .addCase(routerNavigateThunk.fulfilled, (state, action) => {})
      .addCase(routerNavigateThunk.rejected, (state, action) => {});
  },
});

// export const { setBaseURL } = routerSlice.actions;
export default routerSlice.reducer;
