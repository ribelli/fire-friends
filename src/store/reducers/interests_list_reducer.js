import { INTERESTS_LIST } from '../types/types';

const interestsListReducer = (state = {}, action) => {
    switch (action.type) {
        case INTERESTS_LIST: {
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

export default interestsListReducer;
