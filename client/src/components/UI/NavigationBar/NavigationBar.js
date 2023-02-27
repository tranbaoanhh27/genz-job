import React from "react";
import UserSearch from "../UserSearch/UserSearch";
import NavigationItem from "./NavigationItem";

import css from "./NavigationBar.module.css";

const NavigationBar = (props) => {
    return (
        <nav className={css.navbar}>
            <div className={css["logo-container"]}>
                <a href="/">
                    <picture>
                        <source media="(max-width: 700px)" srcSet="/assets/img/small-logo.png" />
                        <source media="(min-width: 700px)" srcSet="/assets/img/landscape-logo.png" />
                        <img className={css.logo} src="/assets/img/landscape-logo.png" alt="Brand Logo" />
                    </picture>
                </a>
            </div>

            <div className={css["search-bar-container"]}>
                <UserSearch />
            </div>

            <ul className={css["items-container"]}>
                {props.items.map((item) => (
                    <NavigationItem
                        key={item.id}
                        item={item}
                        isDropdown={item.isDropdown}
                        rerenderApp={props.rerenderApp}
                    />
                ))}
            </ul>
        </nav>
    );
}

export default NavigationBar;