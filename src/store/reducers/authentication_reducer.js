import { STORE_TOKEN, REMOVE_TOKEN } from '../types/types';

const authenticationReducer = (state = {authenticated: false}, action) => {
    switch (action.type) {
        case STORE_TOKEN: {
            const newState = {
                ...state,
                authenticated: action.authenticated,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
                error: action.error
            };
            return newState
        }
        case REMOVE_TOKEN: {
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

export default authenticationReducer;
