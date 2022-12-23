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

const ChatShell = (props) => {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [conversations, setConversations] = useState([]);
    const userId = props.user.data.id;
    const username = props.user.data.UserName;
  
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
                let messagesList = [];
                messageArray.forEach(item => {
                    var tmp = conversationList.find(c => 
                        (c.senderId === item.senderId && c.receiverId === item.receiverId) || (c.senderId === item.receiverId && c.receiverId === item.senderId));
                    if ((item.senderId === userId || item.receiverId === userId) && !tmp) {
                        conversationList.push(item);
                    }

                    if (selectedConversation) {
                        if ((item.senderId === selectedConversation.senderId && item.receiverId === selectedConversation.receiverId) || 
                            (item.senderId === selectedConversation.receiverId && item.receiverId === selectedConversation.senderId)) {
                                messagesList.push(item);
                            }
                    }
                });
                setConversations(conversationList);
                setMessages(messagesList);
            }
      });
    }, [conversations]);

    let chatReceiverId = "";
    let chatReceiverName = "";
    if (selectedConversation) {
        chatReceiverId = selectedConversation.receiverId;
        chatReceiverName = selectedConversation.receiverName;
        if (selectedConversation.receiverId === userId) {
            chatReceiverId = selectedConversation.senderId;
            chatReceiverName = selectedConversation.senderName;
        }
    }

    return (
        <div id="chat-container" style={{fontSize: "50%"}}>
            {/* <ConversationSearch /> */}
            <ConversationList 
                userId={userId}
                conversations={conversations} 
                setSelectedConversation={setSelectedConversation}
                selectedConversation={selectedConversation}/>
            <NewConversation 
                userId={userId}
                username={username}
                setSelectedConversation={setSelectedConversation}/>
            {selectedConversation && <ChatTitle selectedConversation={selectedConversation} />}
            {selectedConversation && <MessageList messages={messages} userId={userId} receiverId={selectedConversation.receiverId}/>}
            {selectedConversation && <ChatForm senderId={userId} 
                                               receiverId={chatReceiverId} 
                                               senderName={username}
                                               receiverName={chatReceiverName}/>}
        </div>
    );
}

export default ChatShell;