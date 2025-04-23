import Router from "@/services/router/Router";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorMsg, rejectValueType } from "../types";

interface args {
  passwordB64: string;
}

export const routerAuthThunk = createAsyncThunk<
  { isLoggedIn: boolean },
  args,
  {
    rejectValue: rejectValueType;
  }
>(
  // o asyncThunk lida com operações assíncronas
  "router/auth",
  async ({ passwordB64 }, { rejectWithValue }) => {
    const router = new Router();
    await router.init();
    try {
      await router.validateCredentials(passwordB64);
      return {
        isLoggedIn: true,
      };
    } catch (err) {
      const error = err as errorMsg;
      return rejectWithValue({
        message: error.message,
      });
    }
  }
);
