import React from 'react';
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

import reportWebVitals from './reportWebVitals';

import AuthVerify from "./common/AuthVerify";
import AdminCP from "./AdminCP";
import Recruiter from './pages/Recruiter/Recruiter';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
  <BrowserRouter>
    <Routes>       
        {/* Homepage */}
        <Route path="/*" element={<App />}/> 

        {/* Admin Control Panel */}
        <Route path="AdminCP/*" element={<AdminCP />}/> 

        <Route path='/recruiter' element={ < Recruiter/> } />
    </Routes>
    <AuthVerify />
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
