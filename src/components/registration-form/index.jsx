import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style/index.scss';
import { validateRegistrationValidation } from '../../helpers/registration-helpers.js';
import { userRegistrationAction, userLoginAction } from '../../store/actions/authentication-actions.js';
import {withTranslation} from 'react-i18next';


class RegistrationForm extends Component {
    state = {
        username: '',
        password: '',
        email: '',

        last_name: '',
        first_name: '',
        //token: '',
        //password_repeat: '',
        email_valid: true,
        username_valid: true,
        //token_valid: true,
        //password_valid: true,
        //passwords_identical: true,
        credentials_valid: true
    };

    clearState() {
        this.setState({
            username: '',
            password: '',
            email: '',

            first_name: '',
            last_name: '',
            //token: '',
            //password_repeat: '',
            email_valid: true,
            username_valid: true,
            //token_valid: true,
            //password_valid: true,
            //passwords_identical: true,
            credentials_valid: true
        });
    };

    onChangeHandler = event => {
        const name = event.currentTarget.name;
        this.setState({
            [name]: event.currentTarget.value
        });
    };

    submitHandler = event => {
        event.preventDefault();
        let validated_data = validateRegistrationValidation(this.state);
        if (Object.values(validated_data).includes(false)) {
            this.setState({
                email_valid: validated_data.email,
                username_valid: validated_data.username,
                //token_valid: validated_data.token,
                //password_valid: validated_data.password_valid,
                //passwords_identical: validated_data.passwords_identical
            });
        } else {
            this.props.dispatch(userRegistrationAction(
                this.state.username, this.state.first_name,this.state.last_name, this.state.password, this.state.email)) //this.state
                .then((data) => {
                    if (data) {
                        this.props.dispatch(userLoginAction(this.state.username, this.state.password))
                            .then(() => {
                                this.clearState();
                                this.props.history.push('/')
                            });
                    } else {
                        this.setState({
                            email_valid: true,
                            username_valid: true,
                            //token_valid: true,
                            //password_valid: true,
                            //passwords_identical: true,
                            credentials_valid: false
                        });
                    }
                });
        }
    };

    redirectHandler = to => {
        if (to === 'login') {
            this.props.history.push('/login')
        } else {
            this.props.history.push('/reset/token');
        }
    };

    render() {
        const {t} = this.props;
        return (
            <div className='registration-container'>
                <form className='registration-form' onSubmit={this.submitHandler}>
                    <p className='invalid-format'>{this.state.credentials_valid ? '' : 'Invalid email'}</p>
                    {this.state.email_valid ? '' : <p className='invalid-format'>{t('main.registration.emailRequired')}</p>}
                    <input type='text'
                           className='fr-input'
                           name='email'
                           placeholder='email*'
                           value={this.state.email}
                           onChange={this.onChangeHandler} />
                    <p className='invalid-format'>
                        {this.state.username_valid ? '' : 'Please enter a username address'}
                    </p>
                    <input type='text'
                           className='fr-input'
                           name='username'
                           title={t('main.profile.username')}
                           placeholder={`${t('main.profile.username')}*`}
                           value={this.state.username}
                           onChange={this.onChangeHandler} />
                    <input type='text'
                           className='fr-input'
                           name='first_name'
                           title={t('main.profile.firstName')}
                           placeholder={t('main.profile.firstName')}
                           value={this.state.first_name}
                           onChange={this.onChangeHandler} />
                    <input type='text'
                           className='fr-input'
                           name='last_name'
                           title={t('main.profile.lastName')}
                           placeholder={t('main.profile.lastName')}
                           value={this.state.last_name}
                           onChange={this.onChangeHandler} />
                    <p className='invalid-format'>
                        {/*{this.state.token_valid ? '' : 'Please enter the token we sent you per mail'}*/}
                    </p>
                    {/*<input type='text'*/}
                    {/*       className='fr-input'*/}
                    {/*       name='token'*/}
                    {/*       placeholder='registration token*'*/}
                    {/*       value={this.state.token}*/}
                    {/*       onChange={this.onChangeHandler} />*/}
                    {!this.state.password_valid ? <p className='invalid-format'>
                         {t('main.registration.passwordRules')}
                    </p>: ''}
                    <input type='password'
                           className='fr-input'
                           name='password'
                           title={t('main.profile.password')}
                           placeholder={`${t('main.profile.password')}*`}
                           value={this.state.password}
                           onChange={this.onChangeHandler}/>
                    {this.state.passwords_identical ? '' :
                        <p className='invalid-format'>{t('main.registration.wrongRepeatPasswords')}</p>}
                    {/*<input type='password'*/}
                    {/*       className='fr-input'*/}
                    {/*       name='password_repeat'*/}
                    {/*       placeholder='repeat password*'*/}
                    {/*       value={this.state.password_repeat}*/}
                    {/*       onChange={this.onChangeHandler} />*/}
                    <button className='fr-button _dark _bordered'>{t('main.registration.register')}</button>
                    <p className='message'>{t('main.registration.existingUser')}
                        <span onClick={()=> this.redirectHandler('login')}> {t('main.registration.login')}</span>
                    </p>
                </form>
            </div>
        );
    };
}

export default withTranslation()(connect()(withRouter(RegistrationForm)));
