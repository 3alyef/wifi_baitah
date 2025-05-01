import Router from "@/services/router/Router";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { rejectValueType } from "../types/statusThunksTypes";
import { errorMsg } from "../types/statusErrorTypes";
import { IPConflict } from "@/services/router/utils/AxiosController/types/AxiosControllerTypes";

interface args {}

export const statusIsIPConflict = createAsyncThunk<
  { data: IPConflict | null },
  void,
  {
    rejectValue: rejectValueType;
  }
>(
  // o asyncThunk lida com operações assíncronas
  "router/statusIsIPConflict",
  async (_, { rejectWithValue }) => {
    const router = new Router();
    await router.init();

    try {
      const status = await router.getIsIPConflict();
      return { data: status };
    } catch (err) {
      const error = err as errorMsg;
      return rejectWithValue({
        message: error.message,
      });
    }
  }
);
