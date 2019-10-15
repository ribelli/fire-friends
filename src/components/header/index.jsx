import React, {Component, Suspense} from 'react';
import { Link } from 'react-router-dom';
import './style/index.scss';
import UserCard from "../user-card";
import CommonMenu from "../common-menu";
import GlobalSearch from "../global-search";
import LanguageSelect from "../language-select";

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Mr Kitty',
        id: '/profile',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
    action: {
        eventValue: 6,
    },
};

class Header extends Component {
    render() {
        return (
            <header className="top-bar _fixed _dark">
                <Suspense fallback='loading'>
                    <div className="header-line">
                        <Link to="/" className="logo">Friends</Link>
                        <CommonMenu/>
                        <GlobalSearch/>
                        <LanguageSelect/>
                        <UserCard user={comment.author}
                                  isNewFiend={this.props.isFriend}
                                  eventCounter={comment.action}/>
                    </div>
                </Suspense>
            </header>
        );
    }
}
export default Header;
