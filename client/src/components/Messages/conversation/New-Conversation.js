import React from 'react';

import './New-Conversation.css';
import styled from "styled-components";

const Button = styled.button`
    border-radius: 30px;
    padding-inline: 20px;
    border: none;
`;

function NewConversation() {
    return (
        <div id="new-message-container">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm người dùng..."
                aria-label="Search"
                style={{ border: "0px", height: "30px"}}
            />
            <Button className="btn btn-primary">+</Button>
        </div>
    );
}

export default NewConversation;