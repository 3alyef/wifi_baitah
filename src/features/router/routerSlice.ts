import { createSlice } from "@reduxjs/toolkit";
import { RouterState } from "./routerTypes";
import { routerLoginThunk } from "./routerThunks";
import { routerError } from "./routerErrorTypes";

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
  reducers: {
    setBaseURL: (state, action) => {
      state.baseURL = action.payload;
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
        state.cookie = action.payload.cookie;
        state.baseURL = action.payload.baseURL;
      })
      .addCase(routerLoginThunk.rejected, (state, action) => {
        // falha
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error =
          (action.payload?.message as routerError) || routerError.UNKNOWN_ERROR;
      });
  },
});

export const { setBaseURL } = routerSlice.actions;
export default routerSlice.reducer;
