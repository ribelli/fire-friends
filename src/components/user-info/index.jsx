import * as React from 'react';
import './style/index.scss';


function UserInfo(props) {
    return (
        <div>
            Hello, <a href={props.user.id}>{props.user.name}</a>
        </div>
    );
}

export default UserInfo;
