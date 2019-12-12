import { CHAT_USERS_LIST_ERROR } from '../types/types.js';

const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case CHAT_USERS_LIST_ERROR: {
            const newState = {
                ...state,
                authenticated: action.authenticated,
                accessToken: action.accessToken, // will be?
                refreshToken: action.refreshToken, // will be?
                error: action.error
            };
            return newState
        }

        default:
            return state;
    }
};

export default errorReducer;
