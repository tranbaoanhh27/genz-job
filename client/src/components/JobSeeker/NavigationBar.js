import React from "react";
import { Link } from "react-router-dom";

export default function JobseekerNavbar() {
    function onPageSelect(id) {
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName("nav-item").item(i).style.borderBottom = "";
            document.getElementsByClassName("nav-item").item(i).style.color = "";
        }
        document.getElementById(id).style.borderBottom = "3px solid blue";
        document.getElementById(id).style.color = "blue";
    }
    return (
        <nav className="navbar static-top navbar-expand-lg navbar-light" style={{ background: "#e3f2fd" }}>
            <div className="container">
                <a href="#" className="navbar-brand mb-0 h1">
                    <img
                        className="d-inline-block align-top"
                        src="https://raw.githubusercontent.com/theanhbr01/CSC13002/front-end-recruiter-jobs-management/client/src/assets/images/landscape-logo.png"
                        height="45"
                    />
                </a>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Tìm kiếm người dùng..."
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-primary" style={{ width: "130px" }} type="submit">
                        Tìm kiếm
                    </button>
                </form>
                <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    className="navbar-toggler"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Ẩn/Hiện bảng điều hướng">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li
                            id="navJobs"
                            className="nav-item ms-3"
                            style={{ borderBottom: "3px solid blue" }}
                            onClick={() => onPageSelect("navJobs")}>
                            <Link to="jobs" className="nav-link">
                                Săn việc làm
                            </Link>
                        </li>
                        <li id="navArticles" className="nav-item ms-3" onClick={() => onPageSelect("navArticles")}>
                            <Link to="articles" className="nav-link">
                                Bảng tin
                            </Link>
                        </li>
                        <li id="navMessages" className="nav-item ms-3" onClick={() => onPageSelect("navMessages")}>
                            <Link to="messages" className="nav-link">
                                Tin nhắn
                            </Link>
                        </li>
                        <li
                            id="navNotifications"
                            className="nav-item ms-3"
                            onClick={() => onPageSelect("navNotifications")}>
                            <Link to="notifications" className="nav-link">
                                Thông báo
                            </Link>
                        </li>
                        <li id="navProfile" className="nav-item ms-3" onClick={() => onPageSelect("navProfile")}>
                            <Link to="profile" className="nav-link">
                                Hồ sơ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
