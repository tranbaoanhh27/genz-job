import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import RecruiterJobPage from "./RecruiterJobs";
import { JobDetails } from "../../components/JobSeeker/Job/JobDetails";
import AuthApi from "../../api/AuthApi";
import SecuredRoute, { checkUserPermission } from "../../components/SecuredRoute";
import startJobDetailPage from "../../components/JobSeeker/Job/JobDetails";

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
                <Route
                    index
                    element={
                        <div>
                            <p>Job List</p>
                            <button onClick={() => startJobDetailPage(1)}>
                                Test go to Job details Page jobId=1
                            </button>
                            <button onClick={() => startJobDetailPage(3)}>
                                Test go to Job details Page jobId=3
                            </button>
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}
