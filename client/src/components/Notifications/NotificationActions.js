import React, { useState } from "react";
import "../../assets/css/NotificationActions.css";

const NotificationActions = (props) => {
    const changeStateClickHandler = (event) => {
        event.preventDefault();
        let newState = props.readState === "read" ? "unread" : "read";
        props.onChangeReadState(newState);
    }

    return (
        <div className={`dropdown ${props.className}`}>
            <button
                className="notification-actions__dropdown-button btn dropdown-toggle"
                type="button"
                id="notificationActionsDropdownButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
            </button>
            <div
                className="notification-actions__dropdown-menu dropdown-menu"
                aria-labelledby="notificationActionsDropdownButton">
                <button className="btn dropdown-item" onClick={changeStateClickHandler}>
                    {props.readState === "unread" ? "Đánh dấu là đã đọc" : "Đánh dấu là chưa đọc"}
                </button>
                <button className="btn dropdown-item" onClick={props.onRemove}>
                    Gỡ thông báo này
                </button>
            </div>
        </div>
    );
};

export default NotificationActions;
