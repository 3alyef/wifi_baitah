import { routerError } from "./routerErrorTypes";

export interface RouterState {
  baseURL: string;
  cookie: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: routerError | null;
}
