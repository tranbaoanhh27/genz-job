import React from 'react';

import ConversationItem from './Conversation-Item';
import './Conversation-List.css';


const ConversationList = (props) => {
    const conversationItems = props.conversations.map((conversation, index) => {
        if (conversation.senderId === props.userId) 
            conversation.title = conversation.receiverName;
        else
            conversation.title = conversation.senderName;

        var date = new Date(conversation.timestamp);
        conversation.createdAt = date.toDateString();
        conversation.latestMessageText = conversation.message;
        conversation.imageUrl = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2'
        var selected = props.selectedConversation;
        return <ConversationItem 
            key={index}
            index={index}
            isActive={selected && conversation.senderId === selected.senderId && conversation.receiverId === selected.receiverId} 
            conversation={conversation}
            setSelectedConversation={props.setSelectedConversation}/>;
    });

    return (
        <div id="conversation-list">
            {conversationItems}
        </div>
    );
}

export default ConversationList;