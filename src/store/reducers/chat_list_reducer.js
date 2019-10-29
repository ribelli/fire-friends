import { CHAT_USERS_LIST, CHAT_USERS_LIST_ERROR } from '../types/types';

const chatListReducer = (state = {}, action) => {
    switch (action.type) {
        case CHAT_USERS_LIST: {
            const newState = {
                ...state,
                results: action.results,
            };
            return newState
        }
        case CHAT_USERS_LIST_ERROR: {
            const newState = {
                ...state,
                authenticated: action.authenticated,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
                error: action.error
            };
            return newState
        }
        default:
            return state
    }
};

export default chatListReducer;
