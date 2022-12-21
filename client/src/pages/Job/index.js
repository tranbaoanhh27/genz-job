import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import RecruiterJobPage from "./Jobs";
import JobseekerJobDetails from "../../components/JobSeeker/Job/JobDetails";
import AuthApi from "../../api/AuthApi";
import SecuredRoute, { checkUserPermission } from "../../components/SecuredRoute";
export default function Job() {
    document.body.style.background = "#18191a";
    var user = AuthApi.GetCurrentUser();
    if (user) user = user.data;
    console.log(user);
    // if (user) {
    //     user = user.data;
    //     // Job seeker
    //     if (checkUserPermission(user, "component.job-seeker")) {

    //     }
    //     // Recruiter
    //     else {

    //     }
    // }

    // Guest (No log-in)
    return (
        <div style={{ fontSize: "90%", color: "white" }}>
            <Routes>
                <Route index element={<div>Job lists</div>} />

                <Route path="job/detail" element={<JobseekerJobDetails />} />
                <Route
                    path="job/create"
                    element={
                        <SecuredRoute user={user} permission="route.recruiter" redirectTo="/">
                            <RecruiterJobPage />
                        </SecuredRoute>
                    }
                />
            </Routes>
        </div>
    );
}
