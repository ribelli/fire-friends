import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style/index.scss';

import { userLoginAction } from '../../store/actions/authentication-actions.js';
import { validateLogin } from '../../helpers/registration-helpers.js';


class LoginRegistrationForm extends Component {
    state = {
        email: '',
        password: '',
        invalidEmail: false,
        invalidPassword: false,
        invalidCredentials: false
    };

    componentDidMount = () => {
        this.updateHistory();
    };

    componentDidUpdate = () => {
        this.updateHistory();
    };

    onChangeHandler = event => {
        const name = event.currentTarget.name;
        this.setState({
            [name]: event.currentTarget.value
        });
    };

    onSubmitHandler = event => {
        event.preventDefault();
        let credentials = validateLogin(this.state);
        if (credentials.validated_credentials) {
            this.props.dispatch(userLoginAction(this.state.email, this.state.password))
                .then(data => {
                    if (data) {
                        this.props.history.push('/');
                    } else {
                        this.setState({
                            invalidEmail: false,
                            invalidPassword: false,
                            invalidCredentials: true
                        });
                    }
                });
        } else {
            this.setState({
                invalidEmail: !credentials.email,
                invalidPassword: !credentials.password
            });
        }
    };

    updateHistory() {
        if (this.props.auth) {
            this.props.history.push('/');
        }
    }

    redirectHandler = to => {
        if (to === 'registration') {
            this.props.history.push('/registration/token');
        } else if (to === 'resetPassword') {
            this.props.history.push('/reset/token');
        } else {
            this.props.history.push('/login');
        }
    };

    render() {
        return (
            <form className='login-form' onSubmit={this.onSubmitHandler} >
                <p className='invalid-format'>
                    {this.state.invalidEmail ? 'Please enter your username' : ''}
                </p>
                <input type='text'
                       className='login-form__input'
                       name='email'
                       placeholder='username*'
                       value={this.state.email}
                       onChange={this.onChangeHandler} />
                <p className='invalid-format'>
                    {this.state.invalidPassword ? 'Please enter your password' : ''}
                </p>
                <input type='password'
                       className='login-form__input'
                       name='password'
                       placeholder='password*'
                       value={this.state.password}
                       onChange={this.onChangeHandler}
                />
                <p className='invalid-format'>
                    {this.state.invalidCredentials ? 'The entered credentials are invalid' : ''}
                </p>
                <button className='login-form__button'>login</button>
                <div className='login-alternatives-container'>
                    <p className='message'>
                        Not registered? <span onClick={() => this.redirectHandler('registration')} >
                        Create an account</span>
                    </p>
                    {
                        this.state.invalidCredentials ? <p className='message'>
                                Forgot password?
                            <span onClick={() => this.redirectHandler('resetPassword')} >
                                Get reset token
                            </span>
                        </p> : <></>
                    }
                </div>
            </form>
        );
    };
}

const mapStateToProps = state => {
    return {
        // auth: state.authenticationReducer.authenticated
    };
};

export default connect(mapStateToProps)(withRouter(LoginRegistrationForm));
