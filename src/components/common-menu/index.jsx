import * as React from 'react';
import './style/index.scss';

// as ng-repeat for menu

function CommonMenu(props) {
    return (
        <ul className="common-menu">
            <li className="favorite"><a>Favorites</a></li>
            <li className="messages"><a>Messages</a></li>
        </ul>
    );
}
export default CommonMenu;
