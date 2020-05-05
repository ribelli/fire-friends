import React, { Suspense, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import './style/index.scss';
import WorldMap from '../users-map';
import i18n from 'i18next';
import Avatar from '../avatar';
// import UsersMap from '../users-map';

const mockProfile = {
    id: 0,
    name: 'Carlo',
    userName: 'Carlo',
    avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
    age: 27,
    country: 'SP',
    city: 'Madrid'
};

const Main = () => {
    function getCurrentLng () {
        return i18n.language || window.localStorage.i18nextLng || '';
    }

    const currentLanguage = getCurrentLng();
    const [content, setContent] = useState('');
    return (
        <Suspense fallback="loading">
            <div className="main">
                <div>
                    This is my page
                    <Avatar title="Go to Settings"
                            content={mockProfile.avatarUrl}
                            isDefaultSize={true}/>
                            <div>{mockProfile.userName}</div>
                </div>

                <h1>Welcome to fire-friends</h1>
                <div className="c-main">
                    <div className="c-info">
                        <WorldMap currentLanguage={currentLanguage} setTooltipContent={setContent} />
                        <ReactTooltip>{content}</ReactTooltip>
                        {/*<UsersMap />*/}
                    </div>
                    {/*<div className="c-login">*/}
                    {/*    <LoginRegistrationForm/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Suspense>
    );
};
export default Main;
