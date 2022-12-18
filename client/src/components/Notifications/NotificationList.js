import React, { useState } from "react";
import NotificationItem from "./NotificationItem";

const NotificationList = (props) => {
    /*
    props = {
        notifications = array of notification = {
            id: string,
            imageUrl: string,
            content: string,
            nofifyTime: Date,
            readState: string (read or unread)
        }
    }
*/

    console.log(props.notifications);

    let filteredList = [...props.notifications];

    if (props.unreadOnly === true) {
        filteredList = filteredList.filter(
            (notification) => notification.readState === "unread"
        );
    }

    const changeReadStateHandler = (id, newState) => {
        console.log(id, newState);
        props.onChangeItemReadState(id, newState);
    }

    const removeItemHandler = (id) => {
        props.onRemoveItem(id);
    }

    return (
        <div>
            {filteredList.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onChangeReadState={changeReadStateHandler}
                    onRemoveItem={removeItemHandler}
                    theme={props.theme}
                />
            ))}
        </div>
    );
};

export default NotificationList;
