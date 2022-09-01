import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

import storage from './storage';

import { baseApi } from './api/base.service';
import userService from './api/user.service';
import userSlice from './slice/user.slice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    // service middleware
    userService.middleware,
  ];
  // if (process.env.NODE_ENV === 'development') {
  //   middlewareList.push(logger);
  // }
  return middlewareList;
};

export const rootStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});

export const persistor = persistStore(rootStore);

export type AppState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

setupListeners(rootStore.dispatch);
