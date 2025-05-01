import { authError } from "./authErrorTypes";

export interface RouterState {
  //baseURL: string;
  //cookie: string;
  passwordB64: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: authError | null;
}
