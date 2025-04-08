export interface AuthState {
  loading: boolean;
  user: string | null;
  token: string | null;
  error: string | null;
}

export interface LoginSuccessPayload {
  user: string;
  token: string;
}

export interface LoginFailurePayload {
  error: string;
}
