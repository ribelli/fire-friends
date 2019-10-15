import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style/index.scss';
import { validateRegistrationValidation } from '../../helpers/registration-helpers.js';
import { userRegistrationAction, userLoginAction } from '../../store/actions/authentication-actions.js';


class RegistrationValidationForm extends Component {
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

    redirectHandler = () => {
        this.props.history.push('/reset/token');
    };

    render() {
        return (
            <div className='registration-validation-container'>
                <form className='registration-validation-form' onSubmit={this.submitHandler}>
                    <p className='invalid-format'>{this.state.credentials_valid ? '' : 'Invalid email'}</p>
                    <p className='invalid-format'>{this.state.email_valid ? '' : 'Please enter your email address'}</p>
                    <input type='text'
                           className='registration-validation-form__input'
                           name='email'
                           placeholder='email*'
                           value={this.state.email}
                           onChange={this.onChangeHandler} />
                    <p className='invalid-format'>
                        {this.state.username_valid ? '' : 'Please enter a username address'}
                    </p>
                    <input type='text'
                           className='registration-validation-form__input'
                           name='username'
                           placeholder='username*'
                           value={this.state.username}
                           onChange={this.onChangeHandler} />
                    <input type='text'
                           className='registration-validation-form__input'
                           name='first_name'
                           placeholder='first name'
                           value={this.state.first_name}
                           onChange={this.onChangeHandler} />
                    <input type='text'
                           className='registration-validation-form__input'
                           name='last_name'
                           placeholder='last name'
                           value={this.state.last_name}
                           onChange={this.onChangeHandler} />
                    <p className='invalid-format'>
                        {/*{this.state.token_valid ? '' : 'Please enter the token we sent you per mail'}*/}
                    </p>
                    {/*<input type='text'*/}
                    {/*       className='registration-validation-form__input'*/}
                    {/*       name='token'*/}
                    {/*       placeholder='registration token*'*/}
                    {/*       value={this.state.token}*/}
                    {/*       onChange={this.onChangeHandler} />*/}
                    <p className='invalid-format'>
                        {this.state.password_valid ? '' : 'Password must contain a letter, digit, special character and have a length of 8 characters'}
                    </p>
                    <input type='password'
                           className='registration-validation-form__input'
                           name='password'
                           placeholder='password*'
                           value={this.state.password}
                           onChange={this.onChangeHandler}/>
                    <p className='invalid-format'>
                        {this.state.passwords_identical ? '' : 'The passwords do not match'}
                    </p>
                    {/*<input type='password'*/}
                    {/*       className='registration-validation-form__input'*/}
                    {/*       name='password_repeat'*/}
                    {/*       placeholder='repeat password*'*/}
                    {/*       value={this.state.password_repeat}*/}
                    {/*       onChange={this.onChangeHandler} />*/}
                    <button className='fr-button _dark _bordered'>register</button>
                    <p className='message'>
                        Need a new token? <span onClick={() => this.redirectHandler()} >Get new token</span>
                    </p>
                </form>
            </div>
        );
    };
}

export default connect()(withRouter(RegistrationValidationForm));
