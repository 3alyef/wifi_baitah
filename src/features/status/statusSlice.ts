import { createSlice } from "@reduxjs/toolkit";
import { statusError, StatusState } from "./types";
import { statusThunk } from "./thunks";

const initialState: StatusState = {
  internetStatus: null,
  isLoading: false,
  status: null,
  error: null,
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(statusThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(statusThunk.fulfilled, (state, action) => {
        state.status = action.payload.data;
        if (action.payload.data) {
          state.internetStatus = action.payload.data.internetStatus;
        }
        state.error = null;
        state.isLoading = false;
      })
      .addCase(statusThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.payload?.message as statusError) || statusError.UNKNOWN_ERROR;
      });
  },
});

// export const { logout, cleanError } = routerSlice.actions;
export default statusSlice.reducer;
