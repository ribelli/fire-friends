import React, { Component } from 'react';
import './style/index.scss';
import UserCard from "../user-card";
import CommonMenu from "../common-menu";
import { Link } from 'react-router-dom';
import GlobalSearch from "../global-search";
// import Avatar from "../avatar";
// import EventCounter from  "../event-counter";

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
                <div className="header-line">
                    <Link to="/" className="logo">Friends</Link>
                    <CommonMenu/>
                    <GlobalSearch/>
                    <UserCard user={comment.author} eventCounter={comment.action}/>
                </div>
            </header>
        );
    }
}
export default Header;
