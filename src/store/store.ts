import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/auth-reducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware:
    process.env.ENV === 'prod'
      ? (getDefaultMiddleware) => getDefaultMiddleware()
      : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
