import { encryptBase64 } from "@/utils/base64";
import { NetworkInfo } from "react-native-network-info";
import CookieManager from "@react-native-cookies/cookies";
import {
  errorMsg,
  routerError,
} from "@/features/router/types/routerErrorTypes";
import axios from "axios";

interface RouterCookies {
  httpOnly: boolean; // false
  path: string | null; // null
  domain: string | null; // null
  secure: boolean; // false
  value: string;
  name: string; // 'ecos_pw'
}
interface Ecos_pw {
  ecos_pw?: RouterCookies;
}

export default class Router {
  private baseURL: string;
  private Ecos_pw: Ecos_pw;

  constructor() {
    this.baseURL = "";
    this.Ecos_pw = {};
  }

  async defineBaseURL() {
    try {
      const ip = await NetworkInfo.getGatewayIPAddress();
      if (ip) {
        this.baseURL = `http://${ip}`;
      }
    } catch (err) {
      console.error("Erro ao obter o IP do roteador:", err);
    }
  }

  getBaseURL() {
    return this.baseURL;
  }

  getCookie() {
    if (this.Ecos_pw.ecos_pw) {
      return `bLanguage=pt; ecos_pw=${this.Ecos_pw.ecos_pw.value}`;
    }
    throw {
      message: routerError.COOKIE_UNDEFINED,
    };
  }

  async routerAuthWithPassword(password: string) {
    try {
      await CookieManager.clearAll();

      const response = await fetch(`${this.baseURL}/login/Auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Origin: this.baseURL,
          // "Referer": `${address}/login.html`, // descomente se quiser
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
          Cookie: "bLanguage=pt",
        },
        body: new URLSearchParams({
          password: encryptBase64(password),
        }).toString(),
      });

      const cookies = (await CookieManager.get(this.baseURL)) as Ecos_pw;
      console.log("from server: ", cookies);

      this.Ecos_pw = cookies;

      await this.getStatus(this.getCookie());

      if (!cookies.ecos_pw) {
        if (response.url.includes("login.html")) {
          throw {
            message: routerError.PASSWORD_INCORRECT,
          };
        }
        throw {
          message: routerError.SERVER_ERROR,
        };
      }
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error trying to log in:", error.message);
      throw error;
    }
  }

  async getStatus(cookieHeader: string) {
    try {
      console.log("Cookie: ", cookieHeader);

      const response = await axios.get(
        `${
          this.baseURL
        }/goform/getStatus?random=${Math.random()}&modules=internetStatus%2CdeviceStatistics%2CsystemInfo%2CwanAdvCfg`,
        {
          headers: {
            Accept: "*/*",
            Cookie: cookieHeader, //"bLanguage=pt; ecos_pw=ZWxldGVsOTM2OQ==ert:language=cn",
            "Accept-Encoding": "gzip, deflate",
            Connection: "keep-alive",
          },
          withCredentials: true,
        }
      );

      console.log("Esta aqui: ", response.data);
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error trying to get status:", error.message);
      throw error;
    }
  }
}
