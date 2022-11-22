import React from "react";
import { Route, Routes } from "react-router-dom";

import JobseekerNavbar from "../../components/JobSeeker/NavigationBar";

import JobseekerJobs from "./Jobs";
import JobseekerJobDetails from "../../components/JobSeeker/JobDetails";
import JobseekerArticles from "./Articles";
import JobseekerMessages from "./Messages";
import JobseekerNotifications from "./Notifications";
import JobseekerProfile from "./Profile";

export default function JobseekerPage() {
    return (
        <>
            <JobseekerNavbar />
            <Routes>
                <Route index element={<JobseekerJobs />} />
                <Route path="jobs" element={<JobseekerJobs />} />
                <Route path="jobs/jobdetails" element={<JobseekerJobDetails />} />
                <Route path="articles" element={<JobseekerArticles />} />
                <Route path="messages" element={<JobseekerMessages />} />
                <Route path="notifications" element={<JobseekerNotifications />} />
                <Route path="profile" element={<JobseekerProfile />} />
            </Routes>
        </>
    );
}
