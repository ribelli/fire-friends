import React, {Component, Suspense} from 'react';
import { Link } from 'react-router-dom';
import './style/index.scss';
import UserCard from "../user-card";
import CommonMenu from "../common-menu";
import GlobalSearch from "../global-search";
import LanguageSelect from "../language-select";

const USER = {
    action: {
        eventValue: 6,
    },
};

class Header extends Component {
    render() {

        let userInfo = {
            basicData: this.props.userInfo,
            avatarUrl: 'https://placekitten.com/g/64/64',
        };

        return (
            <header className="top-bar _fixed _dark">
                <Suspense fallback='loading'>
                    <div className="top-bar__b-line">
                        <Link to="/" className="logo">Friends</Link>
                        <CommonMenu/>
                        <GlobalSearch/>
                        <LanguageSelect/>
                        <UserCard user={userInfo}
                                  isNewFriend={this.props.isFriend}
                                  eventCounter={USER.action}/>
                    </div>
                </Suspense>
            </header>
        );
    }
}
export default Header;
