import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import InterestsPersonalGraph from "../../components/interests-personal-graph";
import './style/index.scss';

const groups = {
    date: new Date(),
    text: 'enjoy! azaza',
    name: 'English light',
    author: {
        name: 'Mr Kitty',
        id: '/profile',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
    action: {
        eventValue: 6,
    },
};

class GroupsPage extends Component {

    render() {
        return (
            <div className='groups-page'>
                <div className='group-info-block'>
                    Groups page
                    <div className='group-layout'>
                        <div className="avatar-container">
                            <div>{groups.name}</div>
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

export default GroupsPage;
