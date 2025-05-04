import { SystemStatusCode } from "./types/system.type";

export default interface TypeLocales {
  global: {
    wifi_habaitah: string;
    habaitah: string;
    password: {
      password: string;
      incorrect_password_entered: string;
      please_enter_a_valid_password: string;
    };
  };
  screens: {
    login: {
      login: string;
    };
  };
  system: {
    connectionStatus: string;
    statusMsg: Record<SystemStatusCode, string>;
  };
}
