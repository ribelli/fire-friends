import { STORE_TOKEN, REMOVE_TOKEN } from '../types/types.js';
import axios from '../../axios';

export const storeTokenAction = (accessToken, refreshToken) => {
    return {
        type: STORE_TOKEN,
        authenticated: true,
        accessToken,
        refreshToken,
        error: ''
    };
};

export const userLogoutAction = () => {
    return {
        type: REMOVE_TOKEN,
        authenticated: false,
        accessToken: null,
        refreshToken: null,
        error: ''
    };
};

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
    }
};

// This is for non-JSON cases
// const encodeForm = (data) => {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//         .join('&');
// };

export const  userLoginAction = (username, password) => (dispatch, getState) => {
    let formData = {username, password};
    return axios.post('/users/login', formData, config)
        .then(response => {
            console.log(response.data.token);
            dispatch(storeTokenAction(response.data.token, response.data.refresh));
            localStorage.setItem('token', JSON.stringify(response.data.token));
            return response.data;
        })
        .catch(error => console.log('error', error));
};

export const userRegistrationAction = (username, first_name, last_name, password, email) => (dispatch, getState) => {
    let formData = {username, first_name, last_name, password, email};
    console.log(formData)

    return axios.post('users/register', formData, config)
        .then(response => {
            return (response);
        }).catch(error => console.log('ERROR', error));
};

export const userRegistrationValidationAction = data => (dispatch, getState) => {
    let body = {
        email: data.email,
        username: data.username,
        code: data.token,
        password: data.password,
        password_repeat: data.password_repeat
    };
    if (data.first_name) {
        body['first_name'] = data.first_name;
    }
    if (data.last_name) {
        body['last_name'] = data.last_name;
    }
    return axios.post('api/registration/validate/', body)
        .then(() => {
            return dispatch(userLoginAction(body.username, body.password))
                .then(data => {
                    return data;
                });
        }).catch(error => console.log('ERROR', error));
};

export const resetPasswordTokenAction = email => (dispatch, getState) => {
    return axios.post('api/password-reset/', { email })
        .then(response => {
            return response;
        }).catch(error => console.log('ERROR', error));
};

export const resetUserPasswordAction = (email, code, password, password_repeat) => (dispatch, getState) => {
    return axios.post('api/password-reset/validate/', { email, code, password, password_repeat })
        .then(response => {
            return response;
        }).catch(error => console.log('ERROR', error));
};
