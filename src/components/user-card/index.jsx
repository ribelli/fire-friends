import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Avatar from "../avatar";
import './style/index.scss';
import EventCounter from "../event-counter";
import { Link } from "react-router-dom";

class UserCard extends Component {

    render() {
        const { t } = this.props;
        const spectator = 'Dr. Spectator';
        const user = this.props.user.basicData;

        return (
            <div className="user-card">
                <div className="avatar-layer">
                    <Link to='/profile'>
                        <Avatar content={this.props.user.avatarUrl} isDefaultSize={false} />
                    </Link>
                    <EventCounter eventCounter={this.props.eventCounter}/>
                </div>
                <div>{t('main.greeting')},
                    <Link to='/profile'> {this.props.isNewFiend ? user.first_name : spectator}</Link>
                </div>
            </div>
        );
    }
}

export default withTranslation()(UserCard);
