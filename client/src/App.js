import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/_Header";
import NotFoundPage from "./pages/errors/404";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";
import Homepage from "./pages/Home/Home";

class App extends Component {
  render() {
    return ( 
      <>
        <Header />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />}/> 

          {/* Login Page */}
          <Route path="Login" element={<LoginPage />}/> 

          {/* Signup Page */}
          <Route path="Signup" element={<SignupPage />}/>  

          {/* 404 Page */}
          <Route path='*' element={<NotFoundPage />} />   
        </Routes> 
      </>
  )}
}

export default App;