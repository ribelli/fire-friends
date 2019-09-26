import React, { Component } from 'react';
import Avatar from "../avatar";
import UserInfo from "../user-info";
import './style/index.scss'
import EventCounter from "../event-counter";

class UserCard extends Component {
    render() {
        return (
            <div className="user-card">
                <div className="avatar-layer">
                    <Avatar user={this.props.user}/>
                    <EventCounter eventCounter={this.props.eventCounter}/>
                </div>
                <UserInfo user={this.props.user}/>
            </div>
        );
    }
}

export default UserCard;
