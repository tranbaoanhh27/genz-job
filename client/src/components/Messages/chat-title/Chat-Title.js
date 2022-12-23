import React from 'react';

import './Chat-Title.css';

const ChatTitle = (props) => {
    return (
        <div id="chat-title">
            <span>{props.selectedConversation.title}</span>
            <img src="assets/img/trash-logo.svg" alt="Delete Conversation" />
        </div>
    );
}

export default ChatTitle;