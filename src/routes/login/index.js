import React, {Component, Suspense} from 'react';
import LoginForm from '../../components/login-form';


class LoginPage extends Component {
    render() {
        return (
            <div className='login-page'>
                <Suspense fallback='loading'>
                    <LoginForm />
                </Suspense>
            </div>
        );
    };
}

export default LoginPage;
