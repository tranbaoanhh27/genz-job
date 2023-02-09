import React, { useState } from "react";
import NotificationFilter from "./NotificationFilter";
import NotificationList from "./NotificationList";
import { DarkTheme, LightTheme } from "../../assets/themes";

const SAMPLE_NOTIFICATIONS = [
    {
        id: "noti#1",
        imageUrl: "https://i.pinimg.com/originals/37/bf/67/37bf67a897c5dcd22a5971b68ad189f4.jpg",
        content: "Tran Bao Anh liked your profile picture!",
        notifyTime: new Date("2019-10-12"),
        readState: "unread",
    },
    {
        id: "noti#2",
        imageUrl: "https://pbs.twimg.com/media/EZxo7G9WkAE4QCR.png",
        content: "Tran Bao Anh liked your profile picture!",
        notifyTime: new Date("2019-10-12"),
        readState: "read",
    },
    {
        id: "noti#3",
        imageUrl:
            "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5166863_12063650_947567731948442_1613538102827033201_n.jpg",
        content: "Tran Bao Anh liked your profile picture!",
        notifyTime: new Date("2019-10-12"),
        readState: "unread",
    },
    {
        id: "noti#4",
        imageUrl: "https://pbs.twimg.com/media/EcOHVqAWoAA5uWo.png",
        content: "Tran Bao Anh liked your profile picture!",
        notifyTime: new Date("2019-10-12"),
        readState: "read",
    },
    {
        id: "noti#5",
        imageUrl: "https://i.pinimg.com/originals/ec/fd/fd/ecfdfdc0cb586b2784096f8699feb630.jpg",
        content: "Tran Bao Anh liked your profile picture!",
        notifyTime: new Date("2019-10-12"),
        readState: "read",
    },
];

export default function NotificationPage(props) {
    const theme = props.theme === "light" ? LightTheme : DarkTheme;
    const [unreadOnly, setUnreadOnly] = useState(false);
    const [notifications, setNotifications] = useState(SAMPLE_NOTIFICATIONS);

    const changeFilterHandler = (filterMode) => {
        setUnreadOnly(filterMode === "unreadOnly");
    };

    const markAllAsRead = () => {
        setNotifications((prevNotifications) => {
            return prevNotifications.map((notification) => ({
                ...notification,
                readState: "read",
            }));
        });
    };

    const changeReadState = (id, state) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) => {
                if (notification.id === id) return { ...notification, readState: state };
                else return { ...notification };
            })
        );
    };

    const removeAll = () => {
        setNotifications([]);
    };

    const removeNotification = (id) => {
        setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
    };

    return (
        <div>
            <NotificationFilter
                unreadOnly={unreadOnly}
                onChangeFilter={changeFilterHandler}
                onMarkAllAsRead={markAllAsRead}
                onRemoveAll={removeAll}
                theme={theme}
            />
            <NotificationList
                notifications={notifications}
                unreadOnly={unreadOnly}
                onChangeItemReadState={changeReadState}
                onRemoveItem={removeNotification}
                theme={theme}
            />
        </div>
    );
}
