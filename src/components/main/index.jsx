import React, { Suspense, useState } from 'react';
import LoginRegistrationForm from  '../login-form';
import ReactTooltip from 'react-tooltip';
import './style/index.scss';
import WorldMap from '../users-map';
import i18n from 'i18next';
// import UsersMap from '../users-map';

const Main = () => {
    function getCurrentLng () {
        return i18n.language || window.localStorage.i18nextLng || '';
    }

    const currentLanguage = getCurrentLng();
    const [content, setContent] = useState('');
    return (
        <Suspense fallback='loading'>
            <div className="main">
                <h1>Welcome to fire-friends</h1>
                <div className="c-main">
                    <div className="c-info">
                        <WorldMap currentLanguage={currentLanguage} setTooltipContent={setContent} />
                        <ReactTooltip>{content}</ReactTooltip>
                        {/*<UsersMap />*/}
                    </div>
                    <div className="c-login">
                        <LoginRegistrationForm/>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};
export default Main;
