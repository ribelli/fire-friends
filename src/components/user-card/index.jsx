import * as React from 'react';
import Avatar from "../avatar";
import UserInfo from "../user-info";
import './style/index.scss'
import EventCounter from "../event-counter";

function UserCard(props) {
    return (
        <div className="user-card">
            <div className="avatar-layer">
                <Avatar user={props.user} />
                <EventCounter eventCounter={props.eventCounter} />
            </div>
            <UserInfo user={props.user} />
        </div>
    );
}

export default UserCard;
