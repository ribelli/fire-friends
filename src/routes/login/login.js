import React, { Component } from 'react';

import LoginForm from '../../components/login-form';


class LoginPage extends Component {
    render() {
        return (
            <div className='login-page'>
                <LoginForm />
            </div>
        );
    };
};

export default LoginPage;
