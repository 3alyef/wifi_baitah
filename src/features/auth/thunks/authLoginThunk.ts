import Router from "@/services/router/Router";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorMsg, rejectValueType } from "../types";

export const authLoginThunk = createAsyncThunk<
  { /*baseURL: string; cookie: string*/ passwordB64: string },
  string,
  {
    rejectValue: rejectValueType;
  }
>(
  // o asyncThunk lida com operações assíncronas
  "router/login",
  async (password: string, { rejectWithValue }) => {
    const router = new Router();
    await router.init();
    try {
      await router.routerAuthWithPassword(password);
      return {
        passwordB64: router.getPasswordB64(),
      }; // valor que será salvo no state pelo fulfilled
    } catch (err) {
      const error = err as errorMsg;
      return rejectWithValue({
        message: error.message,
      });
    }
  }
);
