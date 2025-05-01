import { encryptBase64 } from "@/utils/base64";
import CookieManager from "@react-native-cookies/cookies";
import { errorMsg, authError } from "@/features/auth/types/authErrorTypes";
import RouterUtils from "./utils/RouterUtils";
import { GetStatus } from "./utils/AxiosController/types/AxiosControllerTypes";

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

export default class Router extends RouterUtils {
  async init() {
    await this.defineBaseURL();
  }

  async cleanCookies() {
    await CookieManager.clearAll();
  }

  async routerAuthWithPassword(password: string) {
    try {
      await this.cleanCookies();
      this.validateCredentials(encryptBase64(password));
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error trying to log in:", error.message);
      throw error;
    }
  }

  async validateCredentials(passwordB64: string) {
    try {
      this.setPasswordB64(passwordB64);

      const response = await fetch(`${this.getBaseURL()}/login/Auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Origin: this.getBaseURL(),
          // "Referer": `${address}/login.html`, // descomente se quiser
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
          Cookie: "bLanguage=pt",
        },
        body: new URLSearchParams({
          password: this.getPasswordB64(),
        }).toString(),
      });

      const cookies = (await CookieManager.get(this.getBaseURL())) as Ecos_pw;

      if (!cookies.ecos_pw) {
        if (response.url.includes("login.html")) {
          throw {
            message: authError.PASSWORD_INCORRECT,
          };
        }
        throw {
          message: authError.SERVER_ERROR,
        };
      }
    } catch (err) {
      const error = err as errorMsg;
      console.log("Error trying to validate credentials:", error.message);
      throw error;
    }
  }

  async getStatus() {
    return await this.utilsStatus.getStatus(this.getBaseURL());
  }
}
