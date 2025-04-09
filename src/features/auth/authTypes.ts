export interface AuthState {
  loading: boolean;
  cookie: string | null;
  error: string | null;
}

export interface LoginSuccessPayload {
  cookie: string;
}

export interface LoginFailurePayload {
  error: string;
}
