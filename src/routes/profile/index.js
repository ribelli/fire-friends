import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Avatar from "../../components/avatar";
import ProfileStatus from "../../components/profile-status";

import './style/index.scss';
import InterestsPersonalGraph from "../../components/interests-personal-graph";

const user = {
    date: new Date(),
    text: 'enjoy! azaza',
    author: {
        name: 'Mr Kitty',
        id: '/profile',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
    action: {
        eventValue: 6,
    },
};

class ProfilePage extends Component {

    render() {
        let isDefaultSize = true;

        return (
            <div className='profile-page'>
                <div className='user-info-block'>
                    Profile page
                    <div className='user-layout'>
                        <div className="avatar-container">
                            <Link to="/settings" aria-label="Go to Settings" title="Go to Settings">
                                <Avatar user={user.author} isDefaultSize={isDefaultSize} />
                            </Link>
                            <div>{user.author.name}</div>
                            <ProfileStatus/>
                        </div>
                        <div className='common-info-container'>
                            <InterestsPersonalGraph />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default ProfilePage;
