export interface InternetStatus {
  wanConnectStatus: string; //"11223010",
  newLanIP: string; //"218.227.284.252",
  lanWanIPConflict: string; //"false"
}

export interface GetStatus {
  internetStatus: InternetStatus;
  deviceStastics: {
    statusOnlineNumber: string; //"5",
    statusBlackNum: string; //"0",
    statusUpSpeed: string; //"32",
    statusDownSpeed: string; //"8",
    wifiRate: string; //"111",
    routerName: string; //"TEST-WIFI",
    extendName: string; //""
  };
  systemInfo: {
    wanConnectTime: string; //"522566"
    wanType: string; //"pppoe"
    statusWanMAC: string; //"81:8F:E8:DD:42:23"
    macHost: string; //"76:AF:2B:B3:19:E5",
    lanIP: string; //"10.0.1.1",
    statusWanMask: string; //"255.255.255.254",
    statusWanIP: string; //"100.100.9.131",
    statusWanGaterway: string; //"100.100.0.1",
    statusWanDns1: string; //"45.235.28.28",
    statusWanDns2: string; //"45.235.30.30",
    softVersion: string; //"1.2.5"
  };
  wanAdvCfg: {
    wanServerName: string; //"",
    wanServiceName: string; //"",
    wanType: string; //"pppoe",
    wanMTU: string; //"1480",
    wanMTUCurrent: string; //"1480",
    wanSpeed: string; //"Auto",
    wanSpeedCurrent: string; //"100",
    macClone: string; //"default",
    macRouter: string; //"80:8F:E8:DD:42:23",
    macWifiDevice: string; //"true",
    macHost: string; //"76:AF:7B:B3:19:E5",
    macCurrentWan: string; //"80:8F:E8:DD:22:23"
  };
}

export interface IPConflict {
  status: string; // '0'
  ip: string; // ''
}
