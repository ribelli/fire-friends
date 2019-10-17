import React, { Component } from 'react';
import './style/index.scss';

class ChatMessage extends Component {

    render() {
        const className = this.props.isCurrentUser ?
            "message-layer current-member" : "message-layer";
        return(
            <li className={className} key={this.props.message} style={{whiteSpace: 'pre-line'}}>
                <span
                    className="message-layer__avatar"
                    style={{borderColor: this.props.user.color,
                        backgroundImage: `url(${this.props.user.avatarUrl ? this.props.user.avatarUrl : 'none'})`}}
                />
                <div className="message-layer__box">
                    <div className="message-layer__date-info">{this.props.date}</div>
                    <div className="message-layer__c-message"
                         style={{backgroundColor:this.props.user.color}}>
                        <div className="sender-info">
                            {this.props.user.username}
                        </div>
                        {this.props.text}
                    </div>
                </div>
            </li>
        )
    }
}

export default ChatMessage;
