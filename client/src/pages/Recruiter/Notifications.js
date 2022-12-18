import React, { useState } from "react";
import NotificationPage from "../../components/Notifications/NotificationPage";

export default function RecruiterNotificationPage(props) {
    return <NotificationPage userId={props.userId}/>;
}
