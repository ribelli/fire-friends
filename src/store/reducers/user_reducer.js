import { STORE_USER_INFO } from '../types/types.js';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case STORE_USER_INFO:
            return {
                ...state,
                username: action.user.username,
                email: action.user.email,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
            };

        default:
            return state;
    }
};

export default userReducer;
