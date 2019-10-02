import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Star } from 'react-feather';
import './style/index.scss';

// as ng-repeat for menu

class CommonMenu extends Component {
    render() {
        return (
            <nav>
            <ul className="common-menu">
                <li className="favorite">
                    <Link to="/favorites">
                        <Star size='16'/>
                        <span className='common-menu__description'>Favorites</span>
                    </Link>
                </li>
                <li className="messages">
                    <Link to="/messages">
                        <Mail size='16' />
                        <span className='common-menu__description'>Messages</span>
                    </Link>
                </li>
            </ul>
            </nav>
        );
    }
}
export default CommonMenu;
