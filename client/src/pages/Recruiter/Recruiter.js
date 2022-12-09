import React from "react";
import { Route, Routes } from "react-router-dom";

import RecruiterNavbar from "../../components/UI/NavigationBar";

import RecruiterJobs from "./Jobs";
import RecruiterArticles from "./Articles";
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
    return (
        <>
            <RecruiterNavbar items={NAV_ITEMS}/>
            <Routes>
                <Route index element={<RecruiterJobs />} />
                <Route path="jobs" element={<RecruiterJobs />} />
                <Route path="articles" element={<RecruiterArticles />} />
                <Route path="messages" element={<RecruiterMessages />} />
                <Route path="notifications" element={<RecruiterNotifications />} />
                <Route path="profile" element={<RecruiterProfile />} />
            </Routes>
        </>
    );
}
