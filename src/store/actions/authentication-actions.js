
import { STORE_TOKEN, REMOVE_TOKEN } from '../types/types.js';
import {AxiosInstance as axios} from "axios";


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

export const  userLoginAction = (username, password) => (dispatch, getState) => {
    return axios.post('api/auth/token/', { username, password })
        .then(response => {
            dispatch(storeTokenAction(response.data.access, response.data.refresh));
            localStorage.setItem('token', JSON.stringify(response.data.access));
            return response.data;
        })
        .catch(error => console.log('error', error));
};

export const userRegistrationAction = email => (dispatch, getState) => {
    return axios.post('api/registration/', { email })
        .then(response => {
            return response;
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
