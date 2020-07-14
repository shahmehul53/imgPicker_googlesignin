import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './index';
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';

const initialState = {}
const middleware = [thunk]
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware, logger)
    )
)
export default store
