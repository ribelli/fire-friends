import React, { Component } from 'react';
import ChatMessage from "../chat-message";
import './style/index.scss';
import InputArea from "../input-area";
import TypingIndicator from "../typing-indicator";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextId: props.messages.length,
            messages: props.messages,
            user: props.currentUser,
            currentRoom: {},
            respondent: props.respondent,
            typingUsers: [],
            chatInput: '',
            text: '',
            notUpdate: false
        };

        this.sendTypingEvent = this.sendTypingEvent.bind(this);
    }

    componentDidUpdate () {
        let el = this.refs.wrap;
        el.scrollTop = el.scrollHeight;
    }

    componentDidMount() {
        //this.clearState();
        //this.connection = new WebSocket('ws://localhost:8080/ws');
    }

    // clearState = () => {
    //     this.setState({
    //         value: ''
    //     });
    // };

    sendTypingEvent(event) {
        this.state.currentUser
            .isTypingIn({ roomId: this.state.currentRoom.id })
            .catch(error => console.error('error', error))
        this.setState({
            chatInput: event.target.value
        });
    }

    onSendMessage = (text) => {
        this.state.messages.push({
            id: this.state.nextId,
            text,
            user : this.state.user
        });
        let nextId = this.state.nextId++;
        //this.connection.send(text);
        this.setState({
            nextId: nextId,
            text,
            notUpdate: true
        });
    };

    // renderMessage(message, i) {
    //     const {user, text, date} = message;
    //     const {currentUser} = this.props;
    //     const isCurrentUser = user.id === currentUser.id;
    //     let props = {
    //         user,
    //         text,
    //         date,
    //         isCurrentUser
    //     };
    //     if (isCurrentUser) {
    //         props.ref = 'activeItem';
    //     }
    //     return <ChatMessage {...props} key={i}/>
    // }

    // avatarUrl backgroundImg
    render() {
        const {respondent} = this.state;
        let messagesList =
            this.state.messages.map((message, i) => {
                return <ChatMessage message={message} key={message.id} id={i} currentUser={this.props.currentUser}/>
            });
        return (
            <div className='chat-container'>
                <div className='respondent-view'>{respondent.username}</div>
                <ul className='chat-view' ref='wrap'>
                    {messagesList}
                </ul>
                <InputArea onSendMessage={this.onSendMessage} />
                <TypingIndicator typingUsers={this.state.typingUsers} />
            </div>
        )
    }
}

export default Chat;
