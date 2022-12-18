import React, { useState } from "react";
import styled from "styled-components";

const DropdownToggler = styled.button`
    background: ${(props) => props.theme.button};
    border-radius: 50%;
    width: fit-content;
    height: fit-content;

    &:hover {
        background: ${(props) => props.theme.button};
    }

    &:focus {
        outline: none !important;
        box-shadow: none !important;
    }
`;

const DropdownMenu = styled.div`
    background: ${(props) => props.theme.button};

    & button {
        background: inherit;
        color: ${(props) => props.theme.text};
    }
`;

const NotificationActions = (props) => {
    const changeStateClickHandler = (event) => {
        event.preventDefault();
        let newState = props.readState === "read" ? "unread" : "read";
        props.onChangeReadState(newState);
    };

    return (
        <div className={`dropdown ${props.className}`}>
            <DropdownToggler
                className="btn dropdown-toggle"
                type="button"
                id="notificationActionsDropdownButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                theme={props.theme}
            />
            <DropdownMenu
                className="dropdown-menu"
                aria-labelledby="notificationActionsDropdownButton"
                theme={props.theme}>
                <button className="btn dropdown-item" onClick={changeStateClickHandler}>
                    {props.readState === "unread" ? "Đánh dấu là đã đọc" : "Đánh dấu là chưa đọc"}
                </button>
                <button className="btn dropdown-item" onClick={props.onRemove}>
                    Gỡ thông báo này
                </button>
            </DropdownMenu>
        </div>
    );
};

export default NotificationActions;
