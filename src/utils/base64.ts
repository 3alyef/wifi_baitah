import { btoa, atob } from "react-native-quick-base64";

export function encryptBase64(content: string) {
  return btoa(content);
}

export function decryptBase64(content: string) {
  return atob(content);
}
