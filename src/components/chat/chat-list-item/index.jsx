import React, { Component } from 'react';
import './style/index.scss';

class ChatListItem extends Component {

    render() {
        const { photo, name, text } = this.props.data;
        return (
            <div className="conversation-list-item" onClick={this.props.onClick}>
                <img className="photo" src={photo} alt="conversation-photo" />
                <div className="info">
                    <h1 className="info__title">{ name }</h1>
                    <p className="info__snippet">{ text }</p>
                </div>
            </div>
        )
    }
}

export default ChatListItem;
