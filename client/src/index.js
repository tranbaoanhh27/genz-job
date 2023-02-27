import React, { useContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RecruiterJobPage from "./pages/Job/RecruiterJobs";
import { HomePage } from "./pages/Home/index";
import ArticlePage from "./pages/Article/ArticlePage";
import Message from "./pages/Message/index";
import Notification from "./pages/Notification/index";
import Profile from "./pages/Profile/index";
import SearchResult from "./pages/SearchResult/index";
import { Admin } from "./pages/Admin/index";
import Navbar from "./components/UI/NavigationBar/NavigationBar";
import { JobDetails } from "./components/Job/JobDetails";
import "./assets/css/App.css";
import { NAV_GENERAL_ITEMS, NAV_RECRUITER_ITEMS, NAV_JOBSEEKER_ITEMS } from "./Data/NavigationItems";
import reportWebVitals from "./reportWebVitals";
import AuthApi from "./api/AuthApi";
import AuthVerify from "./common/AuthVerify";
import SecuredRoute from "./components/SecuredRoute";
import useRender from "./hooks/use-render";
import AppContext, { AppContextProvider } from "./contexts/app-context";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";

import "./App.css";
import Toast from "./components/UI/Toast/Toast";
import ToastContext, { ToastContextProvider } from "./contexts/toast-context";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
    const appContext = useContext(AppContext);
    const [navItems, setNavItems] = useState(NAV_GENERAL_ITEMS);

    useEffect(() => {
        if (appContext.user) {
            const role = appContext.user.Roles;
            if (role === "recruiter") setNavItems(NAV_RECRUITER_ITEMS);
            else if (role === "job-seeker") setNavItems(NAV_JOBSEEKER_ITEMS);
        } else setNavItems(NAV_GENERAL_ITEMS);
    }, [appContext.user]);

    const forceRender = useRender();

    return (
        <>
            <Navbar items={navItems} rerenderApp={forceRender} />
            <Toast />
            <Routes>
                {/* Homepage */}
                <Route path="/*" element={<HomePage />} />
                <Route path="/homepage" element={<HomePage />} />

                {/* Search */}
                <Route path="s/*" element={<SearchResult />} />

                {/* Profile */}
                <Route path="p/*" element={<Profile user={appContext.user} />} />

                {/* Authentication */}
                <Route path="login/" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />

                {/* Job */}
                <Route
                    path="myjobs/*"
                    element={
                        <SecuredRoute user={appContext.user} permission="route.recruiter" redirectTo="/">
                            <RecruiterJobPage />
                        </SecuredRoute>
                    }
                />
                <Route path="job/detail/:jobId" element={<JobDetails />} />

                {/* Article */}
                <Route path="articles/*" element={<ArticlePage />} />

                {/* Messages */}
                <Route
                    path="messages/*"
                    element={
                        <SecuredRoute user={appContext.user} permission="route.authenticated">
                            <Message />
                        </SecuredRoute>
                    }
                />

                {/* Notifications */}
                <Route
                    path="notifications/*"
                    element={
                        <SecuredRoute user={appContext.user} permission="route.authenticated">
                            <Notification />
                        </SecuredRoute>
                    }
                />

                {/* Profile */}
                <Route path="profile" element={<SecuredProfile user={appContext.user} />} />

                {/* Logout */}
                <Route
                    path="logout"
                    element={
                        <SecuredRoute user={appContext.user} permission="route.authenticated">
                            <Logout />
                        </SecuredRoute>
                    }
                />

                {/* Admin Control Panel */}
                <Route path="AdminCP/*" element={<Admin />} />
            </Routes>
        </>
    );
};

root.render(
    <AppContextProvider>
        <ToastContextProvider>
            <BrowserRouter>
                <App />
                <AuthVerify />
            </BrowserRouter>
        </ToastContextProvider>
    </AppContextProvider>
);

const SecuredProfile = ({ user }) => {
    if (user) return <Navigate to={"/p/" + user.UserName} />;
    else return <Navigate to="/" />;
};

const Logout = () => {
    const appContext = useContext(AppContext);
    AuthApi.Logout();
    appContext.setUser(null);
    return <Navigate to="/" />;
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
