import { createAPI } from "../services/api";
import { NameSpace } from "../const/const";
import { authSlice } from "./slices/auth";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "./slices/admin";
import { ticketSlice } from "./slices/tickets";
import { studioSlice } from "./slices/studio";
import { mainPageSlice } from "./slices/mainPage";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";



export const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    NameSpace.Auth,
    NameSpace.Admin,
    NameSpace.MainPage,
    NameSpace.Ticket,
  ], // Укажите здесь имена срезов состояния, которые нужно сохранить
};
export const reducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.Admin]: adminSlice.reducer,
  [NameSpace.Ticket]: ticketSlice.reducer,
  [NameSpace.Studio]: studioSlice.reducer,
  [NameSpace.MainPage]: mainPageSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const api = createAPI();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      // serializableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
