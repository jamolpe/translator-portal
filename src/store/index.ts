import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from './middlewares/logger';

const composEnhancers = compose;
const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}
const store = createStore(
  rootReducer,
  composEnhancers(applyMiddleware(...(middlewares as Middleware[])))
);

export default store;
