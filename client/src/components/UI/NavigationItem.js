import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = (props) => {
    return (
        <li
            id={props.id}
            className="nav-item ms-3">
            <Link to={props.linkTo} className="nav-link">
                {props.title}
            </Link>
        </li>
    );
};

export default NavigationItem;
