export enum authError {
  PASSWORD_INCORRECT = "Password Incorrect",
  SERVER_ERROR = "Server error",
  UNKNOWN_ERROR = "Unknow error",
  COOKIE_UNDEFINED = "Cookie undefined",
}

export interface errorMsg {
  message: authError;
}

export interface AuthErrorPayload {
  message: authError;
  baseURL?: string;
}
