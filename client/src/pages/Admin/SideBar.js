import React, { useState, useEffect } from 'react';

export function SideBar({ setPage }) {
    return (

        <ul className="Sidebar navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            { /* Sidebar - Brand */ }
            <a className="sidebar-brand d-flex align-items-center justify-content-center mb-5" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">GenZ Job Admin</div>
            </a>

            { /* Nav Item - Dashboard */ }
            <li className="nav-item mb-3">
                <a className="nav-link" href='#' onClick={ () => setPage("Tài khoản người dùng") }>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Tài khoản người dùng</span></a>
            </li>

            { /* Divider */ }
            <hr className="sidebar-divider mb-3"/>

            <li className="nav-item mb-3">
                <a className="nav-link" href="#" onClick={ () => setPage("Bài đăng tuyển dụng")}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Bài đăng tuyển dụng</span></a>
            </li>

            <div class="text-center d-none d-md-inline mt-5">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>

    )
}