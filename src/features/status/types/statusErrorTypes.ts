export enum statusError {
  PASSWORD_INCORRECT = "Password Incorrect",
  SERVER_ERROR = "Server error",
  UNKNOWN_ERROR = "Unknow error",
  COOKIE_UNDEFINED = "Cookie undefined",
}

export interface errorMsg {
  message: statusError;
}

export interface StatusErrorPayload {
  message: statusError;
  baseURL?: string;
}
