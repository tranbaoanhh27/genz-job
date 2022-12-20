import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotificationPage from "../../components/Notifications/NotificationPage";
import AuthApi from "../../api/AuthApi";

export default function Notification() {
    document.body.style.background = '#18191a'
    var user = AuthApi.GetCurrentUser();
    console.log('user id = ', user.data.id);
    return (
        <div style={{fontSize: "90%", color: "white"}}>
            <Routes>
                <Route index element={<NotificationPage userId={user.data.id}/>} />
                {/* <Route path="jobs" element={<RecruiterJobPage />} />
                <Route path="articles" element={<RecruiterArticles userId={props.userId}/>} />
                <Route path="messages" element={<RecruiterMessages />} />
                <Route path="notifications" element={<RecruiterNotifications />} />
                <Route path="profile" element={<RecruiterProfile />} /> */}

            </Routes>
        </div>
    );
}