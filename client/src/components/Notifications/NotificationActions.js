import React, { useState } from "react";
import styled from "styled-components";

const DropdownToggler = styled.button`
  background: #18191a;
  border-radius: 50%;
  width: fit-content;
  height: fit-content;

  &:hover {
    background: #18191a;
  }

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const DropdownMenu = styled.div`
  background: #18191a;

  & button {
    color: white;
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
      />
      <DropdownMenu className="dropdown-menu" aria-labelledby="notificationActionsDropdownButton">
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
