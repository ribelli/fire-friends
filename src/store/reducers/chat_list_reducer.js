import { CHAT_USERS_LIST } from '../types/types';

const chatListReducer = (state = {}, action) => {
    switch (action.type) {
        case CHAT_USERS_LIST: {
            const newState = {
                ...state,
                results: action.results,
            };
            return newState
        }
        default:
            return state
    }
};

export default chatListReducer;
