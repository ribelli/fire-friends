
import authenticationReducer from './authentication_reducer.js'
// import errorReducer from './error_reducer.js';
// import settingsReducer from './settings_reducer.js';

import userReducer from './user_reducer.js';
import {combineReducers} from "redux";

/**
 * @return {string}
 */
const masterReducer = combineReducers( {
    authenticationReducer,
    userReducer
});

export default masterReducer;



