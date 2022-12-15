import React, { useState } from "react";
import MyCard from "../UI/MyCard";
import NotificationActions from "./NotificationActions";
import "../../assets/css/NotificationItem.css";

const NotificationItem = (props) => {
    /*
    props = {
        notification = {
            id: string
            imageUrl: string,
            content: string,
            nofifyTime: Date,
            readState: string (read or unread)
        }
    }
*/

    const readStateChangeHandler = (newState) => {
        console.log(newState);
        props.onChangeReadState(props.notification.id, newState);
    };

    const removeNotification = () => {
        props.onRemoveItem(props.notification.id);
    }

    console.log(props.notification.readState);
    return (
        <MyCard style={{ background: "#242526", width: "50rem" }}>
            <div className="row">
                <div className="col-1">
                    <img
                        className="notification-image"
                        src={props.notification.imageUrl}
                    />
                </div>
                <div className="col align-self-center">
                    <div className="row">
                        <p style={{ color: "white" }}>
                            {props.notification.content}
                        </p>
                    </div>
                    <div className="row">
                        <label style={{ color: "white" }}>
                            {props.notification.notifyTime.toLocaleString(
                                "vi-VN"
                            )}
                        </label>
                    </div>
                </div>
                <div
                    className="col-1"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}>
                    <NotificationActions
                        readState={props.notification.readState}
                        onChangeReadState={readStateChangeHandler}
                        onRemove={removeNotification}
                    />
                    {props.notification.readState === "unread" && (
                        <span className="badge badge-primary notification-state-badge">
                            Mới
                        </span>
                    )}
                </div>
            </div>
        </MyCard>
    );
};

export default NotificationItem;
