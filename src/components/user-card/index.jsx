import React, { Component } from 'react';
import Avatar from "../avatar";
import UserInfo from "../user-info";
import './style/index.scss'
import EventCounter from "../event-counter";
import {Link} from "react-router-dom";

class UserCard extends Component {

    render() {

        let isDefaultSize = false;
        return (
            <div className="user-card">
                <div className="avatar-layer">
                    <Link to='/profile'>
                        <Avatar user={this.props.user} isDefaultSize={isDefaultSize} />
                    </Link>
                    <EventCounter eventCounter={this.props.eventCounter}/>
                </div>
                <UserInfo user={this.props.user}/>
            </div>
        );
    }
}

export default UserCard;
