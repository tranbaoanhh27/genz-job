import React, { useState } from "react";


const ToastContext = React.createContext({
    messages: [],
    addMessage: (message) => {},
    removeMessage: (messageId) => {},
});


export default ToastContext;


export const ToastContextProvider = (props) => {
    
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages(prevMessages => [{...message, id: Math.random()}, ...prevMessages]);
    }

    const removeMessage = (messageId) => {
        setMessages(prevMessages => prevMessages.filter(item => item.id !== messageId));
    }

    return (
        <ToastContext.Provider value={{ messages, addMessage, removeMessage }}>{props.children}</ToastContext.Provider>
    );
}