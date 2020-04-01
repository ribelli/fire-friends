import axios from '../../axios.js';
import { STORE_FAVORITE, FAVORITE_ERROR, UPDATE_FAVORITE_INFO_ERROR } from '../types/types.js';
// import { fetchUsersNotesAction } from './sidebar_actions.js';
// need so more fucking refactoring
// ******************** FETCH AND STORE FAVORITE ********************
const storeFavoriteAction = ({ title, info, comment }) => {
    return {
        type: STORE_FAVORITE,
        title,
        info,
        comment
    };
};

export const fetchFavoriteAction = id => (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`
        }
    };
    // debugger "id:2"
    axios.get(`api/favorite/${id}`, config)
        .then(response => {
            dispatch(storeFavoriteAction(response.data))
        }).catch(error => dispatch(fetchNoteErrorAction(error)));
};

const fetchNoteErrorAction = error => ({
    type: FAVORITE_ERROR,
    error
});

export const updateSnippetAction = (snippet, id) => (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(token)}`
        }
    };
    const data = {
        snippet
    };
    axios.patch(`/api/favorite/${id}/`, data, config)
        .then(() => dispatch(fetchFavoriteAction(id)))
        .catch(error => dispatch(updateFavoriteInfoErrorAction(error)))
};

const updateFavoriteInfoErrorAction = error => ({
    type: UPDATE_FAVORITE_INFO_ERROR,
    error
});

// export const updateNoteRelationAction = (movedNote, newParent, treeIndex) => (dispatch, getState) => {
//     const token = localStorage.getItem('token');
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${JSON.parse(token)}`
//         },
//     };
//     const parent = newParent ? newParent.id : '';
//     const data = {
//         parent,
//     };
//     return axios.patch(`/api/note/${movedNote.id}/`, data, config)
//         .then(response => {
//             dispatch(fetchUsersNotesAction(response.data.owner))
//             return response
//         })
//         .catch(error => console.log(error))
// };

// ******************** DELETE FAVORITE ********************
// export const deleteFavoriteAction = (id) => (dispatch, getState) => {
//     const token = localStorage.getItem('token');
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${JSON.parse(token)}`
//         },
//     };
//     return axios.delete(`/api/favorite/${id}/`, config)
//         .then(() => {
//             dispatch(fetchUsersFavoriteAction(1))
//         })
//         .catch(error => console.log(error))
// };

// ******************** CREATE FAVORITE ********************
// export const createNewFavoriteAction = title => (dispatch, getState) => {
//     const token = localStorage.getItem('token');
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${JSON.parse(token)}`
//         },
//     };
//     const data = {
//         title,
//     };
//     return axios.post(`/api/favorite/`, data, config)
//         .then(response => {
//             dispatch(fetchUsersNotesAction(response.data.owner))
//             return response
//         })
//         .catch(error => console.log(error))
// };
