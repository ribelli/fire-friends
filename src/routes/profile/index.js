import React, { Component, Suspense } from 'react';

import './style/index.scss';
import InterestsPersonalGraph from '../../components/interests-personal-graph';
import Profile from '../../components/profile';
import LoadingSpinner from '../../components/loading-spinner';


class ProfilePage extends Component {
    render() {
        return (
            <Suspense fallback={<LoadingSpinner/>}>
                <div className="profile-page">
                    <div className="user-info-block">
                        <div className="user-layout">
                            <div className="common-info-container">
                                <InterestsPersonalGraph />
                                Profile page
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
