import * as React from 'react';
import './style/avatar.scss';


function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />

    );
}

export default Avatar;
