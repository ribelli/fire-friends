import React, { Component } from 'react';

import './style/index.scss';
import Chat from "../../components/chat";
import InputArea from "../../components/input-area";
import Contacts from "../../components/contacts";
import SplitPane from "../../components/split-pane";

const doggyUrl = 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg';
const arrayUsers = ['Хороший мальчик', 'Пушистый засранец'];
const DUMMY_DATA = {
    messages : [
        {
            user: {
                id:0,
                username: arrayUsers[0],
                color: "cornflowerblue",
                avatarUrl: doggyUrl
            },
            text: 'Гав гав',
            date: new Date().toLocaleString(),
        },
        {
            user: {
                id:1,
                username: arrayUsers[1],
                color: "#3a5fa2",
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
            text: 'Привет педик',
            date: new Date().toLocaleString(),
        },
        {
            user: {
                id:0,
                username: arrayUsers[0],
                color: "cornflowerblue",
                avatarUrl: doggyUrl
            },
            text: 'нет ты',
            date: new Date().toLocaleString(),
        },
        {
            user: {
                id:1,
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
        id:0,
        username: arrayUsers[0],
        color: 'cornflowerblue',
        avatarUrl: doggyUrl
    },
    respondent: {
        id:0,
        username: arrayUsers[1]
    }
};

class MessagesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: DUMMY_DATA.user,
            respondent: DUMMY_DATA.respondent,
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
    };

    render() {
        return (
            <div className='message-page-container'>
                <SplitPane
                    left={
                        <Contacts />
                    }
                    right={
                        <Chat messages={this.state.messages}
                              currentUser={this.state.user}
                              respondent={this.state.respondent} />
                    }
                />
                <InputArea onSendMessage={this.onSendMessage}/>
            </div>
        );
    };
}

export default MessagesPage;
