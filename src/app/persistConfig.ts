import AsyncStorage from "@react-native-async-storage/async-storage";

const routerPersistConfig = {
  key: "router",
  storage: AsyncStorage,
  whitelist: ["passwordB64"],
};

export default routerPersistConfig;
