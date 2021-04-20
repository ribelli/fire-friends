import React, { Component, Suspense } from 'react';

import './style/index.scss';
import Chat from '../../components/chat';
import ChatContacts from '../../components/chat/chat-contacts';
import SplitPane from '../../components/split-pane';
// import LoadingSpinner from "../../components/loading-spinner";

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
            text: 'Привет, пес',
            date: new Date().toLocaleString(),
        },
        {
            user: {
                id:0,
                username: arrayUsers[0],
                color: "cornflowerblue",
                avatarUrl: doggyUrl
            },
            text: 'нет, ты',
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
        // username: arrayUsers[0],
        color: 'cornflowerblue',
        avatarUrl: doggyUrl
    },
    respondent: {
        id:0,
        username: arrayUsers[1],
        avatarUrl: 'https://placekitten.com/g/64/64'
    }
};

class MessagesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            // data: 'Initial data...', // for resize
            chatPhoto: '',
            chatName: '',
            chatText: '',
            isShow: true,
            isMobile: this.isMobileDevice()
        };
    }

    componentDidMount() {
        this.clearState();
        // this.connection = new WebSocket('ws://localhost:8080/ws');
    };

    clearState = () => {
        this.setState({
            value: ''
        });
    };

    isMobileDevice = ()  => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    // onSendMessage = (text) => {
    //     this.state.messages.push({
    //         text,
    //         user : this.state.user,
    //     });
    //     this.connection.send(text);
    //     this.setState({text});
    // };

    handleChat = (chatValue) => {
        if (this.state.isMobile) {
            this.callAllContacts();
        }
        this.setState( {
            chatPhoto: chatValue.photo,
            chatName: chatValue.name,
            chatText: chatValue.text
        });
    };

    callAllContacts = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    };

    render() {
        let {isShow, isMobile} = this.state;
        console.log(isShow, isMobile)
        const currentUser = this.props.state.userReducer;
        DUMMY_DATA.user.username = currentUser.username;

        return (
            <Suspense fallback='loading'>
                <div className="message-page-container">
                    <SplitPane
                        left={
                            (!isShow || !isMobile) ?
                                 <ChatContacts update={this.props.update}
                                               onSelectChat={this.handleChat}/> : null
                        }
                        right={
                            (isShow) ?
                            <Chat onClick={this.callAllContacts}
                                  messages={DUMMY_DATA.messages}
                                  currentUser={DUMMY_DATA.user}
                                  respondent={DUMMY_DATA.respondent} /> :null
                        }
                    />
                </div>
            </Suspense>
        );
    };
}

export default MessagesPage;
