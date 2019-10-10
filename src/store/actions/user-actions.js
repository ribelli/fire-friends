//import axios from '../../axios.js';
import { STORE_USER_INFO } from '../types/types.js';

const storeUserInfoAction = user => {
    return {
        type: STORE_USER_INFO,
        user
    };
};


// export const fetchUserInfo = () => (dispatch, getState) => {
//     const token = localStorage.getItem('token');
//     const config = {
//         headers: {
//             Authorization: `Bearer ${JSON.parse(token)}`
//         }
//     };
//     return axios.get('/api/me/', config)
//         .then(response => {
//             dispatch(storeUserInfoAction(response.data));
//             return response.data
//         })
//         .catch(error => console.log(error));
// };
