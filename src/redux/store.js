import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from "redux-state-sync";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { userSlice } from "./user";
const RootReducer = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const middlewares = [
  createStateSyncMiddleware({
    blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
  }),
];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares),
});

initStateWithPrevTab(store);
export default store;

export const Persistor = persistStore(store);
