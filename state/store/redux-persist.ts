import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { recipeReducer } from "../favorites/reducer";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: ["data"],
};

const persistedReducer = persistReducer(persistConfig, recipeReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store, null, () => {
	console.log("Persisted successfully");
});

setInterval(() => {
	persistor.persist();
	console.log("Data persisted");
}, 3000);
