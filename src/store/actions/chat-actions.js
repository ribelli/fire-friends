import {CHAT_USERS_LIST, CHAT_USERS_LIST_ERROR} from "../types/types";
import axios from '../../axios';


const chatUserListActions = (results) => {
    return {
        type: CHAT_USERS_LIST,
        results
    };
};

export const getConversations = () => (dispatch) => {
    return axios.get('https://randomuser.me/api/?results=20').then(response => {
            dispatch(chatUserListActions(response.data));
            return response.data;
        })
        .catch(error => dispatch(fetchNoteErrorAction(error)));
    };

const fetchNoteErrorAction = error => ({
    type: CHAT_USERS_LIST_ERROR,
    error
});

