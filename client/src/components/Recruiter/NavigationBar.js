import React from "react";

export default function RecruiterNavbar() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
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
                            aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">
                            Search
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
                            <li className="nav-item active">
                                <a href="#" className="nav-link">
                                    Tin tuyển dụng
                                </a>
                            </li>
                            <li className="nav-item ms-3">
                                <a href="#" className="nav-link">
                                    Bài viết
                                </a>
                            </li>
                            <li className="nav-item ms-3">
                                <a href="#" className="nav-link">
                                    Tin nhắn
                                </a>
                            </li>
                            <li className="nav-item ms-3">
                                <a href="#" className="nav-link">
                                    Thông báo
                                </a>
                            </li>
                            <li className="nav-item ms-3">
                                <a href="#" className="nav-link">
                                    Hồ sơ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
