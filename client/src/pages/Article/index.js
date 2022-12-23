import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import RecruiterArticles from "./Articles";
import AuthApi from "../../api/AuthApi";

export default function Article() {
	document.body.style.background = "#18191a";
	var user = AuthApi.GetCurrentUser();
    // Authenticated user
	if (user) {
		return (
			<div style={{ fontSize: "90%", color: "white" }}>
				<Routes>
					<Route index element={<RecruiterArticles userId={user.data.id} />} />
					{/* <Route path="jobs" element={<RecruiterJobPage />} />
                <Route path="articles" element={<RecruiterArticles userId={props.userId}/>} />
                <Route path="messages" element={<RecruiterMessages />} />
                <Route path="notifications" element={<RecruiterNotifications />} />
                <Route path="profile" element={<RecruiterProfile />} /> */}
				</Routes>
			</div>
		);
	} else {
        // Guest
        return (
			<div style={{ fontSize: "90%", color: "white" }}>
				<Routes>
					<Route index element={<RecruiterArticles userId='1' />} />
					{/* <Route path="jobs" element={<RecruiterJobPage />} />
                <Route path="articles" element={<RecruiterArticles userId={props.userId}/>} />
                <Route path="messages" element={<RecruiterMessages />} />
                <Route path="notifications" element={<RecruiterNotifications />} />
                <Route path="profile" element={<RecruiterProfile />} /> */}
				</Routes>
			</div>
		);
	}
}
