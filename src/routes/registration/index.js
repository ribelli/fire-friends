import React, { Component, Suspense } from 'react';

import RegistrationForm from '../../components/registration-form';


class RegistrationPage extends Component {
    render() {
        return (
            <Suspense fallback='loading'>
                <RegistrationForm />
            </Suspense>
        );
    };
}

export default RegistrationPage;
