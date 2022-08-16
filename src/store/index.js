import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { wordReduser } from "./wordReduser";
import { testReduser } from "./testReduser";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReduser = combineReducers({ word: wordReduser, test: testReduser });

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
