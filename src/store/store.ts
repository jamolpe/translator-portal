import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/auth-reducer';
import projecReducer from './reducers/project/project-reducer';
import statusReducer from './reducers/status/status-reducer';
import logger from 'redux-logger';
import translationReducer from './reducers/translation/translation-reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projecReducer,
    status: statusReducer,
    translation: translationReducer
  },
  middleware:
    process.env.ENV === 'prod'
      ? (getDefaultMiddleware) => getDefaultMiddleware()
      : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
