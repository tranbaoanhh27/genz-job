import React from "react";
import { DarkTheme, LightTheme } from "../../assets/themes";
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
    document.body.style.paddingTop = "5rem";
    const theme = props.theme === "light" ? LightTheme : DarkTheme;
    return (
        <nav
            className="navbar fixed-top navbar-expand-lg"
            style={{ background: theme.card }}>
            <div className="container-fluid">
                <a href="#" className="navbar-brand mb-0 h1">
                    <img
                        className="d-inline-block align-top"
                        src="https://raw.githubusercontent.com/theanhbr01/CSC13002/master/client/src/assets/images/landscape-logo.png"
                        height="45"
                    />
                </a>
                <UserSearch theme={theme}/>
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
                                theme={theme}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
