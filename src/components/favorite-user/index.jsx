import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './style/index.scss';
import Avatar from '../avatar';
import InterestsGraphUser from '../interests-graph-user';

class FavoriteUser extends Component {
    redirectHandler = to => {
        this.props.history.push('users/id:' + to);
    };

    render() {
        console.log(this.props)
        const {id, userName, name, age, avatarUrl, country, city} = this.props;

        return (
            <div className='favorite-user'>
                <div onClick={() => this.redirectHandler(id)}>
                    <Avatar content={avatarUrl} isDefaultSize={true} />
                </div>
                <div className='general-info'>
                    <div className='general-info__base'>
                        {name}, <span>{age}</span>
                    </div>
                    <div className='general-info__username'
                         onClick={() => this.redirectHandler(userName)}>
                        {userName}
                    </div>
                </div>
                <InterestsGraphUser/>
                <div className='location-info'>
                    <span className='location-info__country'
                          onClick={() => this.redirectHandler(`${'statistics\\'}` + country)}>
                        {country}:
                    </span>
                    <span className='location-info__city'
                          onClick={() => this.redirectHandler(`${'statistics\\'}` + city)}>
                        {city}
                    </span>
                </div>
            </div>
        )
    }
}

export default withRouter(FavoriteUser);
