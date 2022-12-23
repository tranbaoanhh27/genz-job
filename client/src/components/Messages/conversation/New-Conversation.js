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

function NewConversation({ setSenderId }) {

    const [usernameInput, setUsernameInput] = useState('');

    const searchUser = () => {
        axios.get(process.env.REACT_APP_API_URL + '/user/uname/' + usernameInput)
        .then(response => {
            if (response.status == 200) {
                setSenderId(response.data[0].id);
                console.log(response.data[0].id);
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