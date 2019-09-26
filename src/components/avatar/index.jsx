import React, { Component } from 'react';
import './style/index.scss';

// add srcset for img

class Avatar extends Component {
    render() {
        return (
            <img className="user-avatar _rounded"
                 src={this.props.user.avatarUrl}
                 alt={this.props.user.name} />
        )
    }
}

export default Avatar;
