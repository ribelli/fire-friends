import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer.js';
import chatListReducer from './chat_list_reducer';
import errorReducer from './error_reducer.js';
// import settingsReducer from './settings_reducer.js';
import userReducer from './user_reducer.js';

/**
 * @return {string}
 */
const masterReducer = combineReducers( {
    authenticationReducer,
    chatListReducer,
    errorReducer,
    userReducer,
    // add settingReducer (if settings be separate)
});

export default masterReducer;



