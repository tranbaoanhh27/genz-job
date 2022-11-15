import React from "react";
import { Route, Routes } from "react-router-dom";

import RecruiterNavbar from "../../components/Recruiter/NavigationBar";

import RecruiterJobs from "./Jobs";
import RecruiterArticles from "./Articles";
import RecruiterMessages from "./Messages";
import RecruiterNotifications from "./Notifications";
import RecruiterProfile from "./Profile";

export default function RecruiterPage() {
    return (
        <>
            <RecruiterNavbar />
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
