import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './style/index.scss';
import ChatView from "../../components/chat-view";
import InputArea from "../../components/input-area";
// import logo from '../../assets/logo.png';

const doggyUrl = 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg';
const DUMMY_DATA = {
    messages : [
        {
            user: {
                username: 'Хороший мальчик',
                color: "blue",
                avatarUrl: doggyUrl
            },
            text: 'Гав гав'
        },
        {
            user: {
                username: 'Пушистый засранец',
                color: "pink",
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
            text: 'Привет педик'
        },
        {
            user: {
                username: 'Хороший мальчик',
                color: "blue",
                avatarUrl: doggyUrl
            },
            text: 'нет ты'
        },
        {
            user: {
                username: 'Пушистый засранец',
                color: "pink",
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
            text: 'Я в своем познании настолько преисполнился, что я как будто бы уже\n' +
                '\n' +
                'сто триллионов миллиардов лет проживаю на триллионах и\n' +
                '\n' +
                'триллионах таких же планет, как эта Земля, мне этот мир абсолютно\n' +
                '\n' +
                'понятен, и я здесь ищу только одного - покоя, умиротворения и\n' +
                '\n' +
                'вот этой гармонии, от слияния с бесконечно вечным, от созерцания\n' +
                '\n' +
                'великого фрактального подобия и от вот этого замечательного всеединства\n' +
                '\n' +
                'существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно\n' +
                '\n' +
                'малое, хоть ввысь - бесконечное большое, понимаешь?'
        }
        ],
    user: {
        username: 'Хороший мальчик',
        color: 'blue',
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
    };

    componentDidUpdate() {

    };

    clearState = () => {
        this.setState({
            value: ''
        });
    };


    render() {
        return (
            <main className='message-page-container'>
                <div>
                    MESSAGES
                </div>
                <ChatView messages={this.state.messages} currentUser={this.state.user} />
                <InputArea />
            </main>
        );
    };
}

export default MessagesPage;
