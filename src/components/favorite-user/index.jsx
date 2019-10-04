import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/index.scss';
import Avatar from "../avatar";
import InterestsGraphUser from "../interests-graph-user";

class FavoriteUser extends Component {
    render() {

        return (
            <div className='favorite-user-container'>
                <div>
                    <Link to={this.props.userName}>
                        <Avatar user={this.props} isDefaultSize={true} />
                    </Link>
                </div>
                <div className='general-info'>
                    <div className='general-info__name'>{this.props.name}, </div>
                    <div className='general-info__age'>{this.props.age}</div>
                </div>
                <Link to={this.props.userName}
                      className='username'>
                    {this.props.userName}
                </Link>
                <InterestsGraphUser/>
                <div className='location-info'>
                    <Link to={this.props.country}
                          className='location-info__country'>
                        {this.props.country}:
                    </Link>
                    <Link to={`${'statistics\\'}` + this.props.city}
                          className='location-info__city'>
                        {this.props.city}
                    </Link>
                </div>
            </div>
        )
    }
}

export default FavoriteUser;
