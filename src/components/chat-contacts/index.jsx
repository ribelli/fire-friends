import React, { useState, useEffect } from 'react';
import './style/index.scss'
import {getConversations} from "../../store/actions/chat-actions";
import {connect} from "react-redux";
import ChatListItem from "../chat-list-item";

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
                        photo: result.picture.large,
                        name: `${result.name.first} ${result.name.last}`,
                        text: 'Hello, World'
                    };
                });
                setConversations([...conversations, ...newConversations])
            })
    };

    const getCurrentId = (id) => {
        console.log(conversations[id]);
    };

    return(
        <aside className='chat-contacts'>
            <div className='chat-contacts__title'>Contacts</div>
            <ul className='chat-contacts__list'>
                {conversations.map((conversation, id) => (
                    <ChatListItem id={id}
                                  onClick={() => getCurrentId(id)}
                                  key={conversation.name}
                                  data={conversation} />
                                  ))}
            </ul>
        </aside>
    )
}

const mapStateToProps = state => {
    return {
        //showSidebar: state.sidebarReducer.show,
        results: state.chatListReducer.results
    };
};

export default connect(mapStateToProps)(ChatContacts);
