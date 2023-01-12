import React from 'react';

import './Conversation-Item.css';

const ConversationItem = (props) => {
    let className = 'conversation';

    if (props.isActive) {
        className += ' active';
    }

    const clickHandler = () => {
        props.setSelectedConversation(props.conversation);
        console.log("Set selected idx = " + props.conversation.receiverId + "-" + props.conversation.senderId);
    };

    let lastDate = "";
    if ((new Date()).getDate() - (new Date(props.conversation.createdAt)).getDate() === 0) {
        lastDate = "Today";
    }
    else {
        lastDate = (new Date()).getDate() - (new Date(props.conversation.createdAt)).getDate() + "days ago";
    }

    return (
        <div className={className} onClick={clickHandler}>
            <img src={props.conversation.imageUrl} alt={props.conversation.imageAlt} />
            <div className="title-text">{props.conversation.title}</div>
            <div className="created-date">{lastDate}</div>
            <div className="conversation-message">
                {props.conversation.latestMessageText}
            </div>
        </div>
    );
}

export default ConversationItem;