import AsyncStorage from "@react-native-async-storage/async-storage";

const routerPersistConfig = {
  key: "router",
  storage: AsyncStorage,
  whitelist: ["baseURL", "cookie"],
};

export default routerPersistConfig;
