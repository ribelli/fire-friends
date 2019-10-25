import React, { Component } from 'react';
import './style/index.scss';

class ChatMessage extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.message !== this.props.message;
    }

    render() {
        debugger
        let message = this.props.message;
        let user = message.user;
        const isCurrentUser = user.id === this.props.currentUser.id;
        const className = isCurrentUser ?
            "message-layer current-member" : "message-layer";
        return(
            <li className={className} key={this.props.key} style={{whiteSpace: 'pre-line'}}>
                <span
                    className="message-layer__avatar"
                    style={{borderColor: user.color,
                        backgroundImage: `url(${user.avatarUrl ? user.avatarUrl : 'none'})`}}
                />
                <div className="message-layer__box">
                    <div className="message-layer__date-info">{message.date}</div>
                    <div className="message-layer__c-message"
                         style={{backgroundColor:user.color}}>
                        <div className="sender-info">
                            {user.username}
                        </div>
                        {message.text}
                    </div>
                </div>
            </li>
        )
    }
}

export default ChatMessage;
