import * as React from 'react';
import './style/index.scss';

// add srcset for img

function Avatar(props) {
    return (
        <img className="user-avatar _rounded"
             src={props.user.avatarUrl}
             alt={props.user.name} />
    );
}

export default Avatar;
