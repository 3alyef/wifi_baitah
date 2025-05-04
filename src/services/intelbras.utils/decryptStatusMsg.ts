import { SystemStatusCode } from "@/i18n/locales/types/system.type";

export type TypeStatusMsg =
  | "hardware problem"
  | "software problem"
  | "user problem"
  | "unknown"
  | "connected"
  | "connecting";

const statusMap: Record<SystemStatusCode, TypeStatusMsg> = {
  "/************WISP**************/": "unknown",
  "/*AP模式*/": "unknown",

  // STATIC0
  STATIC0: "unknown",
  "0101": "hardware problem", // WAN port unplugged
  "0102": "unknown", // Disconnected
  "0103": "connecting", // Connecting...Detecting the Internet...
  "0104": "connected", // Connected...Accessing the Internet...
  "0105": "software problem", // Can't surf the Internet
  "0106": "connected", // You can surf the Internet

  // DHCP0
  DHCP0: "unknown",
  "0201": "hardware problem", // WAN port unplugged
  "0202": "unknown", // Disconnected
  "0203": "connecting", // Connecting...Detecting the Internet...
  "0204": "connected", // Connected...Accessing the Internet...
  "0205": "software problem", // Obtained IP but no Internet
  "0206": "connected", // You can surf the Internet
  "0207": "user problem", // IP conflict
  "0208": "software problem", // No response from server

  // PPPoE
  PPPoE: "unknown",
  "0301": "hardware problem", // WAN port unplugged
  "0302": "software problem", // Disconnected // unknown
  "0303": "connecting", // Checking username/password...
  "0304": "connected", // Dial-up Successfully...Accessing Internet...
  "0305": "software problem", // Dial-up Successfully but no Internet
  "0306": "connected", // You can surf the Internet
  "0307": "user problem", // Wrong username/password
  "0308": "software problem", // No response from server

  // WISP (STATIC1)
  STATIC1: "unknown",
  "1102": "software problem", // No bridge yet
  "1103": "connecting", // Bridging in WISP mode...
  "1104": "connected", // Bridged successfully, trying Internet...
  "1105": "software problem", // Can't surf the Internet
  "1106": "connected", // Connected! You can surf the Internet
  "1107": "user problem", // Wrong WiFi password
  end0: "unknown",

  // WISP (DHCP1)
  DHCP1: "unknown",
  "1202": "software problem", // No bridge yet
  "1203": "connecting", // Bridging in WISP mode...
  "1204": "connected", // Bridged successfully, trying Internet...
  "1205": "software problem", // Got IP but no Internet
  "1206": "connected", // Connected! You can surf the Internet
  "1207": "user problem", // IP conflict
  "1208": "software problem", // No response from server
  "1209": "user problem", // Wrong WiFi password
  end1: "unknown",

  // WISP (PPPoE)
  "PPPoE ": "unknown",
  "1302": "software problem", // No bridge yet
  "1303": "connecting", // Checking username/password...
  "1304": "connected", // Dial-up Successfully...Accessing Internet...
  "1305": "software problem", // Dial-up Successfully but no Internet
  "1306": "connected", // You can surf the Internet
  "1307": "user problem", // Wrong username/password
  "1308": "software problem", // No response from server
  "1309": "user problem", // Wrong WiFi password

  // APClient (Universal Repeater)
  APClinet: "unknown",
  "2102": "software problem", // No bridge yet
  "2103": "connecting", // Bridging...
  "2104": "connected", // Bridged successfully
  "2202": "software problem", // No bridge yet
  "2203": "connecting", // Bridging...
  "2204": "connected", // Bridged successfully
  "2302": "software problem", // No bridge yet
  "2303": "connecting", // Bridging...
  "2304": "connected", // Bridged successfully
  "2107": "user problem", // Wrong WiFi password
  "2209": "user problem", // Wrong WiFi password
  "2309": "user problem", // Wrong WiFi password
};

export default function decryptStatusMsg(msg: SystemStatusCode): TypeStatusMsg {
  return statusMap[msg];
}
