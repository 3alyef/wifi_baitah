import { routerError } from "./routerErrorTypes";

export interface RouterState {
  //baseURL: string;
  //cookie: string;
  passwordB64: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: routerError | null;
}
