import { configureStore } from "@reduxjs/toolkit";
import { teachersReducer } from "./teachers/slice";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const favoritesPersistConfig = {
  key: "teachers",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    teachers: persistReducer(favoritesPersistConfig, teachersReducer),
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
