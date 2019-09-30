import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './style/index.scss';
import ChatView from "../../components/chat-view";
import InputArea from "../../components/input-area";
// import logo from '../../assets/logo.png';

const doggyUrl = 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg';
const arrayUsers = ['Хороший мальчик', 'Пушистый засранец'];
const DUMMY_DATA = {
    messages : [
        {
            user: {
                username: arrayUsers[0],
                color: "cornflowerblue",
                avatarUrl: doggyUrl
            },
            text: 'Гав гав',
            date: new Date().toLocaleString(),
        },
        {
            user: {
                username: arrayUsers[1],
                color: "#3a5fa2",
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
            text: 'Привет педик',
            date: new Date().toLocaleString(),
        },
        {
            user: {
                username: arrayUsers[0],
                color: "cornflowerblue",
                avatarUrl: doggyUrl
            },
            text: 'нет ты',
            date: new Date().toLocaleString(),
        },
        {
            user: {
                username: arrayUsers[1],
                color: "#3a5fa2",
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
            text: 'Я в своем познании настолько преисполнился, что я как будто бы уже ' +
                'сто триллионов миллиардов лет проживаю на триллионах и ' +
                'триллионах таких же планет, как эта Земля, мне этот мир абсолютно ' +
                'понятен, и я здесь ищу только одного - покоя, умиротворения и ' +
                'вот этой гармонии, от слияния с бесконечно вечным, от созерцания ' +
                'великого фрактального подобия и от вот этого замечательного всеединства ' +
                'существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно ' +
                'малое, хоть ввысь - бесконечное большое, понимаешь?',
            date: new Date().toLocaleString(),
        }
        ],
    user: {
        username: arrayUsers[0],
        color: 'cornflowerblue',
        avatarUrl: doggyUrl
    }
};

class MessagesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: DUMMY_DATA.user,
            messages: DUMMY_DATA.messages,
            value: ''
        }
    }

    componentDidMount() {
        this.clearState();
        this.connection = new WebSocket('ws://localhost:8080/ws');
    };

    clearState = () => {
        this.setState({
            value: ''
        });
    };

    onSendMessage = (text) => {
        // ws://eiden.local:8080/ws
        this.state.messages.push({
            text,
            user : this.state.user,
        });
        this.connection.send(text);
        this.setState({text});
        console.log(this.state.messages)
    };

    render() {
        return (
            <div className='message-page-container'>
                <div className='user-info-block'>
                    Messages
                </div>
                <ChatView messages={this.state.messages} currentUser={this.state.user} />
                <InputArea onSendMessage={this.onSendMessage}/>
            </div>
        );
    };
}

export default MessagesPage;
