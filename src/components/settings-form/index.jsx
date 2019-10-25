import React, { Component } from 'react';
import './style/index.scss';
import Select from 'react-select';
import {withTranslation} from 'react-i18next';
import {changeUserInfo, fetchUserInfo} from "../../store/actions/user-actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const countryOptions = [
    { value: 'RU', label: 'Russia' },
    { value: 'FI', label: 'Finland' },
    { value: 'US', label: 'USA' },
    { value: 'SE', label: 'Sweden' },
    { value: 'CH', label: 'China' },
    { value: 'CA', label: 'Canada' },
];

let yearMap = () => {
    let arr = [];
    for(let i = 1900; i < 2010; i++){
        arr.push({ value : i, label: i})
    }
    return arr;
};

const yearOptions = yearMap();
class SettingsForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username:  '',
            email: '',
            first_name: '',
            last_name: '',
            city: '',
            bio: '',
            selected_country: null,
            selected_year: null,
            initialData: false,
            user_update_success: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.auth) {
            this.props.dispatch(fetchUserInfo())
                .then(data => this.setState({
                    username: data.username,
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name
                }));
        }
    }

    componentDidUpdate() {
        if (!this.state.initialData && this.props.username) {
            this.setState({
                initialData: true,
                username: this.props.username,
                email: this.props.email,
                first_name: this.props.first_name,
                last_name: this.props.last_name,
            });
        }
    };

    handleSelectCountryChange = selected_country => {
        this.setState(
            { selected_country },
            () => console.log(`Option selected:`, this.state.selected_country)
        );
    };

    handleSelectYearChange = selected_year => {
        this.setState(
            { selected_year },
            () => console.log(`Option selected:`, this.state.selected_year)
        );
    };

    handleChange (event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username
        };
        this.props.dispatch(changeUserInfo(data))
            .then(data => {
                if (data) {
                    console.log('YEAP');
                } else {
                    this.setState({
                    });
                }
            });
    };

    render() {
        const {t} = this.props;
        const { username, email, first_name, last_name, selected_country, city, selected_year, bio } = this.state;
        return(
                <form onSubmit={this.handleSubmit} className="settings-form">
                    <div className="input-container">
                        <input className='fr-input' type='text'
                               tabIndex="1"
                               placeholder={t('main.profile.usernameTip')}
                               value={username}
                               onChange={this.handleChange}
                               name='username' />
                        <label htmlFor='username' className='fr-label'>
                            {t('main.profile.username')}
                        </label>
                    </div>
                    <div className="input-container">
                        <input className='fr-input' type='text'
                               tabIndex="2"
                               placeholder={t('main.profile.email')}
                               value={email}
                               onChange={this.handleChange}
                               name='email' />
                        <label htmlFor='email' className='fr-label'>
                            {t('main.profile.email')}
                        </label>
                    </div>
                    <div className="input-container">
                        <input className='fr-input' type='text'
                               tabIndex="3"
                               placeholder={t('main.profile.firstNameTip')}
                               value={first_name}
                               onChange={this.handleChange}
                               name='first_name' />
                        <label htmlFor='first_name' className='fr-label'>
                            {t('main.profile.firstName')}
                        </label>
                    </div>
                    <div className="input-container">
                        <input className='fr-input' type='text'
                               tabIndex="4"
                               placeholder={t('main.profile.lastName')}
                               value={last_name}
                               onChange={this.handleChange}
                               name='last_name' />
                        <label htmlFor='last_name' className='fr-label'>
                            {t('main.profile.lastName')}
                        </label>
                    </div>
                    <div className="input-container">
                        <Select
                            classNamePrefix='select-list'
                            placeholder={t('main.profile.country')}
                            value={selected_country}
                            onChange={this.handleSelectCountryChange}
                            options={countryOptions}
                            tabIndex="5"
                            isSearchable={true}/>
                    </div>
                    <div className="input-container">
                        <input className='fr-input' type='text'
                               tabIndex="6"
                               value={city}
                               placeholder={t('main.profile.city')}
                               onChange={this.handleChange}
                               name='city' />
                        <label htmlFor='city' className='fr-label'>
                            {t('main.profile.city')}
                        </label>
                    </div>
                    <div className="input-container">
                        <Select
                            classNamePrefix='select-list'
                            placeholder={t('main.profile.birth')}
                            value={selected_year}
                            onChange={this.handleSelectYearChange}
                            options={yearOptions}
                            tabIndex="7"
                            isSearchable={true}/>
                    </div>
                    <div className="input-container">
                        <textarea className='fr-textarea _indented'
                                  value={bio}
                                  placeholder={t('main.profile.aboutYourself')}
                                  rows={3}
                                  tabIndex="8"
                                  spellCheck="true"
                                  onChange={this.handleChange}
                                  name='bio' />
                        <label htmlFor='bio' className='fr-label'>
                            Bio
                        </label>
                    </div>
                    <button className='fr-button _dark _bordered'
                            tabIndex="9" type='submit'>
                        {t('main.actions.save')}
                    </button>
                </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.userReducer.username,
        email: state.userReducer.email,
        first_name: state.userReducer.first_name,
        last_name: state.userReducer.last_name,
        auth: state.authenticationReducer.authenticated
        //edit_user: state.settingsReducer.edit_user,
    };
};

export default withTranslation()(connect(mapStateToProps)(withRouter(SettingsForm)));
