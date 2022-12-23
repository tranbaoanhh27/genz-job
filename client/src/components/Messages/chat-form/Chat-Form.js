import React from 'react';

import './Chat-Form.css';
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import FirebaseConfig from '../config';

const firebase = initializeApp(FirebaseConfig);
const db = getDatabase(firebase);

function ChatForm(props) {

    const [messageInput, setMessageInput] = useState('');

    const sendMessage = () => {
        const timestamp = Date.now();
        set(ref(db, process.env.REACT_APP_FIREBASE_CHAT_COLLECTION + timestamp), {
            senderId: props.senderId,
            receiverId: props.receiverId,
            message: messageInput,
            timestamp
        });
        setMessageInput('');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          sendMessage();
        }
      }

    return (
        <div id="chat-form">
            <input type="text" 
                   placeholder="Type a message" 
                   value={messageInput}
                   onChange={e => setMessageInput(e.target.value)}
                   onKeyDown={handleKeyDown}/>

            <img src="assets/img/send.png" alt="Send message" 
                onClick={sendMessage}/>
        </div> 
    );
}

export default ChatForm;