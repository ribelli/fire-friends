import React, { useState, useEffect, Suspense } from 'react';
import {withTranslation} from "react-i18next";
import { connect } from 'react-redux';
import { getConversations } from '../../../store/actions/chat-actions';
import ChatListItem from '../chat-list-item';
import './style/index.scss'

function ChatContacts(props) {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getConversationsList()
    },[]);

    const getConversationsList = () => {
        props.dispatch(getConversations())
            .then((data) => {
                let newConversations = data.results.map(result => {
                    return {
                        key: result.id,
                        photo: result.picture.large,
                        name: `${result.name.first} ${result.name.last}`,
                        text: 'It\'s just a sample'
                    };
                });
                setConversations([...conversations, ...newConversations])
            })
    };

    const getCurrentId = (id) => {
        console.log(conversations[id]);
        let chat = conversations[id];
        props.onSelectChat(chat);
    };

    const {t} = props;
    return(
        <aside className="chat-contacts">
            <div className="chat-contacts__title">{t('main.chat.contacts')}</div>
            <ul className="chat-contacts__list">
                {conversations.map((conversation, id) => (
                    <ChatListItem id={id}
                                  onClick={() => getCurrentId(id)}
                                  key={conversation.name}
                                  data={conversation} />
                                  ))}
            </ul>
            <div className="chat-settings">Our gif</div>
        </aside>
    )
}

const mapStateToProps = state => {
    return {
        //showSidebar: state.sidebarReducer.show,
        results: state.chatListReducer.results
    };
};

export default withTranslation()(connect(mapStateToProps)(ChatContacts));
