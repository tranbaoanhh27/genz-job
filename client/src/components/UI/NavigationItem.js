import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationItem = (props) => {
    return (
        <>
            {props.isDropdown !== true && (
                <li id={props.item.id} className="nav-item ms-3" onClick={props.rerenderApp}>
                    <Link
                        to={props.item.linkTo}
                        className="nav-link"
                        style={{ color: props.theme.text }}>
                        {props.item.title}
                    </Link>
                </li>
            )}
            {props.isDropdown === true && (
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: props.theme.text }}>
                        {props.item.title}
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        style={{ background: props.theme.card }}>
                        {props.item.children.map((item) => (
                            <DropdownItem
                                key={item.id}
                                id={item.id}
                                className="nav-item ms-3 dropdown-item"
                                onClick={props.rerenderApp}>
                                <Link
                                    to={item.linkTo}
                                    className="nav-link"
                                    style={{ color: "white" }}>
                                    {item.title}
                                </Link>
                            </DropdownItem>
                        ))}
                    </ul>
                </li>
            )}
        </>
    );
};

export default NavigationItem;

const DropdownItem = styled.li`
    color: inherit;

    &:hover {
        background: inherit;
        color: inherit;
        width: fit-content;
    }
`;
