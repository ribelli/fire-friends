import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style/index.scss';
import Avatar from '../avatar';
import EventCounter from '../event-counter';
import CommonDropdown from '../common-dropdown';

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    showDropdown() {
        this.setState({dropdownOpen: true});
    }

    hideDropdown() {
        let _this = this;
        setTimeout(() => {
            _this.setState({dropdownOpen: false});
        }, 2000, _this)
    }

    render() {
        const { t } = this.props;
        const spectator = 'Dr. Spectator';
        const user = this.props.user.basicData;

        return (
            <div className="user-card">
                <CommonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}/>
                <div className="avatar-layer"
                     onMouseOver={this.showDropdown}
                     onMouseLeave={this.hideDropdown}>
                    <Avatar content={this.props.user.avatarUrl} isDefaultSize={false} />
                    <EventCounter eventCounter={this.props.eventCounter}/>
                </div>
                <div>{t('main.greeting')},
                    <Link to='/profile'> {this.props.isNewFriend ? user.first_name : spectator}</Link>
                </div>
            </div>
        );
    }
}

export default withTranslation()(UserCard);
