import {
  GetStatus,
  InternetStatus,
  IPConflict,
} from "@/services/router/utils/AxiosController/types/AxiosControllerTypes";
import { statusError } from "./statusErrorTypes";

export interface StatusState {
  status: GetStatus | null;
  iPConflict: IPConflict | null;
  isStatusLoading: boolean;
  isIPConflictLoading: boolean;
  error: statusError | null;
}
