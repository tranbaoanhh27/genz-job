import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ChatShell from "../../components/Messages/shell/Chat-Shell";
import AuthApi from "../../api/AuthApi";

export default function Message() {
    document.body.style.background = '#18191a'
    var user = AuthApi.GetCurrentUser();
    return (
        <div style={{fontSize: "90%", color: "white"}}>
            <Routes>
                <Route index element={<ChatShell user={user}/>} />
                {/* <Route path="jobs" element={<RecruiterJobPage />} />
                <Route path="articles" element={<RecruiterArticles userId={props.userId}/>} />
                <Route path="messages" element={<RecruiterMessages />} />
                <Route path="notifications" element={<RecruiterNotifications />} />
                <Route path="profile" element={<RecruiterProfile />} /> */}

            </Routes>
        </div>
    );
}