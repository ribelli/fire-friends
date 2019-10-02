import React, { Component } from 'react';
import './style/index.scss';
import classNames from 'classnames';

// add srcset for img

class Avatar extends Component {
    render() {

        let avatarOptions = classNames({
            'user-avatar' : true,
            '_rounded' : true,
            '_mini' : !this.props.isDefaultSize,
            '_middle': this.props.isDefaultSize
        });

        return (
            <img className={avatarOptions}
                 src={this.props.user.avatarUrl}
                 alt={this.props.user.name} />
        )
    }
}

export default Avatar;
