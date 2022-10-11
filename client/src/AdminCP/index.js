import React, { Component } from "react";
import "./assets/css/sb-admin-2.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

class AdminCP extends Component {
    render() {
      return (
        <>
          <Routes>
            <Route path="dashboard" element={<Dashboard />}/> 
          </Routes>
        </>
    )}
  }
  
  export default AdminCP;
