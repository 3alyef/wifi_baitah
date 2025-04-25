import { errorMsg } from "@/features/router/types";
import axios, { AxiosInstance } from "axios";

export default class AxiosController {
  public client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      withCredentials: true,
      insecureHTTPParser: true,
    });
  }
  async getStatus(baseURL: string) {
    try {
      const response = await this.client.get(
        `${baseURL}/goform/getStatus?random=${Math.random()}&modules=internetStatus%2CdeviceStatistics%2CsystemInfo%2CwanAdvCfg`
      );

      console.log("Esta aqui: ", response.data);
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error trying to get status:", error.message);
      throw error;
    }
  }

  async getInternetStatus(baseURL: string) {
    try {
      const response = await this.client.get(
        `${baseURL}/goform/getStatus?random=${Math.random()}&modules=internetStatus`
      );
      console.log("Resposta:", response.data);
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error trying to get internet status:", error.message);
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
