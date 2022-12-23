import React from 'react';

import Message from './Message'
import './Message-List.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from 'react';
import FirebaseConfig from '../config';

const firebase = initializeApp(FirebaseConfig);
const db = getDatabase(firebase);

const MessageList = (props) => {
    const messageItems = props.messages.map((message, index) => {
        message.imageUrl = 'assets/profiles/douglas.png';
        message.imageAlt = message.receiverId;
        message.messageText = message.message;
        return <Message 
            key={index}
            isMyMessage={message.senderId === props.userId}
            message={message} />;
    });

    return (
        <div id="chat-message-list">
            {messageItems}
        </div>
    );
}

export default MessageList;