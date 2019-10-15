import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { validateEmail } from '../../helpers/registration-helpers.js';
import { userRegistrationAction } from '../../store/actions/authentication-actions.js';


class RegistrationTokenForm extends Component {
    state = {
        email: '',
        email_valid: true,
        email_error_message: 'Email address in invalid format'
    };

    emailHandler = event => {
        this.setState({
            email: event.currentTarget.value
        });
    };

    clearState() {
        this.setState({
            email: '',
            email_valid: true,
            email_error_message: 'Email address in invalid format'
        });
    };

    submitHandler = event => {
        event.preventDefault();
        if (validateEmail(this.state.email)) {
            this.props.dispatch(userRegistrationAction(this.state.email))
                .then(data => {
                    if (data) {
                        this.props.history.push('/registration/validation')
                    } else {
                        this.setState({
                            email_error_message: 'This email address is already registered'
                        });
                    }
                });
        } else {
            this.setState({
                email_valid: false
            });
        }
    };

    redirectHandler = () => {
        this.props.history.push('/login');
    };

    render() {
        return (
            <div className='reset-password-token-form-container'>
                <div className='form'>
                    <form onSubmit={this.submitHandler} >
                        <p className='invalid-format'>
                            {this.state.email_valid ? '' : this.state.email_error_message}
                        </p>
                        <input type='text'
                               placeholder='email address*'
                               value={this.state.email}
                               onChange={this.emailHandler} />
                        <button>get token</button>
                        <p className='message'>
                            <span onClick={() => this.redirectHandler()}>
                            Go back to login
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        );
    };
}

export default connect()(withRouter(RegistrationTokenForm));
