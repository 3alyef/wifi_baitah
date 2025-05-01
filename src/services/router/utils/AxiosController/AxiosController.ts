import { errorMsg } from "@/features/auth/types";
import axios, { AxiosInstance } from "axios";
import {
  GetStatus,
  InternetStatus,
  IPConflict,
} from "./types/AxiosControllerTypes";

export default class AxiosController {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      insecureHTTPParser: true,
    });
  }
  async getStatus(baseURL: string): Promise<GetStatus> {
    try {
      const response = await this.client.get(
        `${baseURL}/goform/getStatus?random=${Math.random()}&modules=internetStatus%2CdeviceStatistics%2CsystemInfo%2CwanAdvCfg`
      );
      if (response.data) {
        return response.data as GetStatus;
      } else {
        throw {
          message: "Erro na requisição",
        };
      }
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error trying to get status:", error.message);
      throw error;
    }
  }

  async getInternetStatus(baseURL: string): Promise<InternetStatus> {
    try {
      const response = await this.client.get(
        `${baseURL}/goform/getStatus?random=${Math.random()}&modules=internetStatus`
      );
      if (response.data) {
        console.log("Esta aqui: ", response.data);
        return response.data as InternetStatus;
      } else {
        throw {
          message: "Erro na requisição",
        };
      }
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error trying to get internet status:", error.message);
      throw error;
    }
  }

  async isIPConflict(baseURL: string): Promise<IPConflict> {
    try {
      const response = await fetch(`${baseURL}/goform/isIPConflict`, {
        headers: {
          Accept: "*/*",
        },
        credentials: "include", // equivalente a withCredentials: true
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      console.log("ip config: ", data);
      return data as IPConflict;
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error IPConfigError:", error.message);
      throw error;
    }
  }
}

//{
//headers: {
//Accept: "*/*",
//Cookie: cookieHeader,
//"Accept-Encoding": "gzip, deflate",
//Connection: "keep-alive",
//},
//withCredentials: true,
//}
