import { STORE_USER_INFO } from '../types/types.js';
import axios from '../../axios';

const storeUserInfoAction = user => {
    return {
        type: STORE_USER_INFO,
        user
    };
};


export const fetchUserInfo = () => (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: JSON.parse(token),
        }
    };
    return axios.get('/users/me', config)
        .then(response => {
            console.log(response);
            dispatch(storeUserInfoAction(response.data));
            return response.data
        })
        .catch(error => console.log(error));
};

export const changeUserInfo = (data) => (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: JSON.parse(token)
        }
    };
    return axios.put('/users/me', data, config)
        .then(response => {
            dispatch(storeUserInfoAction(response.data));
            return response.data
        })
        .catch(error => console.log(error));
};
