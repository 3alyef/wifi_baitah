import Router from "@/services/router/Router";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { rejectValueType } from "../types";

interface args {
  cookie: string;
  baseURL: string;
}

export const routerAuthThunk = createAsyncThunk<
  { isLogged: boolean },
  args,
  {
    rejectValue: rejectValueType;
  }
>(
  // o asyncThunk lida com operações assíncronas
  "router/auth",
  async ({ cookie, baseURL }, { rejectWithValue }) => {
    const router = new Router();
    await router.defineBaseURL();
    if (router.getBaseURL() != baseURL) {
      return {
        isLogged: false,
      };
    }

    await router.getStatus(cookie);
    return {
      isLogged: true,
    };
  }
);
