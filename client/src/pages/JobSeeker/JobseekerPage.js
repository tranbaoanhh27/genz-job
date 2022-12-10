import React from "react";
import { Route, Routes } from "react-router-dom";

import NavigationBar from '../../components/UI/NavigationBar'

import JobseekerJobs from "./Jobs";
import JobseekerJobDetails from "../../components/JobSeeker/JobDetails";
import JobseekerArticles from "./Articles";
import JobseekerMessages from "./Messages";
import JobseekerNotifications from "./Notifications";
import Profile from "./Profile/index";

const NAV_ITEMS = [
    {
        id: "navJobs",
        title: "Săn việc làm",
        linkTo: "jobs"
    },
    {
        id: "navArticles",
        title: "Bảng tin",
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
    },
]

export default function JobseekerPage() {
    return (
        <>
            <NavigationBar items={NAV_ITEMS}/>
            <Routes>
                <Route index element={<JobseekerJobs />} />
                <Route path="jobs" element={<JobseekerJobs />} />
                <Route path="jobs/jobdetails" element={<JobseekerJobDetails />} />
                <Route path="articles" element={<JobseekerArticles />} />
                <Route path="messages" element={<JobseekerMessages />} />
                <Route path="notifications" element={<JobseekerNotifications />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </>
    );
}
