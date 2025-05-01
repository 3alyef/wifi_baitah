import Router from "@/services/router/Router";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { rejectValueType } from "../types/statusThunksTypes";
import { errorMsg } from "../types/statusErrorTypes";
import {
  GetStatus,
  InternetStatus,
} from "@/services/router/utils/AxiosController/types/AxiosControllerTypes";

interface args {}

export const statusInternetStatusThunk = createAsyncThunk<
  { data: InternetStatus | undefined },
  void,
  {
    rejectValue: rejectValueType;
  }
>(
  // o asyncThunk lida com operações assíncronas
  "router/internetStatus",
  async (_, { rejectWithValue }) => {
    const router = new Router();
    await router.init();
    try {
      const internetStatus = await router.getInternetStatus();
      return { data: internetStatus };
    } catch (err) {
      const error = err as errorMsg;
      return rejectWithValue({
        message: error.message,
      });
    }
  }
);
