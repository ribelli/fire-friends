import React, { Component } from 'react';
import ChatMessage from '../chat-message';
import InputArea from '../input-area';
import TypingIndicator from '../typing-indicator';
import './style/index.scss';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //containerWidth: props.containerWidth,
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
            .catch(error => console.error('error', error));
        this.setState({
            chatInput: event.target.value
        });
    }

    onSendMessage = (text) => {
        //this.connection.send(text);
        this.setState(prevState => ({
            messages: [...prevState.messages, {
                user : prevState.user,
                text
            }],
            nextId: prevState.nextId++,
            text,
            notUpdate: true
        }));
    };

    callAllContacts = () => {
        this.props.onClick();
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
                return <ChatMessage message={message}
                                    key={message.id}
                                    id={i}
                                    currentUser={this.props.currentUser}/>
            });
        return (
            <div className="chat-container">
                <div className="respondent-view">
                    <div className="respondent-view__link" onClick={() => this.callAllContacts()}>
                        All contacts
                    </div>
                    <img src={respondent.avatarUrl}
                     className="respondent-view__avatar" alt="respondent-avatar"/>
                    <div>{respondent.username}</div>
                </div>
                <ul className="chat-view" ref="wrap">
                    {messagesList}
                </ul>
                <InputArea onSendMessage={this.onSendMessage} />
                <TypingIndicator typingUsers={this.state.typingUsers} />
            </div>
        )
    }
}

export default Chat;
