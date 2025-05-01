import Router from "@/services/router/Router";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { rejectValueType } from "../types/statusThunksTypes";
import { errorMsg } from "../types/statusErrorTypes";
import { GetStatus } from "@/services/router/utils/AxiosController/types/AxiosControllerTypes";

interface args {}

export const statusThunk = createAsyncThunk<
  { data: GetStatus | null },
  void,
  {
    rejectValue: rejectValueType;
  }
>(
  // o asyncThunk lida com operações assíncronas
  "router/status",
  async (_, { rejectWithValue }) => {
    const router = new Router();
    await router.init();

    try {
      const status = await router.getStatus();
      return { data: status };
    } catch (err) {
      const error = err as errorMsg;
      return rejectWithValue({
        message: error.message,
      });
    }
  }
);
