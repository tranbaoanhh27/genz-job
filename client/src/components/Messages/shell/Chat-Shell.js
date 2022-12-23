import React from 'react';
import ConversationSearch from '../conversation/Conversation-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';
import './Chat-Shell.css';
import { messages } from '../data/messages';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from 'react';
import FirebaseConfig from '../config';

const firebase = initializeApp(FirebaseConfig);
const db = getDatabase(firebase);

const ChatShell = () => {
    const [selectedConversationIdx, setSelectedConversationIdx] = useState(0);
    const [selectedConversation, setSelectedConversation] = useState();
    const [conversations, setConversations] = useState([]);
    const [receiverId, setReceiverId] = useState("2");
    const [senderId, setSenderId] = useState("1");
  
    useEffect(() => {
        const resp = ref(db, process.env.REACT_APP_FIREBASE_CHAT_COLLECTION);
        
        return onValue(resp, (snap) => {
            if (snap.exists()) {
                const data = snap.val();
            var messageArray = Object.keys(data)
            .map(k => ({
                ...data[k],
            })); 
            messageArray.sort((a, b) => {
                return b.timestamp - a.timestamp;
            });
            
            let conversationList = [];
            messageArray.forEach(item => {
                var tmp = conversationList.find(c => 
                    (c.senderId === item.senderId && c.receiverId === item.receiverId) || (c.senderId === item.receiverId && c.receiverId === item.senderId));
                    if ((item.senderId === receiverId || item.receiverId === receiverId) 
                    && !tmp) {
                        conversationList.push(item);
                    }
                });

                setConversations(conversationList);
            }
            let selectedConver = conversations[selectedConversationIdx];
            if (selectedConver) {
                if (selectedConver.senderId === receiverId) {
                    setSenderId(selectedConver.receiverId);
                }
                else {
                    setSenderId(selectedConver.senderId);
                }
                selectedConver.title = senderId;
                setSelectedConversation(selectedConver);
            }
      });
    }, [conversations]);

    const sendMessageCallback = () => {
        setSelectedConversationIdx(0);
    };

    return (
        <div id="chat-container" style={{fontSize: "50%"}}>
            {/* <ConversationSearch /> */}
            <ConversationList 
                receiverId={receiverId}
                conversations={conversations} 
                selectedConversationIdx={selectedConversationIdx}
                setSelectedConversationIdx={setSelectedConversationIdx}/>
            <NewConversation />
            {selectedConversation && <ChatTitle selectedConversation={selectedConversation} />}
            {selectedConversation && <MessageList messages={messages} senderId={senderId} receiverId={receiverId}/>}
            {selectedConversation && <ChatForm senderId={senderId} receiverId={receiverId} sendMessageCallback={sendMessageCallback}/>}
        </div>
    );
}

export default ChatShell;