import React from "react";
import NotificationPage from "../../components/Notifications/NotificationPage";

export default function JobseekerNotifications(props) {
    return <NotificationPage theme="light" userId={props.userId} />;
}
