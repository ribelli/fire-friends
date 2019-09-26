import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/index.scss';

// as ng-repeat for menu

class CommonMenu extends Component {
    render() {
        return (
            <nav>
            <ul className="common-menu">
                <li className="favorite"><Link to="/favorites">Favorites</Link></li>
                <li className="messages"><Link to="/messages">Messages</Link></li>
            </ul>
            </nav>
        );
    }
}
export default CommonMenu;
