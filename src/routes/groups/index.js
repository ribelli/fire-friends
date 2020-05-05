import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import GroupItem from "../../components/group-item";

const index = [
    {
        id: 149,
        name: 'English light',
        userValue: '149',
        text: 'enjoy!',
        author: {
            name: 'Mr Kitty',
            id: '/profile',
            avatarUrl: 'https://placekitten.com/g/64/64',
        },
        interestsGraph: {

        }
    },
    {
        id: 148,
        name: 'PC BOYARE TYT',
        userValue: '22',
        text: 'text',
        author: {
            name: 'Mr Kitty',
            id: '/profile',
            avatarUrl: 'https://placekitten.com/g/64/64',
        },
        interestsGraph: {

        }
    },
    {
        id: 88,
        name: 'Shelter for kitties',
        userValue: '146',
        text: 'This group for strangers who loves furry pussies from hell',
        author: {
            name: 'Mr Kitty',
            id: '/profile',
            avatarUrl: 'https://placekitten.com/g/64/64',
        },
        interestsGraph: {

        }
    },
    {
        id: 14,
        name: 'Shelter for woof-seniors',
        userValue: '149',
        text: 'This group for greatest people our planet. For awesome people',
        author: {
            name: 'Mr Kitty',
            id: '/profile',
            avatarUrl: 'https://placekitten.com/g/64/64',
        },
        interestsGraph: {
            'sports': {
                color: '#333555',
                percent: 32,
                inner : {
                    'mtb': 87,
                    'fixed-gear': 13
                }
            },
            'books': {
                color: '#af5da4',
                percent: 22,
                inner : {
                    'non-fiction': 100
                }
            }
        }
    }
];

class GroupsPage extends Component {

    render() {
        return (
            <div className='groups-page'>
                <div className='group-info-block'>
                    Groups page
                    <div className='group-layout'>
                        <GroupItem groups={index} />
                    </div>
                </div>
            </div>
        );
    };
}

export default GroupsPage;
