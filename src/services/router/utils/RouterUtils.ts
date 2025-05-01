import CookieManager from "@react-native-cookies/cookies";
import AxiosController from "./AxiosController/AxiosController";
import { NetworkInfo } from "react-native-network-info";
import { authError } from "@/features/auth/types";

interface RouterCookies {
  httpOnly: boolean; // false
  path: string | null; // null
  domain: string | null; // null
  secure: boolean; // false
  value: string;
  name: string; // 'ecos_pw'
}
export interface Ecos_pw {
  ecos_pw?: RouterCookies;
}

export default abstract class RouterUtils {
  public utilsStatus: AxiosController;
  private baseURL: string;
  private Ecos_pw: Ecos_pw;
  private passwordB64: string;
  constructor() {
    this.utilsStatus = new AxiosController();
    this.baseURL = "";
    this.Ecos_pw = {};
    this.passwordB64 = "";
  }

  public getBaseURL() {
    return this.baseURL;
  }

  public async getCookie() {
    const cookie = (await CookieManager.get(this.getBaseURL())) as Ecos_pw;
    if (cookie.ecos_pw) {
      return `bLanguage=pt; ecos_pw=${cookie.ecos_pw.value}`;
    }
    console.error("That: ", this.Ecos_pw, authError.COOKIE_UNDEFINED);
    throw {
      message: authError.COOKIE_UNDEFINED,
    };
  }

  public getPasswordB64() {
    return this.passwordB64;
  }

  protected setPasswordB64(passwordB64: string) {
    this.passwordB64 = passwordB64;
  }

  protected async cleanCookies() {
    await CookieManager.clearAll();
  }

  protected async defineBaseURL() {
    try {
      const ip = await NetworkInfo.getGatewayIPAddress();
      if (ip) {
        this.baseURL = `http://${ip}`;
      }
    } catch (err) {
      console.error("Erro ao obter o IP do roteador:", err);
    }
  }
}
