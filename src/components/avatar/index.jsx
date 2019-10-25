import React, { Component } from 'react';
import './style/index.scss';
import defaultImagesPath from '../../assets/default-user-icon.jpg';
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

        let imageUrl = this.props.content ? this.props.content : defaultImagesPath;

        return (
            <div className='avatar-container'>
                <img className={avatarOptions}
                     alt='user-avatar'
                     src={imageUrl} />
            </div>
        )
    }
}

export default Avatar;
