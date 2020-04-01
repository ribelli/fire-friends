import React, { Component, Suspense } from 'react';
import RegistrationForm from '../../components/registration-form';
import './style/index.scss';

class RegistrationPage extends Component {
    render() {
        return (
            <Suspense fallback='loading'>
                <div className='registration-container'>
                    <RegistrationForm />
                </div>
            </Suspense>
        );
    };
}

export default RegistrationPage;
