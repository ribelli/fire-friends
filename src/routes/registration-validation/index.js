import React, { Component, Suspense } from 'react';

import RegistrationValidationForm from '../../components/registration-validation-form';


class RegistrationPage extends Component {
    render() {
        return (
            <Suspense fallback='loading'>
                <RegistrationValidationForm />
            </Suspense>
        );
    };
}

export default RegistrationPage;
