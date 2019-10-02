import React, { Component } from 'react';
import ChatMessage from "../chat-message";
import './style/index.scss';

class ChatView extends Component {

    componentDidUpdate () {
        let el = this.refs.wrap;
        el.scrollTop = el.scrollHeight;
    }

    render() {
        const {messages} = this.props;
        return (
                <ul className="chat-view" ref='wrap'>
                    {messages.map((message, i) => this.renderMessage(message, i))}
                </ul>
        )
    }
    // avatarUrl backgroundImg

    renderMessage(message, i) {
        const {user, text, date} = message;
        const {currentUser} = this.props;
        const isCurrentUser = user.id === currentUser.id;
        let props = {
            user,
            text,
            date,
            isCurrentUser
        };
        // if (isCurrentUser) {
        //     props.ref = 'activeItem';
        // }
        return <ChatMessage {...props} key={i}/>
    }
}

export default ChatView;
