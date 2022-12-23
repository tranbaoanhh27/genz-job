import React from 'react';

import './New-Conversation.css';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios";

const Button = styled.button`
    border-radius: 30px;
    padding-inline: 20px;
    border: none;
`;

function NewConversation({ userId, username, setSelectedConversation }) {
    const [usernameInput, setUsernameInput] = useState('');

    const searchUser = () => {
        if (usernameInput.toLowerCase() === username.toLowerCase())
            return;
        axios.get(process.env.REACT_APP_API_URL + '/user/uname/' + usernameInput)
        .then(response => {
            if (response.status === 200) {
                var newConversation = {};
                newConversation.senderId = userId;
                newConversation.receiverId = response.data[0].id;
                newConversation.title = response.data[0].UserName;
                newConversation.senderName = username;
                newConversation.receiverName = response.data[0].UserName;
                console.log(response.data[0]);
                setSelectedConversation(newConversation);
            }
        });
    };

    return (
        <div id="new-message-container">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm người dùng..."
                aria-label="Search"
                style={{ border: "0px", height: "30px"}}
                onChange={e => setUsernameInput(e.target.value)}
            />
            <Button className="btn btn-primary" onClick={searchUser}>+</Button>
        </div>
    );
}

export default NewConversation;