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
    internetConnectionStatus: {
      Internet_Connection_Status: string;
      Connection_Status: string;
    };
    devicesStatistics: {
      Attached_Devices_and_Real_time_Statistics: string;
    };
    systemInfo: {
      System_Info: string;
      Connection_Type: string;
      Connection_Duration: string;
      WAN_MAC: string;
      LAN_IP: string;
      Firmware_Version: string;
      WAN_IP: string;
      Subnet_Mask: string;
      Default_Gateway: string;
      Preferred_DNS_Server: string;
      Alternative_DNS_Server: string;
    };
    statusMsg: Record<SystemStatusCode, string>;
  };
}

//'Attached Devices and Real-time Statistics'
