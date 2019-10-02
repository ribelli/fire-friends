import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/index.scss';
import Avatar from "../avatar";
import InterestsGraphUser from "../interests-graph-user";

class FavoriteUser extends Component {
    render() {

        return (
            <div className='favorite-user-container'>
                <Link to={this.props.userName}>
                    <Avatar user={this.props} isDefaultSize={true} />
                </Link>
                <div className='name'>{this.props.name}</div>
                <div className='username'>
                    <Link to={this.props.userName}>{this.props.userName}</Link>
                </div>
                <div className='age'>{this.props.age}</div>
                <InterestsGraphUser/>
                <div className='country'>
                    <Link to={this.props.country}>{this.props.country}</Link>
                </div>
                <div className='city'>
                    <Link to={`${'statistics\\'}` + this.props.city}>{this.props.city}</Link>
                </div>
            </div>
        )
    }
}

export default FavoriteUser;
