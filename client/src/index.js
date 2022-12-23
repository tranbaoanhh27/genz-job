import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "./pages/Home/index";
import { SignInAndSignUp } from "./pages/SignInSignUp/index";
import Job from "./pages/Job/index";
import Article from "./pages/Article/index";
import Message from "./pages/Message/index";
import Notification from "./pages/Notification/index";
import Profile from "./pages/Profile/index";
import { Admin } from "./pages/Admin/index";
import Navbar from "./components/UI/NavigationBar";
import "./assets/css/App.css";

import reportWebVitals from "./reportWebVitals";

import AuthApi from "./api/AuthApi";
import AuthVerify from "./common/AuthVerify";
import SecuredRoute, { checkUserPermission } from "./components/SecuredRoute";
import { data } from "jquery";

const NAV_GENERAL_ITEMS = [
    {
        id: "navJobs",
        title: "Tin tuyển dụng",
        linkTo: "",
    },
    {
        id: "navArticels",
        title: "Bài viết",
        linkTo: "articles",
    },
    {
        id: "navProfile",
        title: "Đăng nhập/Đăng kí",
        linkTo: "auth",
    },
];

const NAV_RECRUITER_ITEMS = [
    {
        id: "navJobs",
        title: "Tin tuyển dụng",
        linkTo: "",
    },
    {
        id: "navArticels",
        title: "Bài viết",
        linkTo: "articles",
    },
    {
        id: "navMessages",
        title: "Tin nhắn",
        linkTo: "messages",
    },
    {
        id: "navNotifications",
        title: "Thông báo",
        linkTo: "notifications",
    },
    {
        id: "navAccount",
        title: "Tài khoản",
        isDropdown: true,
        children: [
            {
                id: "navProfile",
                title: "Hồ sơ của tôi",
                linkTo: "profile",
            },
            {
                id: "navMyJobs",
                title: "Tin tuyển dụng của tôi",
                linkTo: "job/create",
            },
            {
                id: "navLogOut",
                title: "Đăng xuất",
                linkTo: "logout",
            },
        ],
    },
];

const NAV_JOBSEEKER_ITEMS = [
    {
        id: "navJobs",
        title: "Săn việc làm",
        linkTo: "jobs",
    },
    {
        id: "navArticles",
        title: "Bảng tin",
        linkTo: "articles",
    },
    {
        id: "navMessages",
        title: "Tin nhắn",
        linkTo: "messages",
    },
    {
        id: "navNotifications",
        title: "Thông báo",
        linkTo: "notifications",
    },
    {
        id: "navProfile",
        title: "Hồ sơ",
        linkTo: "profile",
    },
    {
        id: "navLogOut",
        title: "Đăng xuất",
        linkTo: "logout",
    },
];

const container = document.getElementById("root");
const root = createRoot(container);

const Logout = ({ setUser }) => {
    AuthApi.Logout();
    setUser(null);
    return <Navigate to="/" />;
};

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue((value) => value + 1);
}

const App = (props) => {
    var currentUser = AuthApi.GetCurrentUser();
    if (currentUser) currentUser = currentUser.data;
    console.log(currentUser);
    const [user, setUser] = useState(currentUser);

    console.log(window.location);

    let navigation_items = NAV_GENERAL_ITEMS;

    if (user) {
        if (user.Roles === "recruiter") navigation_items = NAV_RECRUITER_ITEMS;
        else if (user.Roles === "job-seeker") navigation_items = NAV_JOBSEEKER_ITEMS;
    }

    const rerender = useForceUpdate();
    return (
        <div>
            {window.location.pathname !== "/auth" && (
                <Navbar items={navigation_items} rerenderApp={rerender} />
            )}
            <Routes>
                {/* Homepage */}
                <Route path="/*" element={<Job />} />

                {/* Login */}
                <Route path="auth" element={<SignInAndSignUp setUser={setUser} />} />

                {/* Article */}
                <Route path="articles" element={<Article />} />

                {/* Messages */}
                <Route
                    path="messages"
                    element={
                        <SecuredRoute user={user} permission="route.authenticated">
                            <Message />
                        </SecuredRoute>
                    }
                />

                {/* Notifications */}
                <Route
                    path="notifications"
                    element={
                        <SecuredRoute user={user} permission="route.authenticated">
                            <Notification />
                        </SecuredRoute>
                    }
                />

                {/* Profile */}
                <Route
                    path="profile"
                    element={
                        <SecuredRoute user={user} permission="route.authenticated">
                            <Profile />
                        </SecuredRoute>
                    }
                />

                {/* Profile */}
                <Route
                    path="logout"
                    element={
                        <SecuredRoute user={user} permission="route.authenticated">
                            <Logout setUser={setUser} />
                        </SecuredRoute>
                    }
                />

                {/* Admin Control Panel */}
                <Route path="AdminCP/*" element={<Admin />} />
            </Routes>
        </div>
    );
};

root.render(
    <>
        <BrowserRouter>
            <App />
            <AuthVerify />
        </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
