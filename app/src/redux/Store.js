//define your store here
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';
import logger from 'redux-logger';

const initialState = {};
const middleware = [thunk, logger];
// const store = createStore(() => [], {}, applyMiddleware())
const store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);
export default store;
