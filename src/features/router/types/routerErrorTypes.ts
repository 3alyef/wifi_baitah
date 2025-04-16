export enum routerError {
  PASSWORD_INCORRECT = "Password Incorrect",
  SERVER_ERROR = "Server error",
  UNKNOWN_ERROR = "Unknow error",
  COOKIE_UNDEFINED = "Cookie undefined",
}

export interface errorMsg {
  message: routerError;
}

export interface RouterErrorPayload {
  message: routerError;
  baseURL?: string;
}
