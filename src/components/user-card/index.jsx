import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Avatar from "../avatar";
import './style/index.scss'
import EventCounter from "../event-counter";
import { Link } from "react-router-dom";

class UserCard extends Component {

    render() {
        const { t } = this.props;
        let isDefaultSize = false;
        let spectator = 'Dr. Spectator';
        return (
            <div className="user-card">
                <div className="avatar-layer">
                    <Link to='/profile'>
                        <Avatar user={this.props.user} isDefaultSize={isDefaultSize} />
                    </Link>
                    <EventCounter eventCounter={this.props.eventCounter}/>
                </div>
                <div>{t('main.greeting')},
                    <Link to={this.props.user.id}> {this.props.isNewFriends ? this.props.user : spectator}</Link>
                </div>
            </div>
        );
    }
}

export default withTranslation()(UserCard);
