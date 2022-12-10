import React from "react";
import NavigationItem from "./NavigationItem";
import UserSearch from "./UserSearch";

export default function NavigationBar(props) {
    /*
        props = {
            items = [
                {
                    id: string
                    title: string
                    linkTo: string
                }
            ]
        }
    */
    return (
        <nav
            className="navbar static-top navbar-expand-lg navbar-light"
            style={{ background: "#e3f2fd" }}>
            <div className="container">
                <a href="#" className="navbar-brand mb-0 h1">
                    <img
                        className="d-inline-block align-top"
                        src="https://raw.githubusercontent.com/theanhbr01/CSC13002/front-end-recruiter-jobs-management/client/src/assets/images/landscape-logo.png"
                        height="45"
                    />
                </a>
                <UserSearch />
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
                        {props.items.map((item) => (
                            <NavigationItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                linkTo={item.linkTo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
