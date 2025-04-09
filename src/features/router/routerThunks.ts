import Router from "@/services/router/Router";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorMsg, routerError } from "./routerErrorTypes";

export const routerLoginThunk = createAsyncThunk<
  { baseURL: string; cookie: string },
  string,
  {
    rejectValue: {
      message: routerError;
    };
  }
>(
  // o asyncThunk lida com operações assíncronas
  "router/login",
  async (password: string, { rejectWithValue }) => {
    const router = new Router();
    await router.defineBaseURL();
    try {
      await router.routerLogin(password);

      return {
        baseURL: router.getBaseURL(),
        cookie: router.getCookie(),
      }; // valor que será salvo no state pelo fulfilled
    } catch (err) {
      const error = err as errorMsg;
      return rejectWithValue({
        message: error.message,
      });
    }
  }
);
