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

export const fetchFilmsInfo = (your_API, movieID) => (dispatch, getState) => {
    return axios.get(`https://www.omdbapi.com/?apikey=${your_API}&i=${movieID}&plot=full`)
        .then(response => {
            dispatch(storeUserInfoAction(response.data));
            return response.data
        })
        .catch(error => console.log(error));
};

export const searchListOfFilms = (API, searchQuery) => (dispatch, getState) => {
    return axios.get(`https://www.omdbapi.com/?apikey=${API}&s=${searchQuery}&plot=full`)
        .then(response => {
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
