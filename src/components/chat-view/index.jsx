import React, { Component } from 'react';
import './style/index.scss';

class ChatView extends Component {
    render() {
        const {messages} = this.props;
        return (
            <ul className="chat-view">
            {messages.map(message => this.renderMessage(message))}
            </ul>
        )
    }

    // avatarUrl backgroundImg

    renderMessage(message) {
        const {user, text} = message;
        const {currentUser} = this.props;
        const isMessageFromMe = user.id === currentUser.id;
        console.log(user, currentUser);
        const className = isMessageFromMe ?
            "message-layer currentMember" : "message-layer";
        return (
            <li className={className} key={message.id}>
                <span
                    className="avatar"
                    style={{borderColor: user.color, backgroundImage: `url(${user.avatarUrl ? user.avatarUrl : 'none'})`}}
                />
                <div className="message-layer__box">
                    <div className="message-layer__sender-info">
                        {user.username}
                    </div>
                    <div className="message-layer__message">
                        {text}
                    </div>
                </div>
            </li>
        )
    }
}

export default ChatView;
