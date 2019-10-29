import React, { Component } from 'react';
import './style/index.scss';
import defaultImagesPath from '../../assets/default-user-icon.jpg';
import classNames from 'classnames';

class Avatar extends Component {
    render() {

        let avatarOptions = classNames({
            'user-avatar' : true,
            'user-avatar_rounded' : true,
            'user-avatar_mini' : !this.props.isDefaultSize,
            'user-avatar_middle': this.props.isDefaultSize
        });

        let imageUrl = this.props.content ? this.props.content : defaultImagesPath;

        return (
            <div className='avatar'>
                <img className={avatarOptions}
                     alt='user-avatar'
                     src={imageUrl} />
            </div>
        )
    }
}

export default Avatar;
