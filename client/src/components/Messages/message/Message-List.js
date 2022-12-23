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
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      const resp = ref(db, process.env.REACT_APP_FIREBASE_CHAT_COLLECTION);
  
      return onValue(resp, (snap) => {
        if (snap.exists()) {
            const data = snap.val();
            var messageArray = Object.keys(data)
            .map(k => ({
              ...data[k],
            })); 
            messageArray = messageArray.filter(
              item => (
                item.senderId === props.senderId && item.receiverId === props.receiverId) || 
                (item.senderId === props.receiverId && item.receiverId === props.senderId))
            messageArray.sort((a, b) => {
              return b.timestamp - a.timestamp;
            });
            setMessages(messageArray);
            return
        }
      });
    });

    const messageItems = messages.map((message, index) => {
        message.imageUrl = 'assets/profiles/douglas.png';
        message.imageAlt = message.senderId;
        message.messageText = message.message;
        return <Message 
            key={index}
            isMyMessage={message.receiverId === props.receiverId}
            message={message} />;
    });

    return (
        <div id="chat-message-list">
            {messageItems}
        </div>
    );
}

export default MessageList;