import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/_Header";
import HomePage from "./pages/Home/Home";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";
import NotFoundPage from "./pages/errors/404";


import AuthVerify from "./common/AuthVerify";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<HomePage />}/>            
            <Route path="/home" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />} />            
            <Route path="/signup" element={<SignupPage />} />

            {/* 404 Page */}
            <Route path='*' element={<NotFoundPage />} />           
          </Routes>
        </div>
        <AuthVerify />
      </>
  )}
}

export default App;