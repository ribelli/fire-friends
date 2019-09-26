import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/index.scss';


class UserInfo extends Component{
    render() {
        return (
            <div>
                Hello, <Link to={this.props.user.id}>{this.props.user.name}</Link>
            </div>
        );
    }
}

export default UserInfo;
