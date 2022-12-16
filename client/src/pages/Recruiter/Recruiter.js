import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../../components/UI/NavigationBar";

import RecruiterArticles from "./Articles";
import RecruiterJobPage from "./Jobs";
import RecruiterMessages from "./Messages";
import RecruiterNotifications from "./Notifications";
import RecruiterProfile from "./Profile";

const NAV_ITEMS = [
    {
        id: "navJobs",
        title: "Tin tuyển dụng",
        linkTo: "jobs"
    },
    {
        id: "navArticels",
        title: "Bài viết",
        linkTo: "articles"
    },
    {
        id: "navMessages",
        title: "Tin nhắn",
        linkTo: "messages"
    },
    {
        id: "navNotifications",
        title: "Thông báo",
        linkTo: "notifications"
    },
    {
        id: "navProfile",
        title: "Hồ sơ",
        linkTo: "profile"
    }
]

export default function RecruiterPage() {
    document.body.style.background = '#18191a'
    return (
        <div style={{fontSize: "90%", color: "white"}}>
            <Navbar items={NAV_ITEMS} />
            <Routes>
                <Route index element={<RecruiterJobPage />} />
                <Route path="jobs" element={<RecruiterJobPage />} />
                <Route path="articles" element={<RecruiterArticles />} />
                <Route path="messages" element={<RecruiterMessages />} />
                <Route path="notifications" element={<RecruiterNotifications />} />
                <Route path="profile" element={<RecruiterProfile />} />
            </Routes>
        </div>
    );
}
