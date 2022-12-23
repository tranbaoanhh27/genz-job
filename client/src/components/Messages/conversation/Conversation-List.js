import React from 'react';

import ConversationItem from './Conversation-Item';
import './Conversation-List.css';


const ConversationList = (props) => {
    const conversationItems = props.conversations.map((conversation, index) => {
        if (conversation.senderId === props.receiverId) 
            conversation.title = conversation.receiverId;
        else
            conversation.title = conversation.senderId;
        var date = new Date(conversation.timestamp);
        conversation.createdAt = date.toDateString();
        conversation.latestMessageText = conversation.message;
        conversation.imageUrl = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2'
        return <ConversationItem 
            key={index}
            index={index}
            isActive={index === props.selectedConversationIdx }
            conversation={conversation} 
            setSelectedConversationIdx={props.setSelectedConversationIdx}/>;
    });

    return (
        <div id="conversation-list">
            {conversationItems}
        </div>
    );
}

export default ConversationList;