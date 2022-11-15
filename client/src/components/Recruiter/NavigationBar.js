import React from "react";
import { Link } from "react-router-dom";

export default function RecruiterNavbar() {
    return (
        <nav className="navbar static-top navbar-expand-lg navbar-light bg-light">
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
                    <button
                        className="btn btn-outline-success"
                        style={{ width: "130px" }}
                        type="submit">
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
                        <li className="nav-item ms-3">
                            <Link to="jobs" className="nav-link">
                                Tin tuyển dụng
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="articles" className="nav-link">
                                Bài viết
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="messages" className="nav-link">
                                Tin nhắn
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="notifications" className="nav-link">
                                Thông báo
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
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
