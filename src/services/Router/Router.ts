import { NetworkInfo } from "react-native-network-info";

export default class Router {
  private baseURL: string;

  constructor() {
    this.baseURL = "";
  }

  async init() {
    await this.setBaseURL();
  }

  private async setBaseURL() {
    try {
      const ip = await NetworkInfo.getGatewayIPAddress();
      if (ip) {
        this.baseURL = ip;
      }
    } catch (err) {
      console.error("Erro ao obter o IP do roteador:", err);
    }
  }
  getBaseURL() {
    return this.baseURL;
  }
}
