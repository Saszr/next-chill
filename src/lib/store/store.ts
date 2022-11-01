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

import userSlice from './slices/user.slice';
import web3Slice from './slices/web3.slice';
import hackerNewsService from './api/example.service';

const rootReducer = combineReducers({
  [hackerNewsService.reducerPath]: hackerNewsService.reducer,
  user: userSlice,
  web3: web3Slice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'web3/setWeb3Provider'],
        ignoredPaths: ['web3.provider', 'web3.web3Provider'],
      },
    }),

    // service middleware
    hackerNewsService.middleware,
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
