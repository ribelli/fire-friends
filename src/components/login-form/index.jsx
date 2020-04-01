import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style/index.scss';
import { userLoginAction } from '../../store/actions/authentication-actions.js';
import { validateLogin } from '../../helpers/registration-helpers.js';
import { withTranslation } from 'react-i18next';


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

    // componentDidUpdate = () => {
    //     this.updateHistory();
    // };

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
            this.props.history.push('/registration');
        } else if (to === 'resetPassword') {
            this.props.history.push('/reset/password');
        } else {
            this.props.history.push('/login');
        }
    };

    render() {
        const {t} = this.props;

        return (
            <form className='login-form' onSubmit={this.onSubmitHandler} >
                {this.state.invalidEmail ?
                    <p className='invalid-format'>
                        {t('main.registration.usernameRequired')}
                    </p> : ''}
                <input type='text' required
                       className='login-form__input'
                       name='email'
                       title={t('main.profile.username')}
                       placeholder={t('main.profile.username')}
                       value={this.state.email}
                       onChange={this.onChangeHandler} />
                {this.state.invalidPassword ?
                    <p className='invalid-format'>
                        {t('main.registration.passwordRequired')}
                    </p> : ''}
                <input type='password' required
                       className='login-form__input'
                       name='password'
                       title={t('main.profile.password')}
                       placeholder={t('main.profile.password')}
                       value={this.state.password}
                       onChange={this.onChangeHandler}
                />
                <p className='invalid-format'>
                    {this.state.invalidCredentials ? 'The entered credentials are invalid' : ''}
                </p>
                <button className='fr-button _dark _bordered'>{t('main.registration.login')}</button>
                <div className='login-alternatives-container'>
                    <p className='message'>
                        {t('main.registration.nonRegistered')} <span onClick={() => this.redirectHandler('registration')} >
                        {t('main.registration.createAccount')}</span>
                    </p>
                    {this.state.invalidCredentials ? <p className='message'>{t('main.registration.forgotPassword')}
                            <span onClick={() => this.redirectHandler('resetPassword')} >
                                Get reset token
                            </span>
                        </p> : '' }
                </div>
            </form>
        );
    };
}

const mapStateToProps = state => {
    return {
        auth: state.authenticationReducer.authenticated
    };
};

export default withTranslation()(connect(mapStateToProps)(withRouter(LoginRegistrationForm)));
