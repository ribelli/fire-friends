import React, { Component, Suspense } from 'react';

import './style/index.scss';
import InterestsPersonalGraph from "../../components/interests-personal-graph";
import Profile from "../../components/profile";

const user = {
    date: new Date(),
    text: 'enjoy! azaza',
    author: {
        username: 'Mr Kitty',
        firstName: 'Cat',
        id: '/profile',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
    action: {
        eventValue: 6,
    },
};

class ProfilePage extends Component {
    render() {
        return (
            <Suspense fallback='loading'>
                <div className='profile-page'>
                    <div className='user-info-block'>
                        Profile page
                        <div className='user-layout'>
                            <div className='common-info-container'>
                                <InterestsPersonalGraph />
                                <Profile />
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        );
    };
}

export default ProfilePage;
