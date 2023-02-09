import React from "react";
import { Route, Routes } from "react-router-dom";
import MyProfile from "./Profile/index";

export default function Profile({ user }) {
    return (
        <div>
            <Routes>
                <Route index element={<MyProfile />} />
                <Route path=":username" element={<MyProfile user={user} />} />
            </Routes>
        </div>
    );
}
