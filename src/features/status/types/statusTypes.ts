import {
  GetStatus,
  InternetStatus,
} from "@/services/router/utils/AxiosController/types/AxiosControllerTypes";
import { statusError } from "./statusErrorTypes";

export interface StatusState {
  status: GetStatus | null;
  isLoading: boolean;
  internetStatus: InternetStatus | null;
  error: statusError | null;
}
