import { createSlice } from "@reduxjs/toolkit";
import { statusError, StatusState } from "./types";
import {
  statusInternetStatusThunk,
  statusIsIPConflict,
  statusThunk,
} from "./thunks";

const initialState: StatusState = {
  status: null,
  iPConflict: null,
  isStatusLoading: false,
  isIPConflictLoading: false,
  error: null,
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(statusThunk.pending, (state) => {
        state.isStatusLoading = true;
      })
      .addCase(statusThunk.fulfilled, (state, action) => {
        state.status = action.payload.data;
        state.error = null;
        state.isStatusLoading = false;
      })
      .addCase(statusThunk.rejected, (state, action) => {
        state.isStatusLoading = false;
        state.error =
          (action.payload?.message as statusError) || statusError.UNKNOWN_ERROR;
      })
      .addCase(statusInternetStatusThunk.pending, (state) => {
        state.isStatusLoading = true;
      })
      .addCase(statusInternetStatusThunk.fulfilled, (state, action) => {
        if (state.status?.internetStatus && action.payload.data) {
          state.status.internetStatus = action.payload.data;
        }
        state.error = null;
        state.isStatusLoading = false;
      })
      .addCase(statusInternetStatusThunk.rejected, (state, action) => {
        state.isStatusLoading = false;
        state.error =
          (action.payload?.message as statusError) || statusError.UNKNOWN_ERROR;
      })
      .addCase(statusIsIPConflict.pending, (state) => {
        state.isIPConflictLoading = true;
      })
      .addCase(statusIsIPConflict.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.iPConflict = action.payload.data;
        }
        state.error = null;
        state.isIPConflictLoading = false;
      })
      .addCase(statusIsIPConflict.rejected, (state, action) => {
        state.isIPConflictLoading = false;
        state.error =
          (action.payload?.message as statusError) || statusError.UNKNOWN_ERROR;
      });
  },
});

// export const { logout, cleanError } = routerSlice.actions;
export default statusSlice.reducer;
