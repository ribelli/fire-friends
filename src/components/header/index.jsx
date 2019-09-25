import * as React from 'react';
import './style/index.scss';
import UserCard from "../user-card";
import CommonMenu from "../common-menu";
import Avatar from "../avatar";
import EventCounter from  "../event-counter";

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Mr Kitty',
        id: 'http://localhost:3000/',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
    action: {
        eventValue: 6,
    },
};

function Header(props) {
    return (
        <header className="header-layer _dark">
            <div className="header-line">
                <a href="http://google.com" className="logo">Friends</a>
                <UserCard user={comment.author} eventCounter={comment.action} />
            </div>
            <CommonMenu />
        </header>
    );
}
export default Header;
