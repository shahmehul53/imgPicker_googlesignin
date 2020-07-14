/**
 * The main index file for all the reducers (RootReducer).
 */

import { combineReducers } from 'redux';
import auth from './modules/auth/auth';
import common from './modules/common/common';


export default combineReducers({
    auth: auth,
    common: common
})